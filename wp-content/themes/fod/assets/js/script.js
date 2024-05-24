var app = {

    init: function() {
        // app.menu();
        // app.modal();
        app.sliders();
        // app.compare();
        // app.lazyload();
        // app.preloader();
        // app.formValidation();
        app.phoneMask();
        // app.section_services();
    }, // init END

    menu: function() {

        // $('.menu-toggle').on('click', function(e) {
        //     e.preventDefault();
        //     $('.hamburger').toggleClass('active');
        //     $('body').toggleClass('site-menu-open');
        // });

    }, // menu END

    sliders: function() {

        var $homeIntroSlider = $('#home-intro-slider');
        if (!$homeIntroSlider) {} else {

            var homeIntroCarousel = new Swiper('#home-intro-slider', {
                // Default parameters
                // slidesPerView: 1,
                // slidesPerColumn: 2,
                initialSlide: 0,
                spaceBetween: 0,
                // Responsive breakpoints
                navigation: {
                    nextEl: '#testimonials-carousel-button-next',
                    prevEl: '#testimonials-carousel-button-prev',
                },
                pagination: {
                    el: '#intro-nav',
                    type: 'bullets',
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"><span class="dot"></span></span>';
                    }
                },
                on: {
                    init: function () {
                      /* do something */
                      $('#portfolio-slider .swiper-container').removeClass('swiper-container-multirow-column');
                    },
                }
            });
        }


        var $homeBlogSlider = $('#home-blog-slider');
        if (!$homeBlogSlider) {} else {

            var homeBlogCarousel = new Swiper('#home-blog-slider', {
                // Default parameters
                slidesPerView: 3,
                // slidesPerColumn: 2,
                // initialSlide: 1,
                // centeredSlides: true,
                spaceBetween: 0,
                // Responsive breakpoints
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    // when window width is >= 768px
                    460: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    }
                }
            });
        }

        var $testimonialsSlider = $('#testimonials-carousel');
        if (!$testimonialsSlider) {} else {

            var testimonialsCarousel = new Swiper('#testimonials-carousel .swiper-container', {
                // Default parameters
                // slidesPerView: 1,
                // slidesPerColumn: 2,
                initialSlide: 1,
                centeredSlides: true,
                spaceBetween: 0,
                // Responsive breakpoints
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2
                    },
                    992: {
                        slidesPerView: 2
                    },
                    1280: {
                        slidesPerView: 3
                    },
                    // when window width is >= 1440px
                    1440: {
                        slidesPerView: 3
                        // allowTouchMove: false

                    }
                },
                navigation: {
                    nextEl: '#testimonials-carousel-button-next',
                    prevEl: '#testimonials-carousel-button-prev',
                },
                on: {
                    init: function () {
                      /* do something */
                      $('#portfolio-slider .swiper-container').removeClass('swiper-container-multirow-column');
                    },
                }
            });
        }

        var $certificatesSlider = $('#certificates-slider');
        if (!$certificatesSlider) {} else {

            var certificatesCarousel = new Swiper('#certificates-slider', {
                // Default parameters
                slidesPerView: 1,
                // slidesPerColumn: 2,
                speed: 500,
                spaceBetween: 0,
                navigation: {
                    nextEl: '#certificates-slider-button-next',
                    prevEl: '#certificates-slider-button-prev',
                },
                pagination: {
                    el: '#certificates-slider-pagination',
                    type: 'fraction',
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        ' / ' + '<span class="' + totalClass + '"></span>';
                },
                on: {
                    slideNextTransitionStart: function () {
                      /* do something */
                      certificatesArticleCarousel.slideNext();
                    },
                    slidePrevTransitionStart: function () {
                      /* do something */
                      certificatesArticleCarousel.slidePrev();
                    },
                }
            });

            var certificatesArticleCarousel = new Swiper('#certificates-article-slider', {
                // Default parameters
                speed: 500,
                slidesPerView: 1,
                spaceBetween: 0,
            });

        }

        var $homeGallerySlider = $('#home-gallery-slider');
        if (!$homeGallerySlider) {} else {

            var homeGalleryCarousel = new Swiper('#home-gallery-slider', {
                // Default parameters
                slidesPerView: 1,
                // slidesPerColumn: 2,
                spaceBetween: 0,
                navigation: {
                    nextEl: '#home-gallery-slider-button-next',
                    prevEl: '#home-gallery-slider-button-prev',
                },
                pagination: {
                    el: '#home-gallery-slider-pagination',
                    type: 'fraction',
                },
                renderFraction: function (currentClass, totalClass) {
                    return '<span class="' + currentClass + '"></span>' +
                        ' / ' + '<span class="' + totalClass + '"></span>';
                },
                on: {
                    slideNextTransitionStart: function () {
                      /* do something */
                      homeGalleryArticleCarousel.slideNext();
                    },
                    slidePrevTransitionStart: function () {
                      /* do something */
                      homeGalleryArticleCarousel.slidePrev();
                    },
                }
            });


            var homeGalleryArticleCarousel = new Swiper('#home-gallery-article-slider', {
                // Default parameters
                speed: 500,
                slidesPerView: 1,
                spaceBetween: 0
            });
        }

    }, // sliders END

    phoneMask: function () {
        var inputTypeTel = $('input[type=tel]');
        var inputTypeTelPlaceholder = $('input[type=tel]').attr('placeholder');

        if ( !inputTypeTel ) { } else {
            inputTypeTel.mask("+38 (yxx) xxx-xx-xx", {
            translation: {
                    x: { pattern: /[0-9]/ },
                    y: { pattern: /[0]/ }
                },
                placeholder: "+38 (0__) ___-__-__",
                clearIfNotMatch: true
            });

        }

        

        // inputTypeTel.mouseover(function() {
        //     $(this).attr('placeholder', '+38 (0__) ___-__-__');
        // });

        // inputTypeTel.mouseout(function() {
        //     $(this).attr('placeholder', inputTypeTelPlaceholder);
        // });

    }, // phoneMask END
}

jQuery(document).ready(function($) {
    console.log( 'Документ и все ресурсы загружены' );
    app.init();

    new WOW().init();

    $(".accordion-trigger").QuickAccord();

    var blazy = new Blazy({
        success: function(element){
            console.log("Element loaded: ", element.nodeName);
        }
    });
    var btn = $('#scroll-to-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
});