// Bkgd scroll
jQuery(document).ready(function(){
    if (jQuery(window).width() > 767) {
        $('#who-i-am').scroll(function() {
            var x = $(this).scrollTop();
            $(this).css('background-position', '0% ' + parseInt(-x / 10) + 'px');
        });
    } else {
        
    }
});

// Smooth scroll
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});

// Fade in icons
$(".what-graphic").hide();

$(window).bind("scroll", function() {
    if ($(this).scrollTop() > 520) {
        $(".what-graphic").fadeIn("slow");
    } else {
        $(".what-graphic").stop();
    }
});

//Typer
$('[data-typer-targets]').typer(3000);


// Toggle More Stuff Section
$(".useless-button").click(function () {
    $('.useless-stuff').toggleClass('open');
    event.preventDefault();
});