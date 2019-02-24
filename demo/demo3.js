
$(document).ready(function() {
	$('div.block p').each(function(k,el) {
		$(el).data('pos',$(el).position().top);
	});

    // Scrollfy needs to be called at last, after the event listeners added, to be sure it will be visible on load
    $('div.block')

		.on('scrollfy:inView', function(e) {
			if ( !$(this).hasClass('inview') ) {
				$(this).delay(100).addClass('inview');
			}
		})

		.on('scrollfy:offView', function(e) {
			if ( $(this).hasClass('inview') ) {
				$(this).removeClass('inview');
			}
		})

		.scrollfy({
			defaultOffset: 150
		}); // last step after listeners added
});