$(document).ready(function () {
	

	$(".header__burger").click(() => {
		$(".header__menu, .header__burger").toggleClass("active");
		$('body').toggleClass('lock');
		console.log("Click");
	});

	$(".wrapper").slick();

	$(".posts__box").slick({
		breakpoint: 1200,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: "<i class='far fa-arrow-alt-circle-left a-left control-c prev slick-prev'></i>",
		nextArrow: "<i class='far fa-arrow-alt-circle-right a-right control-c next slick-next'></i>",
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},

		],
	});
});
