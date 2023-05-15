const images = document.querySelectorAll("img");
const imageCount = images.length;

const infoDiv = document.createElement("div");
infoDiv.innerText = `Кількість зображень на сторінці: ${imageCount} | ${new Date().toLocaleString(
  "ua-UA"
)}`;
document.body.insertBefore(infoDiv, document.body.firstChild);
