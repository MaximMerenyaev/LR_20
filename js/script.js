$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$(document).ready(function () {
    $('.box').slick({
        infinite: true,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        dotsClass: 'slick-dots',
        resposive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });
});
