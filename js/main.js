// When jQuery is ready
$(function() {

	// Get the starting px so we
	var lastpx = $(window).scrollTop();

	// When the window scrolls
	$(window).on('scroll', function(e) {

		var $moveme = null;
		var px = $(this).scrollTop(); //px scrolled

		// Check each of the sections
		$('.infinite').children().each(function() {

			var $section = $(this);

			// Get the height of this element
			var h = $section.height();

			// Will help to tell us how far an element is from the top
			var offset = $section.offset();

			if (px > lastpx){
				// I'm scrolling up (heading down the page)
				// Check if something is off the top
				if ((px) > (offset.top + h)) {
					$moveme = $section;
				}

				/* ======== ISSUE TO BE RESOLVE ========
				If you fast scroll down, more than one element gets
				above the scroll and then eventually we run out of 
				elements to move down below. Resolve this by reworking
				the code to dynamically move elements (rather than forcing
				just one at a time). Also potential to store elements
				in an array and not rely on the DOM */
			}
			else {
				// I'm scrolling down (heading up the page)
				// Check if I'm at the top, I need a new element, grab from the bottom
				if (px <= 0 && $section.is(':last-child')) {
					$frombottom = $section;
					var bh = $frombottom.detach().prependTo('.infinite').height();
					$(window).scrollTop(px + bh);
				}
			}

			// update the scroll count so I know which direction I'm heading
			lastpx = px;
		});

		// If I need to move an element down below:
		// pull it out, append it and then rejig the scrollbar
		if ($moveme != null) {
			var ch = $moveme
				.detach()
				.appendTo('.infinite')
				.height();

			$(this).scrollTop(px - ch);
		}

	});

});