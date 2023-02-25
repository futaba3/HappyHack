
$(function ($) {
    $(".firstView").bgSwitcher({
        images: ["images/background1.jpg", "images/background2.jpg", "images/background3.jpg", "images/background4.jpg", "images/background5.jpg"],
        interval: 6000,
        loop: true
    });

    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: true
    });

    $('.fadein').css('visibility', 'hidden');
    $(window).scroll(function () {
        var windowHeight = $(window).height(),
            topWindow = $(window).scrollTop();
        $('.fadein').each(function () {
            var objectPosition = $(this).offset().top;
            if (topWindow > objectPosition - windowHeight + 200) {
                $(this).addClass("fadein-anime");
            }
        });
    });
});