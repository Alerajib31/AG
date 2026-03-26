$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css('scrollBehavior', 'auto');
    });

    $('.navbar .menu li a').click(function () {
        $('html').css('scrollBehavior', 'smooth');
        $('.navbar .menu').removeClass('active');
        $('.menu-btn i').removeClass('active');
    });

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    new Typed('.typing', {
        strings: ['Designer', 'Developer', 'Creator', 'Freelancer', 'Student'],
        typeSpeed: 90,
        backSpeed: 55,
        loop: true
    });

    new Typed('.typing-2', {
        strings: ['Designer', 'Developer', 'Creator', 'Freelancer', 'Student'],
        typeSpeed: 90,
        backSpeed: 55,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            700: {
                items: 2,
                nav: false
            },
            1080: {
                items: 3,
                nav: false
            }
        }
    });
});
