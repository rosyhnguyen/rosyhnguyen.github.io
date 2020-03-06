/*global  jQuery */
/* Contents
// ------------------------------------------------>
	1.  LOADING SCREEN
	2.  MODULE Click
	3.  SEARCH CLICK
	4.  SIDE NAV CLICK
	5.  MOBILE NAV 
	6.  BACKGROUND
	7.  COUNTDOWN DATE
	8.  COUNTER UP
	9.  SLIDER RANGE
	10. PORTFOLIO FLITER 
	11. MAGNIFIC POPUP
	12. OWL CAROUSEL
	13. AJAX MAILCHIMP
	14. AJAX CAMPAIGN MONITOR
	15. GOOGLE MAP 
	16. WOW
*/
$(document).ready(function() {
    "use strict";

    /* ------------------  LOADING SCREEN ------------------ */

    $(window).on("load", function() {
        $(".preloader").fadeOut("5000");
        $(".preloader").remove();
    });

    /* ------------------  MODULE Click  ------------------ */

    var $moduleIcon = $(".module-icon"),
        $moduleCancel = $(".module-cancel");
    $moduleIcon.on("click", function(e) {
        $(this).parent().siblings().removeClass('module-active'); // Remove the class .active form any sibiling.
        $(this).parent(".module").toggleClass("module-active"); //Add the class .active to parent .module for this element.
        e.stopPropagation();
    });
    // If Click on [ Search-cancel ] Link
    $moduleCancel.on("click", function(e) {
        $(".module").removeClass("module-active");
        e.stopPropagation();
        e.preventDefault();
    });

    /* ------------------  SEARCH CLICK  ------------------ */

    $(".search-icon").on("click", function() {
        if ($(this).parent().hasClass('module-active')) {
            $(".wrapper").addClass("search-active");
            $(".wrapper").removeClass("hamburger-active");
            $(".module-search-box").addClass("search-box-active");
        }
    });
    $(".search-close").on("click", function() {
        $(".wrapper").removeClass("search-active");
    });

    /* ------------------  SIDE NAV CLICK  ------------------ */

    $(".side-nav-icon").on("click", function() {
        if ($(this).parent().hasClass('module-active')) {
            $(".wrapper").addClass("hamburger-active");
            $(".wrapper").removeClass("search-active");
            $(".hamburger-panel").addClass("hamburger-panel-active");
            $(this).addClass("module-hamburger-close");
        } else {
            $(".wrapper").removeClass("hamburger-active");
            $(".hamburger-panel").removeClass("hamburger-panel-active");
            $(this).removeClass("module-hamburger-close");
        }
    });

    $(document).on('click', function(event) {
        if (!($(event.target).closest("hamburger-panel-active").length)) {
            // Hide .target-div
            $(".wrapper").removeClass("hamburger-active");
            $('.hamburger-panel').removeClass("hamburger-panel-active");
        }
    });

    $(document).on('click', function(event) {
        if (!($(event.target).closest(".module-active").length)) {
            // Hide .target-div
            $('.module').removeClass("module-active");
        }
    });

    /* ------------------  MOBILE NAV ------------------ */

    var $dropToggle = $("[data-toggle=dropdown]"),
        $module = $(".module");
    $dropToggle.on("click", function(event) {
        event.preventDefault();
        event.stopPropagation();
        $(this).parent().siblings().removeClass("show");
        $(this).parent().toggleClass("show");
    });
    $module.on('click', function() {
        $(this).toggleClass("toggle-module");
    });
    $module.find("input.form-control", ".btn", ".cancel", ".search-form .form-control").on('click', function(e) {
        e.stopPropagation();
    });

    /* ------------------  BACKGROUND ------------------ */

    var $bgSection = $(".bg-section");
    var $bgPattern = $(".bg-pattern");
    var $colBg = $(".col-bg");

    $bgSection.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-section");
        $(this).remove();
    });

    $bgPattern.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("bg-pattern");
        $(this).remove();
    });

    $colBg.each(function() {
        var bgSrc = $(this).children("img").attr("src");
        var bgUrl = 'url(' + bgSrc + ')';
        $(this).parent().css("backgroundImage", bgUrl);
        $(this).parent().addClass("col-bg");
        $(this).remove();
    });

    /* ------------------ COUNTDOWN DATE ------------------ */

    var newDate = new Date(2019, 3, 31),
        $countDown = $("#countdown");
    $countDown.countdown({
        until: newDate,
        layout: '<div class="timer"><div class="timer-content"><span>{sn}</span><div>second left</div></div></div><div class="timer"><div class="timer-content"><span> {mn}</span><div>Minutes Left</div></div></div><div class="timer"><div class="timer-content"><span>{hn}</span><div>Hours Left</div></div></div><div class="timer"><div class="timer-content"><span> {dn}</span><div>Days Left</div></div></div>'
    });

    /* ------------------  COUNTER UP ------------------ */

    var counter = $(".count-num");
    counter.counterUp({
        delay: 10,
        time: 1000
    });

    /* ------------------ SLIDER RANGE ------------------ */

    var $sliderRange = $("#slider-range"),
        $sliderAmount = $("#amount");
    $sliderRange.slider({
        range: true,
        min: 0,
        max: 500,
        values: [50, 300],
        slide: function(event, ui) {
            $sliderAmount.val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $sliderAmount.val("$" + $sliderRange.slider("values", 0) + " - $" + $sliderRange.slider("values", 1));

    /* ------------------ PORTFOLIO FLITER ------------------ */

    var $portfolioFilter = $(".portfolio-filter"),
        portfolioLength = $portfolioFilter.length,
        protfolioFinder = $portfolioFilter.find("a"),
        $portfolioAll = $("#portfolio-all");

    // init Isotope For Portfolio
    protfolioFinder.on("click", function(e) {
        e.preventDefault();
        $portfolioFilter.find("a.active-filter").removeClass("active-filter");
        $(this).addClass("active-filter");
    });
    if (portfolioLength > 0) {
        $portfolioAll.imagesLoaded().progress(function() {
            $portfolioAll.isotope({
                filter: "*",
                animationOptions: {
                    duration: 750,
                    itemSelector: ". portfolio-item ",
                    easing: "linear",
                    queue: false,
                }
            });
        });
    }
    protfolioFinder.on("click", function(e) {
        e.preventDefault();
        var $selector = $(this).attr("data-filter");
        $portfolioAll.imagesLoaded().progress(function() {
            $portfolioAll.isotope({
                filter: $selector,
                animationOptions: {
                    duration: 750,
                    itemSelector: ". portfolio-item ",
                    easing: "linear",
                    queue: false,
                }
            });
            return false;
        });
    });

    /* ------------------ MAGNIFIC POPUP ------------------ */

    var $imgPopup = $(".img-popup");
    $imgPopup.magnificPopup({
        type: "image"
    });

    /* ------------------  SCROLL TO ------------------ */

    var aScroll = $('a[data-scroll="scrollTo"]');
    aScroll.on('click', function(event) {
        var target = $($(this).attr('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    /* ------------------ OWL CAROUSEL ------------------ */

    $(".carousel").each(function() {
        var $Carousel = $(this);
        $Carousel.owlCarousel({
            loop: $Carousel.data('loop'),
            autoplay: $Carousel.data("autoplay"),
            margin: $Carousel.data('space'),
            nav: $Carousel.data('nav'),
            dots: $Carousel.data('dots'),
            center: $Carousel.data('center'),
            dotsSpeed: $Carousel.data('speed'),
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: $Carousel.data('slide-rs'),
                },
                1000: {
                    items: $Carousel.data('slide'),
                }
            }
        });
    });

    $('.owl-carousel').owlCarousel({
        thumbs: true
    });

    /* ------------------  AJAX MAILCHIMP ------------------ */

    $('.mailchimp').ajaxChimp({
        url: "http://wplly.us5.list-manage.com/subscribe/post?u=91b69df995c1c90e1de2f6497&id=aa0f2ab5fa", //Replace with your own mailchimp Campaigns URL.
        callback: chimpCallback

    });

    function chimpCallback(resp) {
        if (resp.result === 'success') {
            $('.subscribe-alert').html('<div class="alert alert-success">' + resp.msg + '</div>').fadeIn(1000);
            //$('.subscribe-alert').delay(6000).fadeOut();

        } else if (resp.result === 'error') {
            $('.subscribe-alert').html('<div class="alert alert-danger">' + resp.msg + '</div>').fadeIn(1000);
        }
    }

    /* ------------------  AJAX CAMPAIGN MONITOR  ------------------ */

    $('#campaignmonitor').submit(function(e) {
        e.preventDefault();
        $.getJSON(
            this.action + "?callback=?",
            $(this).serialize(),
            function(data) {
                if (data.Status === 400) {
                    alert("Error: " + data.Message);
                } else { // 200
                    alert("Success: " + data.Message);
            }
        });
    });

    /* ------------------ GOOGLE MAP ------------------ */

    $(".googleMap").each(function() {
        var $gmap = $(this);
        $gmap.gMap({
            address: $gmap.data('map-address'),
            zoom: $gmap.data('map-zoom'),
            maptype: $gmap.data('map-type'),
            markers: [{
                address: $gmap.data('map-address'),
                maptype: $gmap.data('map-type'),
                html: $gmap.data('map-info'),
                icon: {
                    image: $gmap.data('map-maker-icon'),
                    iconsize: [76, 61],
                    iconanchor: [76, 61]
                }
            }]
        });
    });

    /* ------------------ WOW ------------------ */

    new WOW().init();

}(jQuery));