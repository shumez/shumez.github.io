# js

$(document).ready(function(){

	$('.my-section').hide();
	$('.section-active').show();

	$('.mdl-navigation > .my-nav-home').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#section-home').addClass('section-active');

		$('.my-nav-active').removeClass('my-nav-active');
		$('.my-nav-home').addClass('my-nav-active');

	});


	$('.mdl-navigation > .my-nav-slide').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#section-slide').addClass('section-active');

		$('.my-nav-active').removeClass('my-nav-active');
		$('.my-nav-slide').addClass('my-nav-active');
	});


	$('.mdl-navigation > .my-nav-docs').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#section-docs').addClass('section-active');

		$('.my-nav-active').removeClass('my-nav-active');
		$('.my-nav-docs').addClass('my-nav-active');
	});


	$('.mdl-navigation > .my-nav-proj').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#section-proj').addClass('section-active');

		$('.my-nav-active').removeClass('my-nav-active');
		$('.my-nav-proj').addClass('my-nav-active');
	});
};
