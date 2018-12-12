$(document).ready(function () {
	//banner height
	var wh = $(window).height();
	var nav = $(".navbar").innerHeight();
	var w_width = $(window).width()

	$(".banner").height(wh - nav);
	$(".overlay").height(wh);
})
