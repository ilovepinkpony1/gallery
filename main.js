'use strict';

const galery = document.querySelectorAll('.image');
console.log(galery);

const mainImg = document.getElementById('mainImg');

galery.forEach (img => {
  img.onclick = event => {
    mainImg.src = event.target.src;
  }
})