// let images = ["img/01.webp","img/02.webp","img/03.webp", "img/04.webp", "img/05.webp"]
let images = document.querySelectorAll(".gallery .col-3 img");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let index = 0;

images[index].classList.remove("d-none");
images[index].classList.add("active");

console.warn(images);

next.addEventListener("click", function () {
  if (images.length - 1 == index) {
    console.log(index, "INDEX");
    console.log(images.length);
    images[index].classList.add("d-none");
    images[index].classList.remove("active");
    index = 0;
    images[index].classList.remove("d-none");
    images[index].classList.add("active");
  } else {
    images[index].classList.add("d-none");
    images[index].classList.remove("active");
    index++;
    images[index].classList.remove("d-none");
    images[index].classList.add("active");
  }
 
});

prev.addEventListener("click", function () {
    if (index == 0) {
      console.log(index, "INDEX");
      console.log(images.length);
      images[index].classList.add("d-none");
      images[index].classList.remove("active");
      index = images.length - 1;
      images[index].classList.remove("d-none");
      images[index].classList.add("active");
    } else {
      images[index].classList.add("d-none");
      images[index].classList.remove("active");
      index--;
      images[index].classList.remove("d-none");
      images[index].classList.add("active");
    }
   
  });
