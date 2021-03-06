"use strict";

const hostname = window.location.origin;

/*
** Functions only called by site
** (put them in its place where possible)
*/
/* eslint-disable no-unused-vars */
function fadeOutRight() {
	$("main").removeClass("fade-in-left").addClass("fade-out-right");
}

function fadeOutLeft() {
	$("main").removeClass("fade-in-left").addClass("fade-out-left");
}

function fadeOut() {
	$("main").removeClass("fade-in").addClass("fade-out");
}

function scrollUp() {
	$("html, body").animate({ scrollTop: 0 }, 150);
}

/* Hamburger toggle */
var clickedBurger = false;
$(".burger-button").click(function() {
	if (clickedBurger) {
		// closed
		clickedBurger = false;
		$("html").removeClass("no-scroll-mobile-only");
		$(".header").removeClass("slide-down").delay(300).addClass("slide-up");
	} else {
		// open
		clickedBurger = true;
		$("html").addClass("no-scroll-mobile-only");
		$(".header").removeClass("slide-up").addClass("slide-down");
	}
});
/* eslint-enable no-unused-vars */

/*
** Let the document know when the mouse is being used
** https://codepen.io/anon/pen/XYoJQv
*/
document.body.addEventListener("mousedown", function() {
	$("body").addClass("jerry-mouse");
});

document.body.addEventListener("keydown", function() {
	$("body").removeClass("jerry-mouse");
});

/*
** Icons
*/
const locationOfSVG = hostname + "/assets/symbol-defs.svg";

$.fn.changeSVGicon = function(icon) {
	/*
	** this function changes the icon sprite thing
	** usage: $(".wrapper svg use").changeSVGicon("icon-name");
	*/
	this.attr("xlink:href", locationOfSVG + "#" + icon);
	this.attr("href", locationOfSVG + "#" + icon);

	return this;
};

function addSVGicon(icon) {
	/*
	** this function adds the icon sprite thing
	** usage: $(".wrapper").prepend(addSVGicon("icon-name"));
	*/
	return ("<svg class='icon' aria-hidden='true' width='1em'" + "data-iconame='" +
	icon + "' height='1em'> <use href=" + locationOfSVG + "#" + icon + "></use> </svg>");
}

/*
** Theme Application
*/
function darkSideOfTheMoon(enable, persist) {
	/*
	** turns on or off dark theme.
	**  params:
	**      enable (bool): turn dark mode on or off
	**      persist (bool): also write setting to local storage
	*/
	if (enable) {
		if (localStorage.getItem("theme") == "contrast") {
			console.error("dark theme not applied, contrast is on");
		} else {
			$("html").addClass("transition").addClass("dark"); // Apply theme

			setTimeout(function(){ $("html").removeClass("transition") }, 300); 

			// Change icon in caption menu
			$(".js-darkmode svg use").changeSVGicon("icon-moon-fill");

			// change vox-only text
			$(".js-darkmode .vox-only").text("Turn off dark theme");

			// set local storage unless explicitly told not to
			if (persist != false) { localStorage.setItem("theme", "dark"); }
		}
	} else {
		$("html").removeClass("dark"); // Apply theme

		if (localStorage.getItem("theme") == "contrast") {
			console.warn("[dark] skipping transition class on disabling dark theme, contrast is on")
		} else {
			$("html").addClass("transition");
			setTimeout(function(){ $("html").removeClass("transition") }, 300); 
		}
	
		// Change icon in caption menu
		$(".js-darkmode svg use").changeSVGicon("icon-moon-stroke");

		// change vox-only text
		$(".js-darkmode .vox-only").text("Turn on dark theme");

		// set local storage unless explicitly told not to
		if (persist != false) { localStorage.setItem("theme", "light"); }
	}
}

function fontSize(size) {
	/*
	** sets font size
	**  params:
	**      size (str, "large" or "medium"): sets size
	*/
	if (size == "large") {
		// Apply and save setting to local storage
		$(":root").css("--font-0", "1.2rem");
		localStorage.setItem("textSize", "large");

		// Change icon in caption menu
		$(".js-text-adjust svg use").changeSVGicon("icon-lowercase-a");

		// change vox-only text
		$(".js-text-adjust .vox-only").text("Make the text smaller");
	} else if (size == "medium") {
		// Apply and save setting to local storage
		$(":root").css("--font-0", "");
		localStorage.setItem("textSize", "medium");

		// Change icon in caption menu
		$(".js-text-adjust svg use").changeSVGicon("icon-uppercase-a");

		// change vox-only text
		$(".js-text-adjust .vox-only").text("Make the text bigger");
	} else {
		return "invalid params! we only accept 'large' and 'medium' in this franchise";
	}
}

function applySystemColorScheme() {
	/*
	** finds prefers-color-scheme media query
	** and calls different params in darkSideOfTheMoon based on that
	*/
	// apply dark theme if user has elected to use it system-wide
	if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
		console.info("user has elected to use dark theme in system settings");
		darkSideOfTheMoon(true, false);
	}

	// apply light theme if user has elected to use it system-wide
	// (this isn't really required but)
	if (window.matchMedia("(prefers-color-scheme: light)").matches) {
		console.info("user has elected to use light theme in system settings");
		darkSideOfTheMoon(false, false);
	}
}

// call system color scheme when prefers-color-scheme is changed
window.matchMedia("(prefers-color-scheme: dark)").addListener(applySystemColorScheme);

/* Apply styles from local storage */
// text size
if (localStorage.getItem("textSize") == "large") {
	fontSize("large");
} else {
	fontSize("medium");
}

// contrast
if (localStorage.getItem("theme") == "contrast") {
	$("html").addClass("contrast no-custom-scrollbar no-custom-input");
	$(".js-contrast .vox-only").text("Turn off contrast theme");
} else {
	$("html").removeClass("contrast no-custom-scrollbar no-custom-input");
	$(".js-contrast .vox-only").text("Turn on contrast theme");
}

// dark theme
if (localStorage.getItem("theme") == "dark") {
	darkSideOfTheMoon(true);
} else {
	darkSideOfTheMoon(false, false);
}

// apply dark theme if user has it on system-wide or has a dark theme extension
if (localStorage.getItem("theme") == null) {
	// apply dark theme if user has elected to use it system-wide
	applySystemColorScheme();

	// apply dark theme if user has Dark Reader or Night Eye, but don’t add setting to local storage
	if ($("style").is(".darkreader") || $("style").is("#nighteyedefaultcss") || $("style").is("#darkmode")) {
		if (localStorage.getItem("theme") == "contrast") {
			console.error("dark theme not applied, contrast is on");
		} else {
			darkSideOfTheMoon(true, false);
		}
		console.info("dark theme extension detected!");
	}
}

/*
** Caption Bar
*/
/* Make accessbility controls exist if localStorage API supported */
if (typeof (Storage) !== "undefined") {
	$(".caption-menu").css("display", "block");
}

/* Font size toggle */
$(".js-text-adjust").click(function() {
	if (localStorage.getItem("textSize") == "large") {
		// off
		fontSize("medium");
	} else {
		// on
		fontSize("large");
	}
});

/* Contrast toggle */
$(".js-contrast").click(function() {
	if (localStorage.getItem("theme") == "contrast") {
		// off
		$("html").removeClass("contrast no-custom-scrollbar no-custom-input");
		localStorage.setItem("theme", "light");
		$(".js-contrast .vox-only").text("Turn on contrast theme");

	} else if (localStorage.getItem("theme") == "dark") {
		console.error("contrast theme not enabled, turn off dark");
	} else {
		// on
		$("html").addClass("contrast no-custom-scrollbar no-custom-input");
		localStorage.setItem("theme", "contrast");
		$(".js-contrast .vox-only").text("Turn off contrast theme");
	}
});

/* Dark toggle */
$(".js-darkmode").click(function() {
	if (localStorage.getItem("theme") == "dark") {
		// off
		darkSideOfTheMoon(false);
	} else if (localStorage.getItem("theme") == "contrast") {
		console.error("dark theme not enabled, turn off contrast");
	} else {
		// on
		darkSideOfTheMoon(true);
	}
});

/* delay links - this is probably a bad idea */
// https://stackoverflow.com/a/8775560
$("a.delaylink[href]").click(function() {
	var self = $(this);
	setTimeout(function() {
		window.location.href = self.attr("href"); // go to href after the slide animation completes
	}, 400);
	return false; // And also make sure you return false from your click handler.
});

/* function to add a self link for stuff with an id */
$.fn.addSelfLink = function() {
	return this.each(function() {
		$(this).append(" " +
			"<a class='self-link instapaper_hide instapaper_ignore' href='#" + $(this).attr("id") +
			"' aria-hidden='true' tabindex='-1' title='Permalink to this section'>#</a>"
		);
	});
};

// Apply self link to h2 and h2 w. js-self-link class
$(".js-self-link h2, .js-self-link h3").addSelfLink();

// add a new tab icon thingy to links that have target="_blank"
$("[target='_blank']").each(function() {
	$(this).append("&nbsp;" + addSVGicon("icon-newtab"))
});

/*
** Marketplace
*/
// Search modules - https://www.w3schools.com/jquery/jquery_filters.asp
$("#search").on("keyup", function() {
	var value = $(this).val().toLowerCase();
	$($(this).data("filter")).filter(function() {
		$(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
	});
});

/*
** kounami code accent colour rainbow thing
** https://stackoverflow.com/a/45576888
*/
function onKonamiCode(cb) {
	var input = "";
	var key = "38384040373937396665";
	document.addEventListener("keydown", function(e) {
		input += ("" + e.keyCode);
		if (input === key) {
			return cb();
		}
		if (!key.indexOf(input)) return;
		input = ("" + e.keyCode);
	});
}

/*
** Docs
*/
// Cache selectors
var lastId,
	topMenu = $(".toc ul"),
	topMenuHeight = topMenu.outerHeight()+1,
	// All list items
	menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
	scrollItems = menuItems.map(function(){
		var item = $($(this).attr("href"));
		if (item.length) { return item; }   
	});

// Bind to scroll
$(window).scroll(function(){
	// Get container scroll position
	var fromTop = $(this).scrollTop()+topMenuHeight;

	// Get id of current scroll item
	var cur = scrollItems.map(function(){
		if ($(this).offset().top < fromTop)
			return this;
	});
	// Get the id of the current element
	cur = cur[cur.length-1];
	var id = cur && cur.length ? cur[0].id : "";

	if (lastId !== id) {
			lastId = id;
			// Set/remove active class
			menuItems
				.parent().removeClass("current")
				.end().filter("[href='#"+id+"']").parent().addClass("current");
	}
});

/*
** rgb color cycle
** adapted from https://codepen.io/SJF/pen/wBdpXV
*/
var r = 255, // pretty sure these have to be global
	g = 0,
	b = 0;

function rainbowz() {
	/*
	** does one iteration of rgb color cycle thing
	** and sets --a-r, --a-g, and --a-b css variables in the process
	*/
	// increment or decrement rgb values
	if (r > 0 && b == 0) {
		r -= 5;
		g += 5;
	}

	if (g > 0 && r == 0) {
		g -= 5;
		b += 5;
	}

	if (b > 0 && g == 0) {
		r += 5;
		b -= 5;
	}

	// overide accent colour variable
	$(":root").css("--a-r", r + "");
	$(":root").css("--a-g", g + "");
	$(":root").css("--a-b", b + "");
}

/* Put both together */
onKonamiCode(function() {
	$("body").addClass("someone");
	setInterval(rainbowz, 100);
});
