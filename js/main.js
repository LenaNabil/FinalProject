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





const images = [
  {
    category: "Web Design",
    image: "../img/image2.jpg"
  },
  {
    category: "Web Design",
    image: "../img/image3.jpg"
  },
  {
    category: "Web Design",
    image: "../img/image4.jpg"
  },
  {
    category: "Photography",
    image: "../img/image5.jpg"
  },
  {
    category: "Development",
    image: "../img/image5.jpg"
  },
  {
    category: "Development",
    image: "../img/image5.jpg"
  },
];

function filterImages(category) {
  const portfolioContainer = document.querySelector('.portfolto');
  portfolioContainer.innerHTML = '';

  if (category === 'All') {
    images.forEach(image => displayImage(image));
  } else {
    const filteredImages = images.filter(image => image.category === category);
    filteredImages.forEach(image => displayImage(image));
  }
}

function displayImage(image) {
  const imgElement = document.createElement('img');
  imgElement.src = image.image;
  imgElement.alt = '';
  imgElement.srcset = '';

  const colDiv = document.createElement('div');
  colDiv.classList.add('col-4');
  colDiv.appendChild(imgElement);

  const portfolioContainer = document.querySelector('.portfolto');
  portfolioContainer.appendChild(colDiv);
}

// أول تحميل للصفحة، عرض كل الصور
window.onload = () => filterImages('All');