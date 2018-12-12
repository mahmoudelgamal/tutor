	//articles home
	var arPosts = $(".article-list").innerHeight();
	$(window).on('scroll', function () {
		var sc = $(window).scrollTop();
		if (sc > 100) {
			$(".free-trial").css({
				'top': 0
			})
		} else {
			$(".free-trial").css({
				'top': 73
			})
		}
		if (sc > (arPosts - 500)) {
			$(".free-trial").fadeOut();
		} else {
			$(".free-trial").fadeIn();
		};
	});
