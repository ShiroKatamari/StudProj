$(function(){

    $('.case__content').slick({
        arrows: false,
        dots: true,
        dotsClass: 'case-dots',
    });
    
    $('.menu__btn').on('click', function(){
        $('.menu__list').slideToggle();
    });

});