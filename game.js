

var Words = ['wizwards','nationals','capitals'];

var wins = 0;
var losses = 0;
var guessLetters = [];
var gameLetters = [];
var numberOfGueses = 3;
var pickOneWord = "";
var rightLetterCount = 0;



function StartGame()
{

	pickOneWord = Words[Math.floor(Math.random() * Words.length)];
	rightLetterCount = pickOneWord.length;
	
	numberOfGueses = 10;
	gameLetters = [];
	guessLetters = [];

	

	document.querySelector("#wins").innerHTML = wins;
	document.querySelector("#losses").innerHTML = wins;

	for(var i =0; i < pickOneWord.length; i++)
	{
		gameLetters.push("_");
	}

	document.querySelector("#words").innerHTML = gameLetters.join(", ");


}

function CompareLetter(val)
{

  guessLetters.push(val);
  document.querySelector("#sofar").innerHTML = guessLetters.join(", ");
  var guessedCorrectly = false;

  for(var i=0;i<pickOneWord.length; i++)
  {
  	if(val == pickOneWord[i])
  	{
  		guessedCorrectly = true;
  		gameLetters[i] = val;
  		 document.querySelector("#words").innerHTML = gameLetters.join(", ");
  		rightLetterCount--;
  		
  	}

  }


  if(guessedCorrectly == false)
  {
  	numberOfGueses--;
  }

  if(numberOfGueses == 0)
  {
  	losses++;
  	document.querySelector("#losses").innerHTML = losses;
  }

  if(rightLetterCount == 0)
  {
  	wins++;
  	document.querySelector("#wins").innerHTML = wins;
  }

}

StartGame();


document.onkeyup = function(event){



if(event.keyCode >= 65 && event.keyCode <= 90)
{
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	
	CompareLetter(letter);
}
}


