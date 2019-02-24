$.fn.isInView = function() {
    var elTop       = $(this).offset().top;
    var elBtm       = elTop + $(this).outerHeight();
    var viewportTop = window.pageYOffset || document.documentElement.scrollTop || $(window).scrollTop();
    var viewportBtm = viewportTop + window.innerHeight;

    return elBtm > viewportTop && elTop < viewportBtm;
};