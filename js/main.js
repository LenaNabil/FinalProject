var htmlProgressBar = document.getElementById('htmlProgress');
var cssProgressBar = document.getElementById('cssProgress');
var jsProgressBar = document.getElementById('jsProgress');
var bootProgressBar = document.getElementById('bootProgress');



var htmlValue = 0;
var cssValue = 0;
var jsValue = 0;
var bootValue = 0;



var htmlInterval = setInterval(function () {
  if (htmlValue >= 90) {
    clearInterval(htmlInterval);
  }
  htmlValue += 1;
  htmlProgressBar.style.width = htmlValue + '%';
}, 30);

var cssInterval = setInterval(function () {
  if (cssValue >= 80) {
    clearInterval(cssInterval);
  }
  cssValue += 1;
  cssProgressBar.style.width = cssValue + '%';
}, 30);

var jsInterval = setInterval(function () {
  if (jsValue >= 80) {
    clearInterval(jsInterval);
  }
  jsValue += 1;
  jsProgressBar.style.width = jsValue + '%';
}, 30);

var bootInterval = setInterval(function () {
  if (bootValue >= 80) {
    clearInterval(bootInterval);
  }
  bootValue += 1;
  bootProgressBar.style.width = bootValue + '%';
}, 30);


const buttonCategory1 = document.getElementById("buttonCategory1");
const buttonCategory2 = document.getElementById("buttonCategory2");
const buttonAll = document.getElementById("buttonAll");
const imageContainer = document.querySelector(".image-container");
const mainImage = document.getElementById("mainImage");

const imagesByCategory = {
  category1: ["https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"],
  category2: ["https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg", "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"],
};

buttonCategory1.addEventListener("click", () => {
  showImages(imagesByCategory.category1);
});

buttonCategory2.addEventListener("click", () => {
  showImages(imagesByCategory.category2);
});

buttonAll.addEventListener("click", () => {
  showImages(imagesByCategory.category1.concat(imagesByCategory.category2));
});

function showImages(images) {
  const imageElements = images.map(imageSrc => {
    const img = document.createElement("img");
    img.src = imageSrc;
    img.style.maxWidth = "100%";
    return img;
  });

  imageContainer.innerHTML = "";
  imageElements.forEach(img => {
    imageContainer.appendChild(img);
  });
  imageContainer.classList.add("active");
}


