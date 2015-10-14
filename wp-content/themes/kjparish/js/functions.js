/* trigger when page is ready */
$(document).ready(function (){

	$('#grid').gridalicious({
		gutter: 0,
		width: 340
	});


	// Contact Form 7

	$('.wpcf7-form').find('p').contents().unwrap();
	$('.wpcf7-form').find('span').contents().unwrap();
	$('input[type="checkbox"]').attr('id', 'signup');

	$('.signup').click(function() {
			if ($('#signup').attr('checkbox')) {
					$('#signup').removeAttr('checkbox');
			} else {
					$('#signup').attr('checkbox', 'checked');
			}
	});


	// Scroll Animations, Desktop + Mobile
	$(function() {
			var isMobile =  $('body').hasClass('is-mobile');
			// var isDesktop =  $('body').hasClass('is-desktop');

			var header = $('.primary-nav');
			var logo = $('.logo');
			var logoAlt = $('.logo-alt');
			var singlelogo = $('.single .logo');


			$(window).scroll(function() {
					var scroll = $(window).scrollTop();
					// Mobile animations
					if ( isMobile ) {
						if (scroll >= 300) {
								header.addClass('scroll');
						} else {
								header.removeClass('scroll');
						}
						if (scroll >= 110) {
								logo.addClass('scroll');
						} else {
								logo.removeClass('scroll');
						}
					} 
					// Desktop animations
					else {
						if (scroll >= 500) {
								header.addClass('scroll');
								logoAlt.addClass('scroll');
						} else {
								header.removeClass('scroll');
								logoAlt.removeClass('scroll');
						}
						if (scroll >= 200) {
								logo.addClass('scroll');
						} else {
								logo.removeClass('scroll');
						}
						if (scroll >= 100) {
								singlelogo.addClass('scroll');
						} else {
								singlelogo.removeClass('scroll');
						}
						
					}
			});
	});

	$(function(){
		if($('body').is('.single')) {
			var projectColor = $('.single header').attr('id');  
			$('.single header').css('transition', '3s');
			$('.single header').css('background', projectColor);
		}
	});

	

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/