// Get a reference to the button element in the DOM
var button = document.getElementById("convert");
var resetButton = document.getElementById("clear");

//determine if enter is pressed
document.querySelector("#userInput").addEventListener("keyPress", 
	function(e){
		var key = e.which || e.keyCode;
		if(key === 13) {
			determineConverter();
		}
	});

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
resetButton.addEventListener("click", resetText);

function resetText () {
	document.getElementById("userInput").value = "";
}

function toCelsius (x) {
	return (x - 32) * 5 / 9;
}

function toFahrenheit (x) {
	return x * 9 / 5 + 32;
}


// This function should determine which conversion should
// happen based on which radio button that is selected.
function determineConverter () {
	if (document.getElementById("celsius").checked) {
	var cTemp = document.getElementById("userInput").value;
	var cAnswer = toFahrenheit(cTemp);
	document.getElementById("answer").innerHTML = "<p>" + cAnswer + "</p>";
	}
	else if (document.getElementById("fahrenheit").checked) {
	var fTemp = document.getElementById("userInput").value;
	var fAnswer = toCelsius(fTemp);
	document.getElementById("answer").innerHTML = "<p>" + fAnswer + "</p>";
	}
}

