// Close mobile nav on click
$(document).on('click','.navbar-collapse.show',function(e) {
  if( $(e.target).is('a') ) {
      $(this).collapse('hide');
  }
});

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
      $('.mobile-nav').removeClass('show');
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


 // Smooth Scroll
 // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top-100
      }, 500, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});