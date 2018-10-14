$(document).ready(function () {
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
	//schduale
	$('#mySchedule').weekly_schedule({

		// Days displayed
		days: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],

		// Hours displyed
		hours: "11:00AM-6:00PM",

		// Font used in the component
		fontFamily: "'Open Sans', sans-serif",

		// Font colot used in the component
		fontColor: "#444",

		// Font weight used in the component
		fontWeight: "400",

		// Font size used in the component
		fontSize: "19px",

		// Background color when hovered
		hoverColor: "#08526D",

		// Background color when selected
		selectionColor: "#08526D",

		// Background color of headers
		headerBackgroundColor: "#fff"

	});

	//right section scroll
	$(window).on("scroll", function () {
		var sc = $(window).scrollTop();
		if (sc > 300) {
			$(".right-section").css({
				"position": "fixed",
				"top": "250px",
				"width": "343px"

			});

		} else if (sc > 1000) {
			$(".right-section").css({
				"position": "static"
			});

		} else {
			$(".right-section").css({
				"position": "static"
			});
		};
	});
})
