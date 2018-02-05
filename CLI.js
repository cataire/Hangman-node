
let inquirer = require('inquirer');
let Letters = require("./letters").Letters;
let wordArray = require("./letters").wordArray;
let currentWord;
let guessesLeft = 12;
let userInput = [];
let allowedletters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



function pickWord(){

	currentWord = wordArray[Math.floor(Math.random() * wordArray.length)];
	currentLetters = new Letters(currentWord);
	currentLetters.createUnderScores();
};

pickWord();

function winOrLose(){

	if (currentLetters.letterArray.join('') === currentLetters.underScores.join('')) {

		console.log("\nYou won!\n");
		endGame();
	}

	else if (guessesLeft === 0) {

		console.log("\nYou have no more guesses\n");
		console.log("\nThe word was " + currentWord + "\n");
		endGame();
	}

	else {
		keepPrompting();
	}

};

function endGame() {

	inquirer.prompt([

	{
		type: 'list',
		name: 'playAgain',
		message: 'Do you want to play again?',
		choices: [
			'Yes',
			'No'
		]

	}
	]).then(answer => {

		if (answer.playAgain === 'Yes') {

			currentWord = '';
			guessesLeft = 12;
			pickWord();
			keepPrompting();
		}

		else {

			console.log("\nThank you for playing!\n");
		};

	}).catch(error => {
		console.log(error);
	});

};
 

function keepPrompting() {	

	inquirer.prompt([

		{
			type: "input",
			name: "letter",
			message: "\nPlease enter a letter\n"
		}

	]).then(answers => {

		if (allowedletters.indexOf(answers.letter) > -1 && userInput.indexOf(answers.letter) < 0) {	

				guessesLeft--;

				userInput.push(answers.letter);

				console.log("\nYou have " + guessesLeft + " guesses left\n");

			    if (currentLetters.letterArray.indexOf(answers.letter) == -1) { 
			    	console.log("\nNo such letter!\n");
			    	console.log("\n" + currentLetters.underScores.join(' ') + "\n");
			    };


		    for (var index = 0; index < currentLetters.letterArray.length; index++) {

		 		if (answers.letter === currentLetters.letterArray[index]){

		 			currentLetters.underScores[index] = answers.letter;
		 			console.log("\nYou guessed right!\n");
		 			console.log("\n" + currentLetters.underScores.join(' ') + "\n");

		 		}
			};

			winOrLose();

	}

	else {

		console.log("\nNot a valid input. You already tried it or it is not a letter\n");

		keepPrompting();

		}



	}).catch((error) => 

		{
		console.log(error);
	});
};

keepPrompting();
