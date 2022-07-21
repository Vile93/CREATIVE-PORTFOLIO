$(document).ready(function() {
    $('.hamburger').click(function(event) {
        $('.hamburger').toggleClass('hamburger--active');
        $('.header-wrapper__menu').toggleClass('header-wrapper__menu--active');
    });
    $('.menu__item').click(function(event) {
        $('.hamburger').toggleClass('hamburger--active');
        $('.header-wrapper__menu').toggleClass('header-wrapper__menu--active');
    });
});