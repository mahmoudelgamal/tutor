$(document).ready(function() {
	var wh = $(window).height();
    var nav = $(".navbar").innerHeight();
	
	$(".banner").height(wh-nav);
	$(".overlay").height(wh)
	

	
})
