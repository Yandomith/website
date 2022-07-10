const showImage = document.createElement("div");
showImage.classList.add("showImage");
document.body.appendChild(showImage);

const images = document.querySelectorAll("img");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    showImage.classList.add("active");
    const img = document.createElement("img");
    img.src = image.src;
    while (showImage.firstChild) {
      showImage.removeChild(showImage.firstChild);
    }
    showImage.appendChild(img);
  });
});

showImage.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  showImage.classList.remove("active");
});
