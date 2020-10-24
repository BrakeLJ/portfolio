//Document ready 
$(function(){
  
  AOS.init();
  //Handles scroll position/nav appearance 
  $(window).scroll(function() {
    const winScroll = $(window).scrollTop() + 100;
    const about = $('#about').offset().top;
    const skills = $('#skills').offset().top;
    const projects = $('#projects').offset().top;
    const contact = $('#contact').offset().top;
    
    //Adds active class based on scroll position in document
    if (winScroll < about) {
      $(".navigation__home").addClass("navigation__active")
      $(".navigation__about").removeClass("navigation__active")
    }

    if (winScroll >= about) {
      $(".navigation__about").addClass("navigation__active")
      $(".navigation__home").removeClass("navigation__active")
    } else {
      $(".navigation__about").removeClass("navigation__active")

    };
    if (winScroll >= skills) {
      $(".navigation__skills").addClass("navigation__active")
      $(".navigation__about").removeClass("navigation__active")
    } else {
      $(".navigation__skills").removeClass("navigation__active")
    };

    if (winScroll >= projects) {
      $(".navigation__projects").addClass("navigation__active")
      $(".navigation__skills").removeClass("navigation__active")
    } else {
      $(".navigation__projects").removeClass("navigation__active")
    };

    if (winScroll + 100 >= contact) {
      $(".navigation__contact").addClass("navigation__active")
      $(".navigation__projects").removeClass("navigation__active")
    } else {
      $(".navigation__contact").removeClass("navigation__active")
    };

    //Changes background of nav when positioned below header
    if (winScroll >= about) {
      $("nav").addClass("nav__scroll");
    } else {
      $("nav").removeClass("nav__scroll");
    };
  });

  //toggles the nav bar for mobile view
  $(".navigation__bars").click(function(){
    $(".navigation__list").toggleClass("navigation__show");
  });

  $(".navigation__link").click(function(){
    $(".navigation__list").toggleClass("navigation__show");
    $(".bar1, .bar2, .bar3").toggleClass("change")
  });

  //Trigger animation for mobile menu
  $(".navigation__bars").on("click", function() {
    $(".bar1, .bar2, .bar3").toggleClass("change")
  })

});


