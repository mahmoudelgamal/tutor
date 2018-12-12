$(document).ready(function () {
	//right section scroll
	$(window).on('scroll', function () {
		var sc = $(window).scrollTop();
		var left_section = $("#left_section").innerHeight();
		if (sc > 100) {
			$(".inner-right").css({
				'top': 30
			})
		} else {
			$(".inner-right").css({
				'top': 100
			})
		}
		if (sc > (left_section - 200)) {
			$(".right-section").hide();
		} else {
			$(".right-section").show();
		};
	});
	// favourited tutor
	$(".fa-heart").click(function () {
		$(this).css({
			"color": "#c11e1e"
		});

	});
	$(".fa-heart").dblclick(function () {
		$(this).css({
			"color": "#fff"
		});

	});
});
