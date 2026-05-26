$(function () {
    $('.command__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: false,
        prevArrow: $('.command-prev'),
        nextArrow: $('.command-next'),
        responsive: [
            {
                breakpoint: 391,
                settings: {
                arrows: false,
                centerMode: true,
                centerPadding: "15px",
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        ]
    });


    $('.review__content').slick({
        arrows: false,
        dots: true,
        dotsClass: 'review-dots',
    });
});