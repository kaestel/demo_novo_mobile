if(!document.referrer.match(/http\:\/\/m\.novonordisk\./gi)) {
	var ua = navigator.userAgent;
	if((ua.match(/iphone|ipod|android| HTC\_/gi) && !ua.match(/tablet/gi)) || ua.match(/windows phone os/gi)) {
		location.href = "http://m.novonordisk.com";
	}
}
