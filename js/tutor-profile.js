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
	$("#mySchedule").jqs({
		mode: "edit",
		data: [
			{
				day: 0,
				periods: [
          ["20:00", "00:00"],
          ["00:00", "02:00"]
      ]
    }, {
				day: 3,
				periods: [
          ["00:00", "08:30"],
          ["09:00", "12:00"]
      ]
    }
  ]
	});


	//right section scroll
	$(window).on('scroll', function () {
		console.log("kmvon");
		var sc = $(window).scrollTop();
		console.log(sc);
		if (sc > 2133) {
			$(".right-section").fadeOut();
		} else if (sc > 300) {
			$(".right-section").css({
				"position": "fixed",
				"top": "250px",
				"width": "343px"

			});
		} else {
			$(".right-section").fadeIn().css({
				"position": "relative",
				"top": "0px",

			});
		};
	});
})
