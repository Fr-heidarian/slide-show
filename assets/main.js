let index = 0;
const images = document.querySelectorAll(".images-box img");
const indicators = document.querySelectorAll(".indicators span");

const updateIndicators = () => {
  for (let i = 0; i < indicators.length; i++) {
    if (i === index) {
      // indicators[i].style.background = "red";
      indicators[i].classList.add("active");
    } else {
      // indicators[i].style.background = "";
      indicators[i].classList.remove("active");
    }
  }
};
// updateIndicators();

const nextSlide = () => {
  images[index].style.display = "none";

  index++;
  if (index >= images.length) {
    index = 0;
  }
  images[index].style.display = "block";
  updateIndicators();
};

const previousSlide = () => {
  images[index].style.display = "none";
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
  updateIndicators();
};

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".previous").addEventListener("click", previousSlide);
setInterval(nextSlide, 3000);
