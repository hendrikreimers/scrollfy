
$(document).ready(function() {
    $('div.block')
		.addClass('down')
		.scrollfy()
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
		});
	
	$(window).on('scrollfy:scroll', function(e) {
		if ( e.scrollfy.direction == 'up' ) {
			$('body').removeClass('down').addClass('up');
		} else if ( e.scrollfy.direction == 'down' ) {
			$('body').removeClass('up').addClass('down');
		}
	});
});