// script.js
$(document).ready(function(){


	// $('.my-section').hide();
	// $('.section-active').show();

	$('.mdl-navigation > .my-nav-home').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#home').addClass('section-active');

		$('.my-nav-active').removeClass('my-nav-active');
		$('.my-nav-home').addClass('my-nav-active');

		$('.my-title-active').removeClass('my-title-active');
		$('.my-title-home').addClass('my-title-active');
	});


	$('.mdl-navigation > .my-nav-slide').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#slide').addClass('section-active');

		$('.my-nav-active').removeClass('my-nav-active');
		$('.my-nav-slide').addClass('my-nav-active');

		$('.my-title-active').removeClass('my-title-active');
		$('.my-title-slide').addClass('my-title-active');
	});


	$('.mdl-navigation > .my-nav-docs').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#docs').addClass('section-active');

		$('.my-nav-active').removeClass('my-nav-active');
		$('.my-nav-docs').addClass('my-nav-active');

		$('.my-title-active').removeClass('my-title-active');
		$('.my-title-docs').addClass('my-title-active');
	});


	$('.mdl-navigation > .my-nav-proj').click(function(){
		$('.section-active').removeClass('section-active');

		$('.my-section#proj').addClass('section-active');

		$('.my-nav-active').removeClass('my-nav-active');
		$('.my-nav-proj').addClass('my-nav-active');

		$('.my-title-active').removeClass('my-title-active');
		$('.my-title-proj').addClass('my-title-active');
	});

	$(document).keydown(function(event){
		if (event.which == 80){
			$('#priv').toggle();
			$('#prive-tab').toggle();
		}
	});
});
