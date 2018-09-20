////////////////////////
// RESPONSIVE NAV-BAR //
////////////////////////
$(".hb-button").on("click", function(e) {
    e.preventDefault();
    var leftPx = parseInt($(".right-nav").css("margin-left"), 10);
    $(".right-nav").animate({ "margin-left": leftPx < 0 ? 0 : -200 }, "slow");
    $(".hb-button").animate({ "margin-left": leftPx < 0 ? 240 : 25 }, "slow");
    $(".hb-button > i").toggleClass("hide");
    $(".square-box").toggleClass("hide");
});

///////////////////
// SMOOTH SCROLL //
///////////////////
$(function() {
    $(".scroll-to-content").click(function() {
        $("html, body").animate(
            { scrollTop: $("div.albums").offset().top },
            "slow"
        );
        return false;
    });
    $(".portfolio-scroll").click(function() {
        $("html, body").animate(
            { scrollTop: $("div.image-container").offset().top },
            "slow"
        );
        return false;
    });
});

///////////////////
///// SHOWS //////
///////////////////

$(document).ready(function() {
    let tourI = tours["phanerozoicEuropeanTourI"];

    for (let i = 0, gigs = tourI.length; i < gigs; i++) {
        var dates = tourI[i].date;
        var city = tourI[i].city;
        var venue = tourI[i].venue;
        var country = tourI[i].country;

        $("div.shows").append(`
        <div class="dates"> - ${dates} &#160;&#160; ${city}&#160;&#160; ${venue} &#160;&#160;${country}.</div>
        `);
    }
});
