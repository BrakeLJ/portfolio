

//Change navigation background colour when scrolling
// window.addEventListener('scroll', function () {
//   const nav = document.querySelector('nav');
//   const scrollPosition = window.scrollY > 0;
//   nav.classList.toggle('nav__scroll', scrollPosition);
// })

// $(window).scroll(function() {
//     const scroll = $(window).scrollTop();
//     if (scroll > 0) {
//         $('nav').addClass('nav__scroll');
//         $('section').each(function(i) {
//             if ($(this).position().top <= windscroll - 100) {
//                 $('nav a.active').removeClass('active');
//                 $('nav a').eq(i).addClass('active');
//             }
//         });

//     } else {

//         $('nav').removeClass('fixed');
//         $('nav a.active').removeClass('active');
//         $('nav a:first').addClass('active');
//     }

// }).scroll();​

//Change navigation background when scrolling
$(window).scroll(function() {
  const winScroll = $(window).scrollTop();
  if (winScroll > 800) {
    $("nav").addClass("nav__scroll");
  } else {
    $("nav").removeClass("nav__scroll");
  }
})

// const scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
// console.log(scrollPos);

$(".navigation__bars").click(function(){
  $(".navigation__list").toggleClass("navigation__show");
});

$(".navigation__link").click(function(){
  $(".navigation__list").toggleClass("navigation__show");
});

$(".navigation__link a").click(function() {
  $(".navigation__link a").removeClass("navigation__active");
  $(this).addClass("navigation__active");
})

$(function(){
  
  });
