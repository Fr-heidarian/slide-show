let index = 0;
const images = document.querySelectorAll(".images-box img");

document.querySelector(".next").addEventListener("click", () => {
  images[index].style.display = "none";
  index++;
  if (index >= images.length) {
    index = 0;
  }
  images[index].style.display = "block";
});

document.querySelector(".previous").addEventListener("click", () => {
  console.log("hello");
});
