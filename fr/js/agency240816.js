// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    $('a#scroll').bind('click', function(event) {
        $("body > :not(header)").css('position','');
        $("body > :not(header)").css('left','');
        $("body > :not(header)").css('top','');
    });

    $( document ).ready(function() {
        //$("body > :not(header)").css('display','none');
        $("body > :not(header)").css('position','absolute');
        $("body > :not(header)").css('left','-9999px');
        $("body > :not(header)").css('top','-9999px');
    });

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
})(jQuery); // End of use strict
