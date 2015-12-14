/*
*
*/
;(function ($, window, document, undefined) {
	$.fn.scrollDirection = function (callback) {
		var lastScrollTop = $('html,body').scrollTop();
		return this.each(function (i, el) {
			var scrolling = false;
			$(el).on('DOMMouseScroll mousewheel', function (e) {
				//Prevent triggering callback too often
				if(!scrolling) {
					scrolling = true;
					direction = "none";
					if (e.originalEvent.wheelDelta || e.originalEvent.detail > 0){
				    	direction = "down";
					} else {
				    	direction = "up";
					}
					callback(direction);
				}
				setTimeout(function () {
					scrolling = false;
				}, 500);
			});
		});
	}

})(jQuery, window, document);