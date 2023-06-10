// Верхний слайдер

let rightArrow = document.getElementById('right-arrow');
let leftArrow = document.getElementById('left-arrow');
let mainPic = document.getElementById('main__pic');
let slides = document.getElementsByClassName('slide');

let imagesPath = [];
imagesPath.push('./assets/images/first-img.webp');
imagesPath.push('./assets/images/second-img.webp');
imagesPath.push('./assets/images/thirt-img.webp');
imagesPath.push('./assets/images/fourth-img.webp');

let currentImageIndex = 0;

console.log(slides[0]);

slides[0].style.display = 'none';

const onRightArrow = () => {
  if (currentImageIndex === imagesPath.length - 1) {
    currentImageIndex = 0;
    mainPic.src = imagesPath[currentImageIndex];
    slides[3].style.display = 'block';
    slides[0].style.display = 'none';
  } else {
    currentImageIndex++;
    mainPic.src = imagesPath[currentImageIndex];
    slides[currentImageIndex].style.display = 'none';
    slides[currentImageIndex - 1].style.display = 'block';
  }
};

const onLeftArrow = () => {
  if (currentImageIndex === 0) {
    currentImageIndex = imagesPath.length - 1;
    mainPic.src = imagesPath[currentImageIndex];
    slides[0].style.display = 'block';
    slides[3].style.display = 'none';
  } else {
    currentImageIndex--;
    mainPic.src = imagesPath[currentImageIndex];
    slides[currentImageIndex].style.display = 'none';
    slides[currentImageIndex + 1].style.display = 'block';
  }
};

rightArrow.addEventListener('click', onRightArrow);
leftArrow.addEventListener('click', onLeftArrow);

mainPic.src = imagesPath[currentImageIndex];

// Увеличение картинки 

let modal = document.getElementById('myModal');

let modalImg = document.getElementById('img01');
let captionText = document.getElementById('caption');


let span = document.getElementsByClassName('close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};

let imgFirst = document.getElementById('myImg');
let imgSecond = document.getElementById('myImg2');
let imgThird = document.getElementById('myImg3');

console.log(imgFirst);

imgFirst.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

imgSecond.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

imgThird.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

// Нижний слайдер

let mainPicSlides = document.querySelector('main-pic-slide');

let mainSliderItems = document.querySelector('.main__slider-items');

let MainImagesPath = [];

let offset = 0;

document.getElementById('arrow-right').addEventListener('click', function () {
  mainSliderItems.style.marginLeft = '-640px';
});

document.getElementById('arrow-left').addEventListener('click', function () {
  mainSliderItems.style.marginLeft = '0';
});


