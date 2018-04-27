// Carousel
(function($){
	$(document).ready(function(){
		$('#stat-carousel-17').lightSlider({
			item: 3,
			slideMove: 3,
			slideMargin: 30,
			pager: false,
			prevHtml: '<span class="glyphicon glyphicon-menu-left"></span><span class="sr-only">previous</span>',
			nextHtml: '<span class="glyphicon glyphicon-menu-right"></span><span class="sr-only">next</span>',
			responsive: [
	            {
	                breakpoint: 768,
	                settings: {
	                    item: 1,
	                    slideMove: 1,
	                  }
	            }
	        ]
		});
	});
})(jQuery);

/*
// Not working with collapsed divs, needs thicc jquery
// Scroll Positions
// StackOverflow https://stackoverflow.com/questions/6677035/jquery-scroll-to-element
$(document).ready(function (){
            $("nav button").click(function (){
            	const dataTargetSelection = $($(this).attr("data-target"))
                $('html, body').animate({
                    scrollTop: dataTargetSelection.offset().top
                }, 500);
            });
        });
*/