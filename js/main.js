// header scroll

let nav = document.querySelector(".navbar");

window.onscroll = function() {

   if(document.documentElement.scrollTop > 100){

       nav.classList.add("header-scrolled");
   }else{
       nav.classList.remove("header-scrolled");
   }
}

//  nav hide
// let navBar = document.querySelectoraAll(".nav-link");
// let navCollapse = document.querySelector(".nav-collapse.collapse");

// navBar.array.forEach(function {
   
// });

// Back to top button
$(window).scroll(function () {
   if ($(this).scrollTop() > 300) {
       $('.back-to-top').fadeIn('slow');
   } else {
       $('.back-to-top').fadeOut('slow');
   }
});
$('.back-to-top').click(function () {
   $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
   return false;
});
AOS.init();

   