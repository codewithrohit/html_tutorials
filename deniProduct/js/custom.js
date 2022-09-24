$(document).ready(function() {
    // get the id of toggle button
    var menuToggleBtn = $('#mobile-menu-toggle');
    var menuCloseBtn = $('.close-btn');

    menuToggleBtn.on('click', function() {
        $('#mobile-nav').css('display', 'block');
    })

    menuCloseBtn.on('click', function() {
        $('#mobile-nav').css('display', 'none');
    })
})