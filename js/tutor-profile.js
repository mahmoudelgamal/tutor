$(document).ready(function () {
	//right section scroll
	$(window).on('scroll', function () {
		console.log("-j--");
		var sc = $(window).scrollTop();
		var left_section = $("#left_section").innerHeight();
		console.log(sc);
		if (sc > left_section) {
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
	//schduale
	$("#mySchedule").dayScheduleSelector({
		days: [0, 1, 2, 3, 4, 5, 6],

		// HH:mm format
		startTime: '08:00',

		// HH:mm format       
		endTime: '20:00',

		// minutes                
		interval: 30,

		stringDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	})
});
