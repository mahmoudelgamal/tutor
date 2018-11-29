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
	var theParent = document.querySelector("#card_parent");
	for (var i = 0; i < theParent.children.length; i++) {
		var childElement = theParent.children[i];
		childElement.addEventListener('mouseenter', doSomething, false);
	}

	function doSomething(e) {
		var mosenter = e.target.firstElementChild.id;
		var lastCard = $('.h-card').last();
		if (mosenter == "card2") {
			$(".hover-card").animate({
				"top": "250px"
			}, 'slow').fadeIn()
		} else if (mosenter == "card3") {
			$(".hover-card").animate({
				"top": "500px"
			}, 'slow').fadeIn()
		} else if (mosenter == "card4") {
			$(".hover-card").animate({
				"top": "750px"
			}, 'slow').fadeIn()
		} else if (mosenter == "card1") {
			$(".hover-card").animate({
				"top": "0px"
			}, 'slow').fadeIn()
		}else if (lastCard) {
			$(".hover-card").fadeOut()
		}else if (! lastCard){
			$(".hover-card").fadeIn()
		}
	}

	//schduale
	$("#mySchedule").dayScheduleSelector({
		days: [0, 1, 2, 3, 4, 5, 6],

		// HH:mm format
		startTime: '08:00',

		// HH:mm format       
		endTime: '10:30',

		// minutes                
		interval: 30,

		stringDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	})

});
