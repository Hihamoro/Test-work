const bigImages = document.querySelectorAll("img");
let deletedImages = JSON.parse(localStorage.getItem("deletedImages")) || [];

const overlayDiv = document.createElement("div");
overlayDiv.classList.add("overlay");

const overlayBackgroundDiv = document.createElement("div");
overlayBackgroundDiv.classList.add("overlay-background");
overlayDiv.appendChild(overlayBackgroundDiv);

const imageContainerDiv = document.createElement("div");
imageContainerDiv.classList.add("image-container");

bigImages.forEach((image) => {
  image.addEventListener("click", () => {
    const fullImage = document.createElement("img");
    fullImage.src = image.src;

    const closeButton = document.createElement("button");
    closeButton.innerText = "Закрити";
    closeButton.classList.add("close-button");

    closeButton.addEventListener("click", () => {
      overlayDiv.remove();
    });

    imageContainerDiv.innerHTML = "";
    imageContainerDiv.appendChild(fullImage);
    imageContainerDiv.appendChild(closeButton);
    overlayDiv.appendChild(imageContainerDiv);

    document.body.appendChild(overlayDiv);
  });
});
const deleteImage = (image) => {
  deletedImages.push(image.src);
  localStorage.setItem("deletedImages", JSON.stringify(deletedImages));
  image.remove();
  const images = document.querySelectorAll("img");
  const imageCount = images.length;
  infoDiv.innerText = `Кількість зображень на сторінці: ${imageCount} | ${new Date().toLocaleString(
    "ua-UA"
  )}`;
};

const restoreDeletedImages = () => {
  deletedImages.forEach((deletedImage) => {
    const images = document.querySelectorAll(`img[src="${deletedImage}"]`);
    images.forEach((image) => {
      image.style.display = "block";
    });
  });
  deletedImages = [];
  localStorage.removeItem("deletedImages");
};

bigImages.forEach((image) => {
  const cross = document.createElement("span");
  cross.innerHTML = "&#10060;";
  cross.classList.add("cross");
  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");
  imageWrapper.appendChild(image);
  imageWrapper.appendChild(cross);
  cross.addEventListener("click", (event) => {
    event.stopPropagation();
    deleteImage(image);
  });
  document.querySelector(".grid").appendChild(imageWrapper);

  if (deletedImages.includes(image.src)) {
    image.style.display = "none";
  }
});

const restoreButton = document.createElement("button");
restoreButton.innerText = "Відновити";
restoreButton.classList.add("restore-button");
restoreButton.addEventListener("click", () => {
  restoreDeletedImages();
});

document.body.appendChild(restoreButton);
