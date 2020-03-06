// Rs Slider In home-agency-3.html & home-corporate-5.html 
jQuery(document).ready(function() {
    "use strict";
    jQuery("#slider1").revolution({
        sliderType: "standard",
        jsFileLocation: "../assets/revolution/js/",
        sliderLayout: "auto",
        delay: 99000,/* sets the Slider's default timeline */
        disableProgressBar: "on",
        minHeight: 500,
        spinner: "spinner0",/* PRELOADER OPTION "0" */ 
        /* basic navigation arrows and bullets */
        navigation: {
            keyboardNavigation: "off",
            keyboard_direction: "horizontal",
            mouseScrollNavigation: "off",
            onHoverStop: "on",
            bullets: {
                style: "hades",
                enable: true,
                hide_onmobile: false,
                hide_onleave: false,
                hide_delay: 200,
                hide_delay_mobile: 1200,
                hide_under: 0,
                hide_over: 9999,
                direction: "horizontal",
                h_align: "center",
                v_align: "bottom",
                space: 10,
                h_offset: 0,
                v_offset: 20,
                tmp: ''
            },
            arrows: {
                style: 'hades',
                tmp: '<div class="tp-arr-allwrapper"><div class="tp-arr-imgholder"></div></div>',
                enable: true,
                hide_onmobile: true,
                hide_onleave: false,
                tmp: '',
                left: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 0,
                    v_offset: 50
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: -50,
                    v_offset: 0
                }
            }
        },
		 responsiveLevels: [1240, 1024, 778, 480],
		gridwidth:[1240, 1024, 778, 320],
        gridheight: [700, 768, 600, 620],

    });
});
 