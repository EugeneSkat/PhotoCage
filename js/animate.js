var header = $('#header').height();
		scrollPrev = 0;

$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
 
	if ( scrolled > 100 && scrolled > scrollPrev ) {
		header.addClass('out');
        console.log("1");
	} 
    else 
    {
        console.log("1");
		header.removeClass('out');
	}
	scrollPrev = scrolled;
});