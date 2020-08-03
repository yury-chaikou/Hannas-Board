$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50)
            $('#1').addClass('ring-white-active');
        if ($(this).scrollTop() > 200)
            $('#1').removeClass('ring-white-active');
        if ($(this).scrollTop() < 50)
            $('#1').removeClass('ring-white-active');

        if ($(this).scrollTop() > 600)
            $('#2').addClass('ring-black-active');
        if ($(this).scrollTop() > 950)
            $('#2').removeClass('ring-black-active');
        if ($(this).scrollTop() < 400)
            $('#2').removeClass('ring-black-active');

        if ($(this).scrollTop() > 3400)
            $('#3').addClass('ring-black-active');
        if ($(this).scrollTop() > 4100)
            $('#3').removeClass('ring-black-active');
        if ($(this).scrollTop() < 3250)
            $('#3').removeClass('ring-black-active');

        if ($(this).scrollTop() > 4900)
            $('#4').addClass('ring-white-active');
        if ($(this).scrollTop() > 5200)
            $('#4').removeClass('ring-white-active');
        if ($(this).scrollTop() < 4800)
            $('#4').removeClass('ring-white-active');

        if ($(this).scrollTop() > 5400)
            $('#5').addClass('ring-white-active');
        if ($(this).scrollTop() < 5400)
            $('#5').removeClass('ring-white-active');
    });
});
