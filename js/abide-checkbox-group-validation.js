// ======================================================================
//          ABIDE CHECKBOX GROUP VALIDATION
// ======================================================================

Foundation.Abide.defaults.validators.checkbox_limit = function($el, notrequired, parent) {
    var group = parent.closest(".checkbox-group");
    var min = group.attr("data-abide-validator-min");
    var checked = group.find(":checked").length;
    if (checked >= min) {
        // clear label highlight
        group.find("label").each(function() {
            $(this).removeClass("is-invalid-label");
        });
        // clear checkbox error
        group.find(":checkbox").each(function() {
            $(this).removeClass("is-invalid-input").removeAttr("data-invalid");
        });
        group.find("small.form-error").hide();
        return true;
    } else {
        group.find("small.form-error").css({
            display: "block"
        });
        return false;
    }
};

// -----  End of ABIDE CHECKBOX GROUP VALIDATION  ----------