var breachContainer = document.getElementById("breaches-info");
var btn = document.getElementById("btn");

btn.addEventListener("click" , function() {

	var ourRequest = new XMLHttpRequest();
	ourRequest.open('GET', 'https://haveibeenpwned.com/api/v2/breaches');
	ourRequest.onload = function() {
		var ourData = JSON.parse(ourRequest.responseText);
		renderHTML(ourData);
	};
	ourRequest.send();
});

function renderHTML(data) {
	var htmlString = "";

	for(i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].Name + " :  " + data[i].Description + ".</p>";
	}

	breachContainer.insertAdjacentHTML('beforeend', htmlString);

}
