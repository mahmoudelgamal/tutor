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
	$(".input ,.select").click(function () {
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
	var card_parent = $("#card_parent").innerHeight();
	if (card_parent < 550) {
		$(".h-card").attr("id", "x")
	}

	var theParent = document.querySelector("#card_parent");
	for (var i = 0; i < theParent.children.length; i++) {
		var childElement = theParent.children[i];
		childElement.addEventListener('mouseenter', cardHover, false);
	}

	function cardHover(e) {
		var mosenter = e.target.firstElementChild.id;
		var res = mosenter.replace("card", "");
		var content = $("#content-"+res).html();
		$(".hover-card").html(content);
		console.log();
		var lastCard = $('.h-card').last();
		var n = (res - 1) * 250;
		$(".hover-card").animate({
			"top": n + "px"
		}, 'slow').fadeIn()
		if (lastCard.attr("id") == mosenter ) {
			$(".hover-card").fadeOut();
		} 
	};



});
