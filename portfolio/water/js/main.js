// menu fix JS start
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('.navbar-nav').addClass('fixed_header');
    } else {
        $('.navbar-nav').removeClass('fixed_header');
    }
});
// menu fix JS end

// owlCarousel js
// banner owlCarousel start
$('#banner_img').owlCarousel({
    loop: true,
    nav: true,
    dots: true,
    items: 1,
    autoplay: true,
    margin: 0,
    autoplayTimeout: 5500,
    navText: ["<", ">"]
})
// banner owlCarousel start

// news JS start
$('.news_main .content_title').matchHeight();
// news JS end

// video owlCarousel start
$('#video_carousel').owlCarousel({
    loop: true,
    // nav: true,
    items: 1,
    autoplay: true,
    margin: 0,
    autoplayTimeout: 5500,
    navText: ["<", ">"],
    responsive: {
        0: {
            nav: false,
            dots: true
        },
        320: {
            nav: false,
            dots: true
        },
        480: {
            nav: false,
            dots: true
        },
        850: {
            nav: false,
            dots: true
        },
        1400: {
            nav: true,
            dots: false
        },
    }
})
// video owlCarousel end

// theme owlCarousel start
$('#theme_carousel').owlCarousel({
    loop: true,
    // dots: true,
    // autoplay: true,
    autoplayHoverPause: true,
    navText: ["<", ">"],
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        320: {
            items: 2,
            dots: true,
            nav: false
        },
        480: {
            items: 3,
            dots: true,
            nav: true
        },
        850: {
            items: 4,
            nav: true,
            margin: 15,
            dots: false
        },
        1200: {
            items: 4,
            nav: false,
            margin: 30
        },
        1400: {
            items: 4,
            nav: true,
            margin: 30
        },
    }
});
// theme owlCarousel end

// relativeLink owlCarousel start
$('#owl_relative').owlCarousel({
    loop: true,
    dots: true,
    autoplay: true,
    // autoplayHoverPause: true,
    navText: ["<", ">"],
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        320: {
            items: 2,
            nav: false
        },
        480: {
            items: 3,
            nav: false
        },
        850: {
            items: 4,
            nav: true,
            margin: 15
        },
        992: {
            items: 4,
            nav: false,
            margin: 30
        },
        1170: {
            items: 4,
            nav: true,
            margin: 30
        },
        1200: {
            items: 4,
            nav: false,
            margin: 50
        },
        1400: {
            items: 4,
            nav: true,
            margin: 100
        },
    }
});
// relativeLink owlCarousel end
// owlCarousel js

// footerNav JS start
$(function () {
    $('.footer_click').click(function () {
        $(this).toggleClass("Footer-Open");
        $(".FatFooter-Data").slideToggle();
        $(".footer_link").toggleClass("footer_nav_none");
        $(".footer_click").toggleClass("footer_click_up");
    });
});
// footerNav JS end

// tweenMax JS start
$(function () {
    // init controller
    var controller = new ScrollMagic.Controller();

    $('.news_main').show(function () {
        var tl = new TimelineLite();
        var tween = tl.staggerFrom([".block_img:eq(0)", ".block_img:eq(1)", ".block_img:eq(2)"], 0.3, {
            autoAlpha: 0,
            scaleX: 0.7,
            x: -50
        }, 0.2);
        var scene = new ScrollMagic.Scene({
                triggerElement: ".recommend_link",
            })
            .setTween(tween)
            .addTo(controller);
    });

    $('.purpose_link').show(function () {
        var tl = new TimelineLite();
        var tween = tl.staggerFrom([".purpose_icon:eq(0)", ".purpose_icon:eq(1)", ".purpose_icon:eq(2)", ".purpose_icon:eq(3)", ".purpose_icon:eq(4)", ".purpose_icon:eq(5)"], 0.5, {
            autoAlpha: 0,
            scale: "-=0.5"
        }, 0.1);
        var scene = new ScrollMagic.Scene({
                triggerElement: ".purpose_link",
            })
            .setTween(tween)
            .addTo(controller);
    });

    $('.video_iframe iframe').show(function () {
        var tween = TweenMax.from($(this), 0.5, {
            autoAlpha: 0,
            delay: 0.2,
        });
        var scene = new ScrollMagic.Scene({
                triggerElement: ".video",
            })
            .setTween(tween)
            .addTo(controller);
    });
});
// tweenMax JS end