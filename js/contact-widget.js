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
