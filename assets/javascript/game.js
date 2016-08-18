
  var Letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var lettersGuessed = [];
  var Wincounter = 0;
  var Losscounter = 0;
  var GuessesLeft = 9;



function game(){
		document.getElementById("wins").innerHTML="Wins: "+Wincounter;
		document.getElementById("losses").innerHTML="Losses: "+Losscounter;
		document.getElementById("guessesLeft").innerHTML="Guesses left: "+GuessesLeft;
		document.getElementById("lettersGuessed").innerHTML="Letters guessed: " +lettersGuessed;
					}

for (var i = 0; i < 9; i++) {
	var letterPlace = Letters[Math.floor(Math.random() * Letters.length)];
	var correctLetter = Letters[letterPlace];

	document.onkeyup=function(event){
		var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
		lettersGuessed.push(letterGuess);
		console.log(letterGuess);
		console.log(lettersGuessed);

		if (letterGuess == correctLetter){
			Wincounter ++}
		
		else {
		Losscounter ++}

	}		
}
	

function startagain(){

	window.location.reload(true);
}