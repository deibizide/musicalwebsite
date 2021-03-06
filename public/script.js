////////////////////////
/////// FOOTER /////////
////////////////////////
const footer = $('.footer');
const year = new Date().getFullYear();
footer.append(`&#169; ${year} Created by David Ramis &Aring;hfeldt`);

////////////////////////
// RESPONSIVE NAV-BAR //
////////////////////////
$('.hb-button').on('click', function (e) {
    e.preventDefault();
    var leftPx = parseInt($('.right-nav').css('margin-left'), 10);
    $('.right-nav').animate({ 'margin-left': leftPx < 0 ? 0 : -200 }, 'slow');
    $('.hb-button').animate({ 'margin-left': leftPx < 0 ? 240 : 25 }, 'slow');
    // $(".hb-button > i").toggleClass("hide");
    $('.square-box').toggleClass('hide');
    $('body').toggleClass('no-scrolling');
});

///////////////////
// SMOOTH SCROLL //
///////////////////
$(function () {
    $('.scroll-to-content').click(function () {
        $('html, body').animate({ scrollTop: $('div.albums').offset().top }, 'slow');
        return false;
    });
    $('.portfolio-scroll').click(function () {
        $('html, body').animate({ scrollTop: $('div.image-container').offset().top }, 'slow');
        return false;
    });
});

///////////////////
///// SHOWS //////
///////////////////

$(document).ready(function () {
    var d = new Date();
    var curr_year = d.getFullYear();
    var curr_Month = d.getMonth() + 1;
    var curr_date = d.getDate();
    var todayDate = curr_date + '.' + curr_Month + '.' + curr_year;
    let amountOfGigs = 0;
    let splittedDate;
    const countries = {};

    for (var tour in tours) {
        amountOfGigs += tours[tour].length;
        for (let i = 0; i < tours[tour].length; i++) {
            var dates = tours[tour][i].date;
            var city = tours[tour][i].city;
            var venue = tours[tour][i].venue;
            var country = tours[tour][i].country;

            const year = dates.split('.').pop();

            if (year === '2019') {
                if (!countries[country]) {
                    countries[country] = 1;
                } else {
                    countries[country] += 1;
                }
            }

            splittedDate = dates.split('.').map(parseFloat);

            if (splittedDate[2] < curr_year) {
                $('.past-shows').append(`
              <div class="dates"> ${dates} | ${venue} | ${city} | ${country} </div>
            `);
            } else if (splittedDate < curr_date) {
                $('.past-shows').append(`
              <div class="dates"> ${dates} | ${venue} | ${city} | ${country} </div>
            `);
            } else if (splittedDate[2] <= curr_year && splittedDate[1] < curr_Month) {
                $('.past-shows').append(`
              <div class="dates"> ${dates} | ${venue} | ${city} | ${country} </div>
            `);
            } else if (splittedDate[2] === curr_year && splittedDate[1] === curr_Month && splittedDate[0] < curr_date) {
                $('.past-shows').append(`
              <div class="dates"> ${dates} | ${venue} | ${city} | ${country} </div>
            `);
            } else {
                $('.shows').append(`
              <div class="dates"> ${dates} | ${venue} | ${city} | ${country} </div>
            `);
            }
        }
    }
});
