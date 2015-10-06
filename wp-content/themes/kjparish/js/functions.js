/* trigger when page is ready */
$(document).ready(function (){



$("#grid").gridalicious({
  gutter: 0,
  width: 340
});







	// Colorbox for Inline Video with automatic stop on close
	$(".colorbox-link").colorbox({
		inline:true,
		onClosed:function(){ 
		$('video').each(function(){this.player.pause()})
		}
	});

	// Open External Links in New Window
	$('a').each(function() {
	var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
		$(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       	});
	   }
	});

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/