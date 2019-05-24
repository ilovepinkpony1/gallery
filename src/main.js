'use strict';

window.addEventListener('load', main);

function main() {
  selectImage();
}

function selectImage() {
  const mainImg = document.getElementById('mainImg');
  const smallImages = document.querySelector('.row-img');
  
  smallImages.addEventListener('click', () =>{
  mainImg.src = event.target.src;
  mainImg.alt = event.target.alt;
  });
}