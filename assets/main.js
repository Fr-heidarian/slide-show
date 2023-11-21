let index = 0;
const images = document.querySelectorAll(".images-box img");
const images2 = document.getElementsByClassName("img-slider");
// console.log(images);
// console.log(images2);

// images.forEach((item) => {
//   console.log(item.src);
// });
// for (let i = 0; i < images2.length; i++) {
//   console.log(images2[i].src);
// }

document.querySelector(".next").addEventListener("click", () => {
  images[index].style.display = "none";
  index++; // 4
  if (index >= images.length) {
    index = 0;
  }
  images[index].style.display = "block";
});

document.querySelector(".previous").addEventListener("click", () => {
  images[index].style.display = "none";
  index--; // -1
  if (index < 0) {
    index = images.length - 1;
  }
  images[index].style.display = "block";
});

const array = [10, 20, 30];
// last index = array.length -1
// console.log(array);

// setTimeout(()=>{
//  console.log("hello");
// }, 3000 )

// setInterval(() => {
//   console.log("hi");
// }, 3000);

setInterval(() => {
      images[index].style.display = "none";
      index++; // 4
      if (index >= images.length) {
        index = 0;
      }
      images[index].style.display = "block";
}, 3000);