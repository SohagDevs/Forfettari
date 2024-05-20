
var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('navbarColor');
        nav.classList.remove('navbarpadding')
    } else {
        nav.classList.remove('navbarColor');
        nav.classList.add('navbarpadding');
    }
});

var scroller = document.querySelector('.scroller-top');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 500) {
        scroller.style.display = 'flex';
    } else {
        scroller.style.display = 'none';
    }
});
scroller.addEventListener('click', function () {
    window.scrollTo({
        top: 0
    });
});

// init Isotope
$('.portfolioBox').isotope({
    // options
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
var $grid = $('.portfolioBox').isotope({
    // options
});
// filter items on button click
$('.filter-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({
        filter: filterValue
    });
});



$(document).ready(function () {
    $('.venobox').venobox();
});

var owl = $('.testimonials-loop');
owl.owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        600: {
            items: 3
        }
    }
});
var owl = $('.app-features');
owl.owlCarousel({
    items: 2,
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        1024: {
            items: 3
        },
        768: {
            items: 2
        },
        460: {
            items: 1
        }
    }
});

AOS.init();
