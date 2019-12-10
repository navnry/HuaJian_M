
$(document).ready(function () {

    let openMenuBtn = $("#triggerMenuBtn"),
        closeMenuBtn = $("#closeMenuBtn"),
        sideNav = $("#siderNav"),
        searchBtn = $("#searchBtn"),
        searchWrap = $("#searchWrap")

    openMenuBtn.on("click", function () {
        sideNav.addClass("show").removeClass("hidden")
    })
    closeMenuBtn.on("click", function () {
        sideNav.removeClass("show").addClass("hidden")
    })
    searchBtn.on("click", function () {
        let state = searchWrap[0].className.indexOf("show") > -1;
        searchWrap.toggleClass("show", !state).toggleClass("hidden", state)
    })
    searchWrap.on("click", function (e) {
        searchWrap.removeClass("show").addClass("hidden")
    })

    $(".searchWrap-wrap").on("click", function (e) {
        e.stopPropagation()
    })

    $(".siderNav-wrap ul").on('touchstart', function (e) {
        e.stopPropagation()
        $(".siderNav-wrap ul").on('touchend', function (e) {
            e.stopPropagation()
        })
    })

    sideNav.on('touchstart', function (e) {
        var touch = e.originalEvent,
            startX = event.touches[0].pageX;
        startY = event.touches[0].pageY;
        sideNav.on('touchend', function (e) {
            var spanX = event.changedTouches[0].pageX - startX;
            var spanY = event.changedTouches[0].pageY - startY;
            if (Math.abs(spanX) < Math.abs(spanY)) {
                if (spanY > 20) {
                } else if (spanY < -30) {
                    sideNav.removeClass("show").addClass("hidden")
                }
            }
        });
    });

    $("#container").scroll(function () {
        if (this.scrollTop > 300) {
            $("#totop").fadeIn()
        } else {
            $("#totop").fadeOut()
        }
    })

    $("#totop").click(function () {
        $('#container').animate({scrollTop: 0}, 500);
    });



    if ($(".banner .swiper-slide").length > 1) {
        new Swiper(".banner .swiper-container", {
            speed: 600,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            }
        })
    }


    if ($(".diy").length > 0) {
        new Swiper(".diy .swiper-container", {
            speed: 600,
            slidesPerView: 3,
            slidesPerGroup: 3,
            pagination: {
                el: ".diy .swiper-pagination"
            }
        })
    }
})
