document.addEventListener("DOMContentLoaded", function () {
  const gallery = document.querySelector(".gallery");
  const fullImageContainer = document.querySelector(".full-image-container");
  const fullImage = document.querySelector(".full-image");

  gallery.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
      const imageUrl = event.target.src;
      fullImage.src = imageUrl;
      fullImageContainer.style.display = "flex";
    }
  });
  fullImageContainer.addEventListener("click", function () {
    fullImageContainer.style.display = "none";
  });
  document.addEventListener("keydown", function (event) {
    if (fullImageContainer.style.display !== "flex") {
      return;
    }
  
    const images = gallery.querySelectorAll(".image");
    const currentImageIndex = Array.from(images).findIndex(image => image.src === fullImage.src);
    if (event.key === "ArrowRight") {
      const nextImageIndex = (currentImageIndex + 1) % images.length;
      const nextImage = images[nextImageIndex];
      if (nextImage) {
        fullImage.src = nextImage.src;
      }
    }
    else if (event.key === "ArrowLeft") {
      const previousImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      const previousImage = images[previousImageIndex];
      if (previousImage) {
        fullImage.src = previousImage.src;
      }
    }
  });
});
// 2
function createBoxes() {
  const amount = document.getElementById('boxNumberInput').value;
  const boxesContainer = document.getElementById('boxes');


  boxesContainer.innerHTML = '';

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesContainer.appendChild(box); 
  }
}

function destroyBoxes() {
  const boxesContainer = document.getElementById('boxes');
  boxesContainer.innerHTML = '';
  document.getElementById('destroyButton').addEventListener('click', destroyBoxes);
}
document.getElementById('renderButton').addEventListener('click', function () {
  createBoxes();
});

document.getElementById('destroyButton').addEventListener('click', function () {
  destroyBoxes();
});
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}