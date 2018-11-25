
$(document).ready(function() {
	$('div.block p').each(function(k,el) {
		$(el).data('pos',$(el).position().top);
	});
	
    $('div.block')
		.scrollfy()
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
		.on('scrollfy:scroll', function(e) {
			if ( $(this).hasClass('inview') ) {
				var p = $(this).find('p');
				
				var divOffset = $(this).offset().top,
					docOffset = $(document).scrollTop(),
					pRelative = $(p).data('pos');
				
				var pos = pRelative + (docOffset - divOffset);
				
				if ( pos <= pRelative )
					pos = pRelative;
				
				if ( pos >= $(this).innerHeight() - pRelative )
					pos = $(this).innerHeight() - pRelative;
			
				$(p).css('top', + pos + 'px');
			}
		});
});