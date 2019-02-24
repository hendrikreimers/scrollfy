$(window).on('scroll load', function (e) {

    $('div.block').each(function(key,el) {
        if ( $(this).isInView() ) {
            $(this).addClass('inview');
        }
    });

});