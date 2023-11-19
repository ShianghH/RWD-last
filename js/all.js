$(document).ready(function () {
    $('.mobile-link').click(function (e) { 
        e.preventDefault();
        $('body').toggleClass('show');
    });
});