$(document).ready(function () {
	//banner height
	var wh = $(window).height();
	var nav = $(".navbar").innerHeight();
	var w_width = $(window).width()
    var banner = $(".banner").height();
	$(".banner").innerHeight(wh);
	$(".overlay").innerHeight(wh);
})
