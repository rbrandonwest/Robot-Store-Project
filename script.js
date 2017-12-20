$(document).ready(() => {
    $('.contact-section').on('mouseenter', (event) => {
        $(event.currentTarget).css({
            backgroundColor: '#DBDBDB'
        });
    }).on('mouseleave', (event) => {
        $(event.currentTarget).css({
            backgroundColor: '#EDEDED'
        });
    });

    $('imgrobo1').mouseover(function() {
        $(this).addClass('hover');
        $(this).mouseout(function () {
            $(this).removeClass('hover');
        });
    });
});