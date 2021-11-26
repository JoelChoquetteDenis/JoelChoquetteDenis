$(document).ready($(function () {
    var e = $("#downloadForm"),
        t = e.find('input[type="radio"]'),
        n = e.find('input[type="radio"]#wildcard'),
        o = e.find("input#otra"),
        i = e.find('input[name="radioChecked"]'),
        l = e.find('input[type="submit"]');
    t.on("change", function () {
        i.val(1), 0 == $(this).val()
    }), o.on("change", function () {
        n.val($(this).val())
    }), e.on("submit", function (a) {
        i.val() <= 0 && ($(".messages").html("Please select a donation amount"), a.preventDefault()), "other" == $("input[name=amount]:checked").val() && "" == $("#otra").val() && ($(".messages").html("Please enter a donation amount"), a.preventDefault()), 0 == $("input[name=amount]:checked").val() && (window.location = $(".pod").data("nottoday"), a.preventDefault())
    }), $(".thumb-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (a) {
                return a.el.attr("title")
            }
        }
    }), $("#b2b").change(function () {
        custom = document.getElementById("custom"), a = custom.value.split(","), a.splice(-1, 1, this.checked), custom.value = a.join(",")
    })
}));