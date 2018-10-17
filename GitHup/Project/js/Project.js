$(function () {
    //////////////// header slide/////////////////
    let boxslide = $('.box-slide');
    boxslide.on('mouseenter mouseleave', function (index, value) {
        $(this).children('.slide').stop();
        $(this).children('.slide').slideToggle();
    });
    /////////////////////////////////////////////


});