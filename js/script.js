# js

$('document').ready(function(){

	$('.my-section').hide();
	$('.section-active').show();

	$('.mdl-navigation > .my-nav-home').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#section-home').addSection('section-active');

	});


	$('.mdl-navigation > .my-nav-slide').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#section-slide').addSection('section-active');

	});


	$('.mdl-navigation > .my-nav-docs').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#section-docs').addSection('section-active');

	});


	$('.mdl-navigation > .my-nav-proj').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#section-proj').addSection('section-active');

	});
};
