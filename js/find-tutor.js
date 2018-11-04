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

	//price
	$("input ,select").click(function () {
		$(".pick-day").hide();
		$(".price-range").hide();
		$(".price").removeClass("boxshadow");
		$(".pick-time").removeClass("boxshadow");
	})

	$(".price").click(function () {
		$(this).toggleClass('boxshadow');
		$(".price-range").toggle();
		$(".pick-day").hide();
		$(".pick-time").removeClass("boxshadow");


	});
	////dynamic input range
	var input = document.getElementsByClassName("custom-range")[0];
	input.addEventListener('change', function () {
		document.getElementById("min-val").innerHTML = this.value
	});
	///select 
	$(".country").chosen();
	//pick day
	$(".pick-time").click(function () {
		$(this).toggleClass('boxshadow');
		$(".pick-day").toggle();
		$(".price-range").hide();
		$(".price").removeClass("boxshadow");

	});
	// hover card
		//schduale
		$("#mySchedule").jqs({
			mode: "edit",
			days:[
				"Sat",
				"Sun",
				"Mon",
				"Tue",
				"Wen",
				"Thu",
				"Fri",
			],
			data: [
				{
					day: 0,
					periods: [
          ["20:00", "00:00"],
          ["00:00", "02:00"]
      ]
    }, {
					day: 1,
					periods: [
          ["00:00", "08:30"],
          ["09:00", "12:00"]
      ]
    }
  ]
		});

	});
