// Accordions
$(document).on('click', '.accordion .ac-header, .accordion .opener', function(e){
	e.preventDefault();
	e.stopPropagation();
	
	
	$(this).closest('.accordion').toggleClass('opened')
			.find('.ac-content').stop().slideToggle(300);
});

$(window).on('load', function () {
	$('.articles-content').slick({
		slidesToShow: 5,
		slidesToScroll: 3,
		arrows: true,
		dots: true,
		centerMode: false,
		slidesPerView:'auto',
		autoplay: false,
		autoplaySpeed: 4000,
        responsive: [   
				{
					breakpoint: 1199,
					settings: {
						slidesToShow:3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow:2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow:1,
						slidesToScroll: 1,
					}
				}
			]
	});
});