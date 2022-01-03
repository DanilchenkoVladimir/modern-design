let offset = 0; // смещение от левого края
const sliderWrap = document.querySelector('.slider__wrap');

document.querySelector('.slider__next').addEventListener('click', function(){
    offset = offset + 653;
    if (offset > 1306) {
        offset = 0;
    }
    sliderWrap.style.left = -offset + 'px';
});