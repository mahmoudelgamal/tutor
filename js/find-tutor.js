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
	$(".price").click(function () {
		$(this).toggleClass('boxshadow');
		$(".price-range").toggle();

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

	});
	// hover card
		//schduale
	$('#mySchedule').weekly_schedule({

		// Days displayed
		days: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],

		// Hours displyed
		hours: "11:00AM-2:00PM",

		// Font used in the component
		fontFamily: "'Open Sans', sans-serif",

		// Font colot used in the component
		fontColor: "#fff",

		// Font weight used in the component
		fontWeight: "400",

		// Font size used in the component
		fontSize: "15px",

		// Background color when hovered
		hoverColor: "#08526D",

		// Background color when selected
		selectionColor: "#08526D",

		// Background color of headers
		headerBackgroundColor: "#125973"

	});




});
