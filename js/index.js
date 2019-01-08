$(window).on("load", function () {
    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(750);
    });
})

$(document).ready(( ) => {
    $('#slides').superslides({
        animation: 'slide',
        play: '4000',
        pagination: false
    });
    
    var type = new Typed(".typed", {
        strings: ["Electronic Engineer.", "Web Developer.", "Student."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        //margin:10,
        //nav:true,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    
    const skillsTopOffset = $(".skillsSection").offset().top;
    const statsTopOffset = $(".statsSection").offset().top;
    let countUpFinished = false;
    
    $(window).scroll(function(){
        if (window.pageYOffset > skillsTopOffset - $(window).innerHeight() + 300){
            $(function() {
                $('.chart').easyPieChart({
                    //your options goes here
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: '#26de81',
                    size: '152',
                    onStep: function (from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            });
            
        }
    });

    if (!countUpFinished && window.pageYOffset > statsTopOffset - $(window).innerHeight() + 300){
        $(".counter").each(function () {
            var element = $(this);
            var endVal = parseInt(element.text());
            element.countup(endVal);
            
        })
        ountUpFinished = true;
    }

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    })

    $('#filters a').click(function() {
        $('#filters .current').removeClass("current");
        $(this).addClass("current");
        let selector = $(this).attr("data-filter");
            $(".items").isotope({
                filter: selector,
                animationOptions: {
                    duration: 1500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
    })

    $("#navigation li a").click(function (e) {
        e.preventDefault();
        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow")
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);
    function stickyNavigation() {
        let body = $("body");
        if($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight()+"px");
            body.addClass("fixedNav");
        }    
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }
    }
});
