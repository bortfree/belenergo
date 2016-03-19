$(function() {

	$(".button_scroll").mPageScroll2id();

	$('.slide a').magnificPopup({
		type: 'image',
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	$(".slider_sertif").owlCarousel({
		items: 4,
		loop: true,
		nav: true,
	  navText: ''
	});

		$(".slider_comment").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
	  navText: ''
	});

	$(".item_sale h4").equalHeights();

	$(".company").waypoint(function() {
		$(".item_sect1__img span").spincrement({
			duration: 2000 
		});
		this.destroy();
	}, {
		offset : "40%"
	});

	

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
