var $sticky = $(".sticky");

function fixScroll() {
    var topOffset = $(window).scrollTop();
    $sticky.css("transform", "translate3d(0, " + topOffset + "px, 0)");
}

// ===========================================================================
// =            ACCORDION BACKGROUND COLORS            =
// ===========================================================================
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
// -----  End of ACCORDION BACKGROUND COLORS  --------------------------------

// ===========================================================================
// =            ACCORDION SCROLL TO TOP            =
// ===========================================================================

$(".accordion-title").click(function() {
    setTimeout(function() {
        $("html,body").animate({
            // scrollTop: $(".is-active").offset().top - 84
        });
    }, 300);
});
$("ul.accordion li a.accordion-title").on("click", function() {
    var n = "";
    IsBlueVisible = $("#navBarInPage").css("display");
    if (IsBlueVisible == "block") {
        n = $.trim($("#navSubBar .sticky").height() + $("#navBarInPage").outerHeight())
    } else {
        if ($(".microsite-sticky-header").length > 0) {
            n = $.trim($("#navSubBar").height() + $("#navBarInPage").height() + $(".sticky").outerHeight())
        } else {
            if ($(".micro-sub-page-header").length > 0) {
                n = $.trim($("#navSubBar").height())
            } else {
                if ($(".bg-white .sticky").length > 0) {
                    n = $.trim($(".bg-white .sticky").height())
                } else {
                    n = $.trim($("#navSubBar .sticky").outerHeight())
                }
            }
        }
    }
    $(this).parent("li").siblings(".accordion-item").find(".accordion-content").hide();
    $("html,body").animate({
        scrollTop: $(this).parent("li").offset().top - n
    }, 1000)
});

// -----  End of ACCORDION SCROLL TO TOP  -------------------------

// ======================================================================
// MAGELLAN AND ACCORDION RESET
// ======================================================================

$(".accordion").on("mutateme.zf.trigger", function() {
    $("#magellan").foundation("calcPoints");
});

// -----  End of MAGELLAN AND ACCORDION RESET  ----------