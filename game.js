//TODO fix the underscore of the game
//TODO Add the image to the game
//TODO Reset the game go back to html and create a restart button
//TODO Add Audio to the game
//const doubleletters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const words = ["WAKANDA", "DIPLOMATS", "DORA", "CHALLENGE", "KILLMONGER", "NAKIA", "SHURI", "KING"];
var randWord = Math.floor(Math.random() * words.length);
var lettersInChosenWord = words[randWord];
var rightWord = [];
var wrongWord = [];
var underScore = [];
var letGuessed = [];

var Wins = 0;
var numGuesses = 9;

var audio = new Audio();
var image = new Image();

function startGame() {
  console.log("Gamestarted");
  randWord
  console.log(randWord);
  lettersInChosenWord;
  doubleletters;


  var generateUnderscore = () => {
    for (var i = 0; i < lettersInChosenWord.length; i++) {
      underScore.push("_");
    }
    return underScore;
  };
  document.getElementById("Current"), (textContent = underScore.join(""));
  
  console.log(randWord);
  console.log(lettersInChosenWord);
  console.log(underScore);
  (generateUnderscore)
}
function reset() {
  doubleletters;
  numGuesses = 7;
  letGuessed;
  underScore;
  console.log("Resetting");
  startGame();
}
reset();


var docUnderScore = document.getElementsByClassName("underscore");
var docGuessesRemaining = document.getElementsByClassName("Number of Guesses Remaining");
var docLettersGuessed = document.getElementsByClassName("Letters Already Guessed");
  
  console.log(lettersInChosenWord);

// create reset function
document.addEventListener("keypress", event => {
  var keyword = String.fromCharCode(event.keyCode);
  if (lettersInChosenWord.indexOf(keyword) > -1) {
    //console.log(rightWord + " " + keyword);
    rightWord.push(keyword);
    //console.log (rightWord);
    //underScore[lettersInChosenWord.indexOf(keyword)] = keyword;
    console.log(underScore);
    for (var i = 0; i < lettersInChosenWord.length; i++) {
      if (lettersInChosenWord[i] === keyword) {
        underScore[i] = keyword;
      }
    }
    console.log(underScore);
    docUnderScore[0].innerHTML = underScore.join("");
  } else {
    wrongWord.push(keyword);
    numGuesses--;
    //reset() player presses OK
  }

  console.log("Wins:" + Wins + "| guesses left:" + numGuesses);

  if (underScore.join("") == lettersInChosenWord) {
    //insert images and music for correct
    Wins++;
    //image.src = "../assets/images/Killmonger.jpg"
    //Audio("Ludwig Gransson ft. Baaba Maal - Wakanda.mp3 ");
    //audio.src =  + audio[] + ext;
    audio.src = "../assets/images/Music.mp3";
    audio.play();
    alert("You are a Winner-WakandaForever!");
  } else if (numGuesses === 0) {
    alert("You Lose Try Again");
  }
});
  