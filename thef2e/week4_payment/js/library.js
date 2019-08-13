function checkboxAutoID() {
    $(".checkbox").each(function(i) {
        $(this).find("input").attr("id", "checkbox_" + i),
            $(this).find("label").attr("for", "checkbox_" + i)
    })
}

function radioAutoID(show_and_hide, customName) {
    function JQ_associated_radio() {
        $(".JQ_associated_radio .radio input[type=radio][data-show]").on("click", function(event) {
            if ($(this).parents(".JQ_associated_radio").length) {
                $(this).parents(".JQ_associated_radio").find(".JQ_radio_hide").hide();
                var getid = $(this).attr("data-show");
                $(getid).show()
            }
        })
    }
    show_and_hide = show_and_hide || !1,
        customName = customName || !1,
        $("[data-bind$='radioGroup'] input").each(function(i) {
            $(this).attr("id", "radio_" + i),
                $(this).next("label").attr("for", "radio_" + i),
                customName || $(this).parent("[data-bind$='radioGroup']").find("input").attr("name", "radio_name_" + i)
        }),
        show_and_hide && JQ_associated_radio()
}