const bigImages = document.querySelectorAll("img");

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
