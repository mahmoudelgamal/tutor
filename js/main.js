$(document).ready(function () {
	//banner height
	var wh = $(window).height();
	var nav = $(".navbar").innerHeight();
	var w_width = $(window).width()

	$(".banner").height(wh - nav);
	$(".overlay").height(wh);
	
    //blog dynamic hide
	//article
    var arPosts =  $(".article-body").innerHeight();
	$(window).on('scroll', function() {
			var sc = $(window).scrollTop();
			console.log(sc);
			if (sc > (arPosts-200)) {
				$(".free-trial").fadeOut();
			} else {
				$(".free-trial").fadeIn();
			} ;
		});
	//home
    var arPosts =  $(".article-list").innerHeight();
	$(window).on('scroll', function() {
			var sc = $(window).scrollTop();
			if (sc > (arPosts-200)) {
				$(".free-trial").fadeOut();
			} else {
				$(".free-trial").fadeIn();
			} ;
		});
})
