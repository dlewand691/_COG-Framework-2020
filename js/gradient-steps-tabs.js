// ======================================================================
// TABS GRADIENT STEPS
// ======================================================================

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

// -----  End of TABS GRADIENT STEPS  ----------