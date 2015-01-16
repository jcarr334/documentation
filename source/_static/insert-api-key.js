api_key_replace = function (){
	var x=XmlHttpRequest();
	x.open("get", "https://mailgun.com/sessions/current");
	if (x.status != 200) {
		return;
	}
	var user = JSON.parse(x.responseText);
	var e=document.getElementsByTagName("*");
	for (var i=0; i < e.length; i++) {
		var children = e[i].childNodes;
		for (var j=0;j<children.length; j++) {
			if (children[j].nodeType == 3 &&
				children[j].nodeValue.indexOf("YOUR_API_KEY") > -1) {
				children[j].nodeValue = children[j].nodeValue.replace(
					"YOUR_API_KEY", user.api_key);
			}
			if (children[j].nodeType == 3 &&
				children[j].nodeValue.indexOf("YOUR_DOMAIN_NAME") > -1) {
				children[j].nodeValue = children[j].nodeValue.replace(
					"YOUR_DOMAIN_NAME", user.active_domain);
			}
		}
	}
}

