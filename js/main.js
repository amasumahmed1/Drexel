(function ($) {

    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.main-menu',
        meanScreenWidth: "991"
    });


    // slider-active

    $('.slider-active').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:["BACK","NEXT"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

        // product-active

    $('.product-active').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        navText:["BACK","NEXT"],
        responsive:{
            0:{
                items:2,
                nav:false
            },
            576:{
                items:2
            },
            768:{
                items:2
            },
            992:{
                items:4
            },
            1200:{
                items:4
            }
        }
    });

        // brand-active

    $('.brand-active').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        navText:["BACK","NEXT"],
        responsive:{
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });

    // nice select

    $('select').niceSelect();





})(jQuery);