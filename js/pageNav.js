// Sidebar menu and mobile nav for other pages
$(function(){

  var $mainLogo = $('.brand');
  var shrinkHeader = $mainLogo.offset().top;

  var windowsize = $(window).width();

$(window).on("load resize scroll",function(e){
  
  windowsize = $(window).width();

  if (windowsize > 576) {
    if ($('.mobile-nav').hasClass('show')) {
      $('.mobile-nav').removeClass('show');
      $('.brand-wrapper').addClass('small-brand');
      $('.brand-wrapper').removeClass('hide');
      $('.more').addClass('hide');
      $('#sidebar-nav').addClass('show');
      $('#main').removeClass('mobile-margin');
    }
  }
  else {
    if ($('.brand-wrapper').hasClass("small-brand")) {
      $('.brand-wrapper').addClass('hide');
      $('.more').addClass('hide');
      $('#sidebar-nav').addClass('hide');
      $('.mobile-nav').addClass('show');
      $('#main').addClass('mobile-margin');
    }
  }
});

 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }

 });