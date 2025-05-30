AOS.init();

// active class and attribute change for navbar
$('.navbar-nav1 .nav-link').click(function () {
    $('.navbar-nav1 .active').removeClass('active').removeAttr("aria-current");;
    $(this).addClass('active').attr("aria-current", "page");
})

// on click outside navbar, navbar will collapse
$(document).click(function (event) {
    var clickTarget = $(event.target);
    var isNavbar = clickTarget.closest('.navbar').length > 0;

    if (!isNavbar && $('.navbar-collapse').hasClass('show')) {
        $('.navbar-toggler').click();
    }
});

// landing page slider 
$('.servicesSlider').slick({
    fade: true,
    dots: false,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    nextArrow: $('.servicesSection .serviceArrow .next'),
    prevArrow: $('.servicesSection .serviceArrow .prev'),
});

// counter
$(document).ready(function () {
    let countersAnimated = false;

    $(window).scroll(function () {
        // Check if the counters have entered the viewport
        const $counters = $('.counter span');
        const triggerPoint = $counters.first().offset().top - window.innerHeight;

        if (!countersAnimated && $(window).scrollTop() > triggerPoint) {
            $counters.each(function () {
                const $this = $(this);
                const countTo = $this.attr('data-count');

                $({ countNum: 0 }).animate(
                    { countNum: countTo },
                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    }
                );
            });

            countersAnimated = true;
        }
    });
});

//testimonial
$('.testimonialSliders').slick({
    dots: false,
    slidesToShow: 1,
    infinite: false,
    slidesToScroll: 1,
    nextArrow: $('.testimonial .serviceArrow .next'),
    prevArrow: $('.testimonial .serviceArrow .prev'),
});

//our teams (about page)
$('.teams').slick({
    dots: false,
    slidesToShow: 3,
    infinite: false,
    slidesToScroll: 1,
    nextArrow: $('.ourTeam .serviceArrow .next'),
    prevArrow: $('.ourTeam .serviceArrow .prev'),
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

// gallery page collapse button
$('.galleryBtn button').on('click', function () {
    $('.galleryList button').removeClass('activated')
    $(this).addClass('activated');
    const target = $(this).data('target');

    const isShown = $(target).hasClass('show');

    $('.galleryContainer .collapse').collapse('hide');
    if (!isShown) {
        $(target).collapse('show');
    }
});