$(document).ready(() => {

    const $hamburger = $('.hamburger');
    const $close = $('.hamburger-close');
    const $menu = $('.hamburger-menu');
    const $nav = $('nav');

    $hamburger.on('click', function() {
        $hamburger.on('click', function() {
            $menu.show();
            $hamburger.hide();
            $close.show();
            $nav.css('background-color', 'black');
        });
    });

    $close.on('click', function() {
        $menu.hide();
        $hamburger.show();
        $close.hide();
        $nav.css('background-color', 'transparent');
    })



});

