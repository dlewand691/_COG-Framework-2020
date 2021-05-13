// @codekit-prepend 'jquery/dist/jquery.js'
// @codekit-prepend 'foundation-sites/dist/js/foundation.min.js'


// ======================================================================
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
// ======================================================================


// ======================================================================
// FOUNDATION UTILITY SCRIPTS
// ======================================================================
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.core.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.mediaQuery.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.motion.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.box.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.keyboard.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.nest.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.imageLoader.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.timer.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.touch.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.util.triggers.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.smoothScroll.min.js'


// ======================================================================
// FOUNDATION PLUGINS
// ======================================================================
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.abide.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.accordion.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.accordionMenu.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.drilldown.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.dropdown.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.dropdownMenu.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.equalizer.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.interchange.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.magellan.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.offcanvas.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.responsiveMenu.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.responsiveToggle.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.reveal.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.sticky.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.tabs.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.toggler.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.tooltip.min.js'
// @codekit-prepend 'foundation-sites/dist/js/plugins/foundation.responsiveAccordionTabs.min.js'
// @codekit-prepend 'motion-ui/dist/motion-ui.js'


// ======================================================================
// ██████  ██      ██    ██  ██████  ██ ███    ██ ███████
// ██   ██ ██      ██    ██ ██       ██ ████   ██ ██
// ██████  ██      ██    ██ ██   ███ ██ ██ ██  ██ ███████
// ██      ██      ██    ██ ██    ██ ██ ██  ██ ██      ██
// ██      ███████  ██████   ██████  ██ ██   ████ ███████
// ======================================================================
// @codekit-prepend 'lazysizes/lazysizes.js'
// @codekit-prepend 'lazysizes/plugins/unveilhooks/ls.unveilhooks.js'
// @codekit-prepend 'swiper/swiper-bundle.min.js'
// @codekit-prepend 'aos/dist/aos.js'


$(document).foundation();

// LOADER
$(window).load(function() {
    $("body").addClass('all-loaded');
});

// ======================================================================
//  ██████  ██████  ███    ███ ██████   ██████  ███    ██ ███████ ███    ██ ████████ ███████
// ██      ██    ██ ████  ████ ██   ██ ██    ██ ████   ██ ██      ████   ██    ██    ██
// ██      ██    ██ ██ ████ ██ ██████  ██    ██ ██ ██  ██ █████   ██ ██  ██    ██    ███████
// ██      ██    ██ ██  ██  ██ ██      ██    ██ ██  ██ ██ ██      ██  ██ ██    ██         ██
//  ██████  ██████  ██      ██ ██       ██████  ██   ████ ███████ ██   ████    ██    ███████
// ======================================================================
// @codekit-append 'accordions.js'
// @codekit-append 'gradient-background-steps.js'
// @codekit-append 'gradient-steps-tabs.js'

Foundation.Abide.defaults.patterns["dashes_only"] = /^[0-9-+]*$/;


$("[data-off-canvas]").on("opened.zf.offcanvas", function() {
  fixScroll();
  $(window).on("scroll", fixScroll);
});

$("[data-off-canvas]").on("closed.zf.offcanvas", function() {
  $(window).off("scroll", fixScroll);
  $sticky.css("transform", "translateY(0)");
});


// ======================================================================
// LAZY LOADING
// ======================================================================

// window.lazySizesConfig = window.lazySizesConfig || {};
// lazySizesConfig.loadMode = 3;
// lazySizesConfig.expFactor = 4;
// lazySizesConfig.expand = 500;
//add simple support for background images:
document.addEventListener("lazybeforeunveil", function(e) {
  var bg = e.target.getAttribute("data-bg");
  if (bg) {
    e.target.style.backgroundImage = "url(" + bg + ")";
  }
});

// -----  End of LAZY LOADING  ----------




// ======================================================================
// =            SCROLLUP            =
// ======================================================================
if ($("#scrollUp").length) {
  var scrollTrigger = 300, // px
    backToTop = function() {
      var scrollTop = $(window).scrollTop();
      if (scrollTop > scrollTrigger) {
        $("#scrollUp").addClass("scrollup--show");
      } else {
        $("#scrollUp").removeClass("scrollup--show");
      }
    };
  backToTop();
  $(window).on("scroll", function() {
    backToTop();
  });
  $("#scrollUp").on("click", function(e) {
    e.preventDefault();
    $("html,body").animate({
      scrollTop: 0
    }, 750);
  });
}
// -----  End of SCROLLUP  -------------------------


// ======================================================================
// HAMBURGER ICON ANIMATION
// ======================================================================

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(this).toggleClass("is-active");
  });
  $(".js-off-canvas-overlay").click(function() {
    $(".hamburger").removeClass("is-active");
  });
});
// -----  End of HAMBURGER ICON ANIMATION  ----------

// ======================================================================
//  █████   ██████  ███████
// ██   ██ ██    ██ ██
// ███████ ██    ██ ███████
// ██   ██ ██    ██      ██
// ██   ██  ██████  ███████
// ======================================================================

$(document).ready(function() {
  AOS.init({
    // duration: 750,
    // mirror: false,
    startEvent: "load",
    // offset: "150"
  });
});

// -----  End of AOS- ANIMATE ON SCROLL  ----------


// ======================================================================
// ███████ ██     ██ ██ ██████  ███████ ██████
// ██      ██     ██ ██ ██   ██ ██      ██   ██
// ███████ ██  █  ██ ██ ██████  █████   ██████
//      ██ ██ ███ ██ ██ ██      ██      ██   ██
// ███████  ███ ███  ██ ██      ███████ ██   ██
// ======================================================================
var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  grabCursor: true,
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
    loadPrevNextAmount: 5
  },
  loadOnTransitionStart: true,
  keyboard: {
    enabled: true
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  // observer: true,
  // observeParents: true
});
// -----  End of SWIPER  -----------------------------------