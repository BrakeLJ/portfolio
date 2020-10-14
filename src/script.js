

//Change navigation background colour when scrolling
window.addEventListener('scroll', function () {
  const nav = document.querySelector('nav');
  const scrollPosition = window.scrollY > 0;
  nav.classList.toggle('nav__scroll', scrollPosition);
})

const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
console.log(scrollPos);


// document.addEventListener('DOMContentLoaded', function () {
    
// });

console.log('working');