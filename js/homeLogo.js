// Shrink logo on scroll
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
    }

    $(window).scroll(function() {
      var scroll = getCurrentScroll();

        if ( scroll >= shrinkHeader ) {
             $('.brand-wrapper').addClass('small-brand');
             $('.more').addClass('hide');
             $('#sidebar-nav').addClass('show');
             $('.mobile-nav').removeClass('show');
          }
          else {
              $('.brand-wrapper').removeClass('small-brand');
              $('.more').removeClass('hide');
              $('#sidebar-nav').removeClass('show');
          }
    });
  }
  else {

    if ($('.brand-wrapper').hasClass("small-brand")) {
      $('.brand-wrapper').addClass('hide');
      $('.more').addClass('hide');
      $('#sidebar-nav').addClass('hide');
      $('.mobile-nav').addClass('show');
    }
    $(window).scroll(function() {
      var scroll = getCurrentScroll();

        if ( scroll >= shrinkHeader ) {
          // $('.brand-wrapper').addClass('hide');
          $('.more').addClass('hide');
          $('#sidebar-nav').addClass('hide');
          $('.mobile-nav').addClass('show');
        }
        else {
            $('.brand-wrapper').removeClass('hide');
            $('.more').removeClass('hide');
            $('#sidebar-nav').removeClass('hide');
            $('.mobile-nav').removeClass('show');
        }
    });
  }
});

 function getCurrentScroll() {
     return window.pageYOffset || document.documentElement.scrollTop;
     }

 });