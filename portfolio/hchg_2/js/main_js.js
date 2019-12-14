// topMain JS start
$(".nav-item").click(function() {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
    $(".line").removeClass("pos-1 pos-2 pos-3 pos-4 pos-5");
    $(".line").addClass("pos-" + parseInt($(this).index() + 1));
    $(".tab").removeClass("active");
    console.log('#' + $(this).data('tab'));
    $('#' + $(this).data('tab')).addClass("active");
});

// topMain owlCarousel JS start
$('.owlMain').owlCarousel({
    loop: false,
    autoplay: false,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: false
        },
        460: {
            items: 2,
            dots: true,
            nav: false
        },
        768: {
            items: 3,
            dots: false,
            nav: false
        }
    }
});
// topMain owlCarousel JS end
// topMain JS end

// banner time JS start
function ShowTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var hr = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    document.querySelectorAll('.nowDate')[0].innerHTML = year + '/' +
        harold(month) + '/' +
        harold(day);
    document.querySelectorAll('.nowTime')[0].innerHTML = harold(hr) + ':' +
        harold(min) + ':' +
        harold(sec);

    function harold(standIn) {
        if (standIn < 10) {
            standIn = '0' + standIn
        }
        return standIn;
    }
}
setInterval(ShowTime, 1000);
// banner time JS end

// tweenMax JS end
$(function() {
    TweenMax.staggerFrom('.bannerPic', 0.9, {
        opacity: 0,
        delay: 0.3,
        scale: 1.1
    });
    TweenMax.staggerFrom('.soc', 0.5, {
        opacity: 0,
        height: 0,
        marginTop: "200px",
        delay: 0.8,
        scale: 1.1
    });
    $(".bannerTitleMain").show(function() {
        TweenMax.staggerFrom('.bannerMainTitle', 0.9, {
            opacity: 0,
            x: 120,
            ease: Power1.easeOut,
            delay: 0.7
        });
        TweenMax.staggerFrom('.bannerTitleBorder', 0.8, {
            opacity: 0,
            width: 0,
            marginLeft: "300px",
            ease: Power1.easeOut,
            delay: 0.5
        });
        TweenMax.staggerFrom('.bannerSubTitle', 0.8, {
            opacity: 0,
            x: 120,
            ease: Power1.easeOut,
            delay: 0.9
        });
    });

    // init controller
    var controller = new ScrollMagic.Controller();
    $('.govIcon li').each(function() {
        var tween = TweenMax.from($(this), 0.5, {
            scale: 0.7,
            autoAlpha: 0,
            delay: 0.3
        });
        var scene = new ScrollMagic.Scene({
                triggerElement: ".topMain",
            })
            .setTween(tween)
            .addTo(controller);
    });

    $('.videoMain').each(function() {
        var tween = TweenMax.from($(this), 0.8, {
            width: 0,
            marginRight: "300px"
        });
        var scene = new ScrollMagic.Scene({
                triggerElement: ".govLink",
            })
            .setTween(tween)
            .addTo(controller);
    });

    $('.videoInfo').each(function() {
        var tween = TweenMax.from($(this), 0.8, {
            opacity:0,
            x:100,
            delay:0.3
        });
        var scene = new ScrollMagic.Scene({
                triggerElement: ".middle",
            })
            .setTween(tween)
            .addTo(controller);
    });
});