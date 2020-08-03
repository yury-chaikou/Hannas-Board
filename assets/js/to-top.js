$(document).ready(function () {
    let totop=$('#totop');
    $(window).scroll(function () {
        if ( $(this).scrollTop() > 800 )
            totop.removeClass('d-none');
        else
            totop.addClass('d-none');
    });
    totop.click(function () {
        $("html").animate({ scrollTop: 0 }, 200 );
        return false;
    });
});