var randomNumber=Math.floor(Math.random() * 1)+1;
var guesses=document.querySelector('.guesses');
var lastResult=document.querySelector('.lastResult');
var lowOrHigh=document.querySelector('lowOrHigh');
var guessSubmit=document.querySelector('.guessSubmit');
var guessField=document.querySelector('.guessField');
var guessCount=1;
var resetButton;

guessField.focus()

function check(){
	
	var userGuess=Number(guessField.value);
	
	if(guessCount === 1){
		guesses.textContent='PREVIOUS GUESSES';
		}
	guesses.textContent += userGuess + ' ';
	
	if(userGuess === randomNumber){
		lastResult.textContent="congrats you win";
		lastResult.style.backgroundColor='blue';
		lowOrHigh.textContent='';
		setGameOver()
		
	}
	
	else if(guessCount === 5){
		lastResult.textContent='GAME OVER';
	    lowOrHigh.textContent='';
		setGameOver();
		}
	else {
		lastResult.textContent='WRONG';
		
		if(userGuess < randomNumber){
			lowOrHigh.textContent='LAST GUESS WAS TOO LOW';
		    
		}
		else if(userGuess > randomNumber){
			lowOrHigh.textContent='LAST GUESS WAS TOO HIGH';
		    
		}
	lastResult.backgroundColor='red';
	}
guessCount++;
guessField.value ='';
guessField.focus();

}

guessSubmit.addEventListener('click',check);

function setGameOver(){
	guessField.disabled=true;
	guessSubmit.disabled=true;
	resetButton=document.createElement('button');
	resetButton.textContent='PLAY AGAIN';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click',resetGame);
}

function resetGame(){
	guessCounter=1;
	var resetParas=document.querySelector('.resultparas p');
	for(var i=0; i<resetParas.length; i++){
		resetParas[i].textContent='';
	}
resetButton.parentNode.removeChild(resetButton);
guessField.disabled=false;
guessSubmit.disabled=false;
guessField.value='';
guessField.focus();

randomnumber=Math.floor(Math.random()*10)+1;

}

//console.log(randomNumber);
