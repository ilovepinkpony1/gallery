'use strict';

window.addEventListener('load', selectImage);

function selectImage() {
  const mainImg = document.getElementById('mainImg');
  const smallImages = document.querySelector('.row-img');
  
  smallImages.addEventListener('click', () => {
    if (event.target.src) {
      mainImg.src = event.target.src;
      mainImg.alt = event.target.alt;
    }
  });
}