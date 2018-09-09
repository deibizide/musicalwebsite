$(".hb-button").on("click", function(e) {
    e.preventDefault();
    var leftPx = parseInt($(".right-nav").css("margin-left"), 10);
    $(".right-nav").animate({ "margin-left": leftPx < 0 ? 0 : -200 }, "slow");
    $(".hb-button").animate({ "margin-left": leftPx < 0 ? 240 : 25 }, "slow");
    $(".hb-button > i").toggleClass("hide");
});
