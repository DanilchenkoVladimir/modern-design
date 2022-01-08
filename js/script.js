$('.main__slider').slick({
    slidesToShow: 1,
    dots: true,
    arrows: false
});    

$('.reviews__slider').slick({
    dots: true,
    arrows: true
});  


let dotNums = document.querySelectorAll(".slick-dots button");

    function removeText(item) {
        item.innerHTML = "";
        
    }

dotNums.forEach(removeText);