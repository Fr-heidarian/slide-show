let index = 0;
const images = document.querySelectorAll(".images-box img");

const nextSlide = () => {
  () => {
    images[index].style.display = "none";
    index++; 
    if (index >= images.length) {
      index = 0;
    }
    images[index].style.display = "block";
  };
};
const previousSlide = () => {
  images[index].style.display = "none";
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
};

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".previous").addEventListener("click", previousSlide);
setInterval(nextSlide, 3000);
