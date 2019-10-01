// @codekit-prepend '../node_modules/jquery/dist/jquery.min.js'


// =============================================================================================
// ███████  ██████  ██    ██ ███    ██ ██████   █████  ████████ ██  ██████  ███    ██
// ██      ██    ██ ██    ██ ████   ██ ██   ██ ██   ██    ██    ██ ██    ██ ████   ██
// █████   ██    ██ ██    ██ ██ ██  ██ ██   ██ ███████    ██    ██ ██    ██ ██ ██  ██
// ██      ██    ██ ██    ██ ██  ██ ██ ██   ██ ██   ██    ██    ██ ██    ██ ██  ██ ██
// ██       ██████   ██████  ██   ████ ██████  ██   ██    ██    ██  ██████  ██   ████
// ███████  ██████ ██████  ██ ██████  ████████ ███████
// ██      ██      ██   ██ ██ ██   ██    ██    ██
// ███████ ██      ██████  ██ ██████     ██    ███████
//      ██ ██      ██   ██ ██ ██         ██         ██
// ███████  ██████ ██   ██ ██ ██         ██    ███████
// =============================================================================================


// =============================================================================================
// FOUNDATION UTILITY SCRIPTS
// =============================================================================================
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.core.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.motion.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.box.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.keyboard.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.nest.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.imageLoader.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.timer.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.touch.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.util.triggers.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.smoothScroll.min.js'


// =============================================================================================
// FOUNDATION PLUGINS
// =============================================================================================
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.abide.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.accordion.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.accordionMenu.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.drilldown.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.dropdown.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.dropdownMenu.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.equalizer.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.interchange.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.magellan.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.offcanvas.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.responsiveMenu.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.responsiveToggle.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.reveal.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.sticky.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.tabs.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.toggler.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.tooltip.min.js'
// @codekit-prepend '../node_modules/foundation-sites/dist/js/plugins/foundation.responsiveAccordionTabs.min.js'
// @codekit-prepend '../node_modules/motion-ui/dist/motion-ui.min.js'


// =============================================================================================
// ██████  ██      ██    ██  ██████  ██ ███    ██ ███████
// ██   ██ ██      ██    ██ ██       ██ ████   ██ ██
// ██████  ██      ██    ██ ██   ███ ██ ██ ██  ██ ███████
// ██      ██      ██    ██ ██    ██ ██ ██  ██ ██      ██
// ██      ███████  ██████   ██████  ██ ██   ████ ███████
// =============================================================================================
// @codekit-prepend '../node_modules/lazysizes/lazysizes.js'
// @codekit-prepend '../node_modules/lazysizes/plugins/unveilhooks/ls.unveilhooks.js'
// @codekit-prepend '../node_modules/slick-carousel/slick/slick.min.js'
// @codekit-prepend '../node_modules/aos/dist/aos.js'

Foundation.Abide.defaults.patterns['dashes_only'] = /^[0-9-+]*$/;

$(document).foundation();

var $sticky = $('.sticky');

function fixScroll() {
    var topOffset = $(window).scrollTop();
    $sticky.css('transform', 'translate3d(0, ' + topOffset + 'px, 0)');
}

$('[data-off-canvas]').on('opened.zf.offcanvas', function() {
    fixScroll();
    $(window).on('scroll', fixScroll);
});

$('[data-off-canvas]').on('closed.zf.offcanvas', function() {
    $(window).off('scroll', fixScroll);
    $sticky.css('transform', 'translateY(0)');
});

// =============================================================================================
// FORM VALIDATION ON SUBMIT
// =============================================================================================

$("#contact-widget").bind("submit", function(e) {
    e.preventDefault();
    // console.log("submit intercepted");
    return false;
});
$("#contact-widget").bind("forminvalid.zf.abide", function(e, target) {
    // console.log("form is invalid");
    // $(this).find(".button").addClass("disabled");
});
$("#contact-widget").bind("formvalid.zf.abide", function(e, target) {
    // console.log("form is valid");
    // $(this).find(".button").removeClass("disabled");
    $('#thankYouOverlay').foundation('open');
});

// -----  End of FORM VALIDATION ON SUBMIT  ---------------------------------------------

// =============================================================================================
// LAZY LOADING
// =============================================================================================

window.lazySizesConfig = window.lazySizesConfig || {};
lazySizesConfig.loadMode = 3;
lazySizesConfig.expFactor = 4;
lazySizesConfig.expand = 500;
//add simple support for background images:
document.addEventListener('lazybeforeunveil', function(e) {
    var bg = e.target.getAttribute('data-bg');
    if (bg) {
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
});

// -----  End of LAZY LOADING  ---------------------------------------------

// =============================================================================================
// GRAY AND BLUE NAV BAR STICKY SOLUTION
// =============================================================================================

// $('#navBarInPage .sticky').on('sticky.zf.stuckto:top', function() {
//     // console.log($(this));
//     $(this).css({
//         marginTop: $('.sticky').height()
//     });
// });

// -----  End of GRAY AND BLUE NAV BAR STICKY SOLUTION  ---------------------------------------------



// =============================================================================================
//          ABIDE CHECKBOX GROUP VALIDATION
// =============================================================================================

Foundation.Abide.defaults.validators.checkbox_limit = function($el, notrequired, parent) {
    var group = parent.closest('.checkbox-group');
    var min = group.attr('data-abide-validator-min');
    var checked = group.find(':checked').length;
    if (checked >= min) {
        // clear label highlight
        group.find('label').each(function() {
            $(this).removeClass('is-invalid-label');
        });
        // clear checkbox error
        group.find(':checkbox').each(function() {
            $(this).removeClass('is-invalid-input').removeAttr('data-invalid');
        });
        group.find('small.form-error').hide();
        return true;
    } else {
        group.find('small.form-error').css({
            display: 'block'
        });
        return false;
    }
};

// -----  End of ABIDE CHECKBOX GROUP VALIDATION  ---------------------------------------------

// ===========================================================================================
// =            ACCORDION BACKGROUND COLORS            =
// =============================================================================================
$(document).ready(function() {
    $(".accordion-gradient").each(function() {
        var length = $(this).children().length;
        $(this).find(".accordion-item").each(function(index) {
            var colorClass = "accordion-gradient-" + Math.round((index / (length - 1)) * 100);
            // $(this).html(colorClass);
            $(this).addClass(colorClass);
        });
    });
});
// -----  End of ACCORDION BACKGROUND COLORS  --------------------------------------------------------------------

// =============================================================================================
// TABS GRADIENT STEPS
// =============================================================================================

$(".tabs.bg-steps-blue-green").each(function() {
    var length = $(this).children().length;
    $(this).find(".tabs-title").each(function(index) {
        var colorClass = "bg-steps-blue-green-" + Math.round((index / (length - 1)) * 100);
        $(this).addClass(colorClass);
    });
});

$(".tabs.bg-steps-blue").each(function() {
    var length = $(this).children().length;
    $(this).find(".tabs-title").each(function(index) {
        var colorClass = "bg-steps-blue-" + Math.round((index / (length - 1)) * 100);
        $(this).addClass(colorClass);
    });
});

$(".tabs.bg-steps-green").each(function() {
    var length = $(this).children().length;
    $(this).find(".tabs-title").each(function(index) {
        var colorClass = "bg-steps-green-" + Math.round((index / (length - 1)) * 100);
        $(this).addClass(colorClass);
    });
});

// -----  End of TABS GRADIENT STEPS  ---------------------------------------------


// =============================================================================================
// GRADIENT STEPS BACKGROUND
// =============================================================================================

$(".bg-steps-blue").each(function() {
    var length = $(this).children().length;
    $(this).find(".row").each(function(index) {
        var colorClass = "bg-steps-blue-" + Math.round((index / (length - 1)) * 100);
        $(this).addClass(colorClass);
    });
});

$(".bg-steps-green").each(function() {
    var length = $(this).children().length;
    $(this).find(".row").each(function(index) {
        var colorClass = "bg-steps-green-" + Math.round((index / (length - 1)) * 100);
        $(this).addClass(colorClass);
    });
});

// -----  End of GRADIENT STEPS BACKGROUND  ---------------------------------------------


// ===========================================================================================
// =            ACCORDION SCROLL TO TOP            =
// =============================================================================================

$(".accordion-title").click(function() {
    setTimeout(function() {
        $('html,body').animate({
            // scrollTop: $('.is-active').offset().top - 84
        });
    }, 300);
});

// -----  End of ACCORDION SCROLL TO TOP  -----------------------------------------------------------------------

// =============================================================================================
// MAGELLAN AND ACCORDION RESET
// =============================================================================================

$('.accordion').on('mutateme.zf.trigger', function() {
    $('#magellan').foundation('calcPoints');
});

// -----  End of MAGELLAN AND ACCORDION RESET  ---------------------------------------------




// ===========================================================================================
// =            SCROLLUP            =
// =============================================================================================
if ($('#scrollUp').length) {
    var scrollTrigger = 300, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#scrollUp').addClass('scrollup--show');
            } else {
                $('#scrollUp').removeClass('scrollup--show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#scrollUp').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 750);
    });
}
// -----  End of SCROLLUP  -----------------------------------------------------------------------


// =============================================================================================
// HAMBURGER ICON ANIMATION
// =============================================================================================

$(document).ready(function() {
    $(".hamburger").click(function() {
        $(this).toggleClass('is-active');
    });
    $(".js-off-canvas-overlay").click(function() {
        $(".hamburger").removeClass("is-active");
    });
});
// -----  End of HAMBURGER ICON ANIMATION  ---------------------------------------------


// ===========================================================================================
// =            SLICK CAROUSEL            =
// =============================================================================================
$(document).ready(function() {
    $('.slick-carousel').slick({
        // dots: true,
        // adaptiveHeight: true
    });

    $('.slick-home-banner').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    autoplay: false,
                    adaptiveHeight: false,
                },
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ],
    });

    $('.slick-latest-thinking').slick({
        autoplay: true,
        autoplaySpeed: 7500,
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    arrows: false
                },
            }, {
                breakpoint: 1024,
                settings: {
                    autoplay: false,
                    arrows: false,
                    dots: false,
                    draggable: false,
                    swipe: false,
                    touchMove: false,
                },
            },
        ],
    });

});
// -----  End of SLICK CAROUSEL  -----------------------------------------------------------------------



// =============================================================================================
// SUCCINCT - LINE CLAMP/TRUNCATE
// =============================================================================================

$(function() {
    // $('.truncate-40').succinct({
    //     size: 40
    // });
    // $('.truncate-45').succinct({
    //     size: 45
    // });
    // $('.truncate-50').succinct({
    //     size: 50
    // });
    // $('.truncate-60').succinct({
    //     size: 60
    // });
    // $('.truncate-70').succinct({
    //     size: 70
    // });
    // $('.truncate-75').succinct({
    //     size: 75
    // });
    // $('.truncate-80').succinct({
    //     size: 80
    // });
    // $('.truncate-100').succinct({
    //     size: 100
    // });
    // $('.truncate-110').succinct({
    //     size: 110
    // });
    // $('.truncate-120').succinct({
    //     size: 120
    // });
    // $('.truncate-130').succinct({
    //     size: 130
    // });
    // $('.truncate-140').succinct({
    //     size: 140
    // });
    // $('.truncate-150').succinct({
    //     size: 150
    // });
});


// -----  End of SUCCINCT - LINE CLAMP/TRUNCATE  ---------------------------------------------

// =============================================================================================
//  █████   ██████  ███████
// ██   ██ ██    ██ ██
// ███████ ██    ██ ███████
// ██   ██ ██    ██      ██
// ██   ██  ██████  ███████
// =============================================================================================

$(document).ready(function() {
  AOS.init({
      // startEvent: 'load'
  });
});

// -----  End of AOS- ANIMATE ON SCROLL  ---------------------------------------------