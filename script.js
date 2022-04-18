
const breakpoint = window.matchMedia( '(min-width:769px)' );
let mySwiper;
const breakpointChecker = function() {
    if ( breakpoint.matches ) {
        if ( mySwiper !== undefined ) mySwiper.destroy( true, true );
        } else if ( !breakpoint.matches ) {
        return enableSwiper();
    }
};


const enableSwiper = function() {
    mySwiper = new Swiper ('.swiper', {
        loop: false,
        slidesPerView: 'auto',
        centeredSlides: true,
        a11y: true,
        keyboardControl: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        spaceBetween: 16,
    });
};
// keep an eye on viewport size changes
breakpoint.addEventListener('change', breakpointChecker);
// kickstart
breakpointChecker();

let button = document.querySelector('.button');
let slidesMD = document.querySelectorAll('.swiper-slide-md');
let slidesLG = document.querySelectorAll('.swiper-slide-lg');
let icon = document.querySelector('.button_icon');

button.addEventListener('click', function (evt) {
    evt.preventDefault();
    button.classList.toggle('button_hide');
    button.classList.toggle('button_show');
    icon.classList.toggle('button_icon_hide');
    icon.classList.toggle('button_icon')
    for(let i = 0; i < slidesMD.length; i++) {
        let slideMD = slidesMD[i];
        slideMD.classList.toggle('swiper-slide-md')
    }
    for(let i = 0; i < slidesLG.length; i++) {
        let slideLG = slidesLG[i];
        slideLG.classList.toggle('swiper-slide-lg')
    }
});
