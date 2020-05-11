// ======================================================================
// GRADIENT STEPS BACKGROUND
// ======================================================================

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

// -----  End of GRADIENT STEPS BACKGROUND  ----------