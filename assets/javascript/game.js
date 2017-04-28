	// variables

var bands = ["modestmouse", "radiohead", "sleaterkinney", "jeffrosenstock", "neutralmilkhotel", "wilco", "blur", "jonimitchell", "thebeachboys", "theymightbegiants", "laurastevenson", "skatingpolly", "deerhunter", "elliottsmith", "bigstar", "lcdsoundsystem", "chumped", "thevelvetunderground", "sufjanstevens", "prince"];
var guessCount = 10;
var usedLetters = [ ];
var displayedBand = bands[Math.floor(Math.random() * bands.length)];
var blanks = displayedBand.split("").map(function(){return "_"});
var wins = 0;


	// displays wins

document.getElementById("wins").innerHTML = wins;

	// displays random word

document.getElementById("displayed-band").innerHTML = blanks.join(" ");

	// displays remaining guesses

document.getElementById("guess-remain").innerHTML = guessCount;

	// displays letters already used

document.getElementById("used-letters").innerHTML = usedLetters;
		
	// key input

document.onkeyup = function(event) {
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);
	var index = displayedBand.indexOf(userGuess);

		// guess correct letters

	while(index > -1) {
		blanks[index] = userGuess;
		document.getElementById("displayed-band").innerHTML = blanks.join(" ");
		index = displayedBand.indexOf(userGuess,index + 1);
	};

		// guess wrong letters

	if(displayedBand.indexOf(userGuess) == -1){
		guessCount--;
		document.getElementById("guess-remain").innerHTML = guessCount;

			// stops wrong letters from repeating

		if(usedLetters.indexOf(userGuess) == -1){
			usedLetters.push(userGuess);
		};
		document.getElementById("used-letters").innerHTML = usedLetters.join(" ");
	};

		// lose

	if(guessCount == 0){
		displayedBand = bands[Math.floor(Math.random() * bands.length)];
		blanks = displayedBand.split("").map(function(){return "_"});
		document.getElementById("displayed-band").innerHTML = blanks.join(" ");
		guessCount = 10;
		document.getElementById("guess-remain").innerHTML = guessCount;
		usedLetters = [ ];
		document.getElementById("used-letters").innerHTML = usedLetters.join(" ");
	};

		// guessed word correctly

	if(blanks.indexOf("_")==-1){
		document.getElementById("image").innerHTML = ("<img src=\"assets/images/" + displayedBand + ".jpg\">");
		//play music ("<audio id=\"audio\" src=\"assets/audio/" + displayedBand + ".mp3\"></audio>")
		wins++;
		document.getElementById("wins").innerHTML = wins;
		displayedBand = bands[Math.floor(Math.random() * bands.length)];
		blanks = displayedBand.split("").map(function(){return "_"});
		document.getElementById("displayed-band").innerHTML = blanks.join(" ");
		guessCount = 10;
		document.getElementById("guess-remain").innerHTML = guessCount;
		usedLetters = [ ];
		document.getElementById("used-letters").innerHTML = usedLetters.join(" ");

		//show band name ??

		//play audio ??

	};
			
};
		console.log(displayedBand);