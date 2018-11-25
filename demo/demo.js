
$(document).ready(function() {
    // Scrollfy needs to be called at last, after the event listeners added, to be sure it will be visible on load
    $('div.block')
		.addClass('down')

		.on('scrollfy:scroll:begin', function(e) {
			$(this).removeClass('up down').addClass(e.scrollfy.direction);
		})

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

		.on('scrollfy:scroll:end', function(e) {
			$(this).removeClass('up down');
		})

		.scrollfy(); // last step after listeners added
	
	$(window).on('scrollfy:scroll', function(e) {
		if ( e.scrollfy.direction == 'up' ) {
			$('body').removeClass('down').addClass('up');
		} else if ( e.scrollfy.direction == 'down' ) {
			$('body').removeClass('up').addClass('down');
		}
	});
});