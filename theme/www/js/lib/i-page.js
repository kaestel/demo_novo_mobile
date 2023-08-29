
var ua = navigator.userAgent;
//ua = "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0; DELL; Venue Pro)";
//ua = "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0; SAMSUNG; OMNIA7)";
//ua = "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; HTC_Touch2_T3333; Windows Phone 6.5)";

if(ua.match(/MSIE 9.0; Windows/g)) {
//if(ua.match(/MSIE 9.0; Windows Phone OS [789]{1}.[0-9]{1}/g)) {

	document.write('<script type="text/javascript" src="js/seg_desktop_ie.js"></script>');

	// document.write('<script type="text/javascript" src="/js/jes/src/u-animation-desktop_ie.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-dom-desktop_light.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-events-desktop_ie.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-position-desktop_ie.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-string-desktop_ie.js"></script>');

	u.e.addEvent(window, "load", u.init);
}
else if(ua.match(/MSIE [6-8]{1}.0;[^$]+Windows/g)) {
//else if(ua.match(/MSIE [6-8]{1}.0;[^$]+Windows Phone[^\d]+[67]{1}.[0-9]{1}/g)) {

	document.write('<script type="text/javascript" src="js/seg_desktop_light.js"></script>');

	// document.write('<script type="text/javascript" src="/js/jes/src/u-animation-desktop_light.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-dom-desktop_light.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-array-desktop_light.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-events-desktop_ie.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-position-desktop_ie.js"></script>');
	// document.write('<script type="text/javascript" src="/js/jes/src/u-string-desktop_ie.js"></script>');

	window.attachEvent("onload", u.init);
}
else {
	u.e.addEvent(window, "load", u.init);
}


Util.Objects["page"] = new function() {
	this.init = function(page) {

		// scroll out of view
		window.scrollTo(0, 0);

		// reference main elements
		page.hN = u.qs("#header", page);
		page.hN.page = page;

		page.cN = u.qs("#content", page);
		page.cN.page = page;

		page.nN = u.qs("#navigation", page);
		page.nN.page = page;

		// handle navigation
		// inject before content
		page.insertBefore(page.nN, page.cN);

		page.bn_navigation = u.qs(".navigation", page.hN);
		page.bn_navigation.page = page;

		// get navigation full height (needs to be shown to have an offsetHeight)
		u.a.setOpacity(page.nN, 0);
		u.as(page.nN, "position", "absolute");
		u.as(page.nN, "width", "100%");
		u.as(page.nN, "display", "block");
		page.nN.full_height = page.nN.offsetHeight;

		// hide again after meassurement
		u.as(page.nN, "position", "static");
		u.as(page.nN, "width", "auto");
		u.a.setHeight(page.nN, 0);

		// navigation is collapsed - set opacity = 1
		u.a.setOpacity(page.nN, 1);

		// set navigation button action
		u.link(page.bn_navigation);
		page.bn_navigation.clicked = function(event) {

			// reset transition data on transitioned event
			this.page.nN.transitioned = function() {
				this.transitioned = null;
				u.a.transition(this, "none");
			}

			// already open - then close
			if(u.hc(this.page.nN, "open")) {
				// set close transition
				u.a.transition(this.page.nN, "all 300ms ease-in-out");
				u.a.setHeight(this.page.nN, 0);
				u.rc(this.page.nN, "open");
			}
			// not open - then open
			else {
				// set open transition
				u.a.transition(this.page.nN, "all 500ms ease-in-out");
				u.a.setHeight(this.page.nN, this.page.nN.full_height);
				u.ac(this.page.nN, "open");
			}
		}
		
		// Add "ontouchstart" events to all button links if
		// available in browser. This is done to make mobile
		// safari trigger the :active css
		function triggerActive() {}
		
		if("ontouchstart" in document.documentElement) {
			var i, button;
			var buttons = u.qsa(".button", page);
			for(i = 0; button = buttons[i]; i++) {
				button.addEventListener("touchstart", triggerActive, false);
			}
		}

		// set images if IE < 9
		if(ua.match(/MSIE [6-8]{1}.0;[^$]+Windows/g)) {
			var images = u.qsa("img");
			var i, image, ext;
			for(i = 0; image = images[i]; i++) {
				ext = image.src.substring(image.src.length-4);
				image.src = image.src.replace(ext, "_ie"+ext);
			}
		}
		
	}
}

