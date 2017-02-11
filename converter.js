// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
button.addEventListener("click", determineConverter);
document.querySelector("#userInput").addEventListener("keyPress",function (e) {
	var key = e.which || e.keyCode;
	if (key === 13) {
		determineConverter();
	}
}

function toCelsius (c) {
	return (c * 9) /5 + 32;
}

function toFahrenheit (f) {
	return (f - 32) * 5 /9; 	 
}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	if(document.getElementById("Fahrenheit").checked){
		var Fah = document.getElementById("userInput").value;
		document.getElementById("userInput").value="";
		document.getElementById("Fahrenheit").value;
		var cAnswer = toCelsius(farTemp);
		document.getElementById("answer").innerHTML = "<p>" + cAnswer + "&deg; C </p>"
	}
	else (document.getElementById("Celsius").checked) {
		var Cel = document.getElementById("userInput").value;
		document.getElementById("userInput").value="";
		document.getElementById("Celsius").value;
		var fAnswer = toCelsius(CelTemp);
		document.getElementById("answer").innerHTML = "<p>" + cAnswer + "&deg; C </p>"
	}
  console.log("event", clickEvent);
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

