const Word = require('./word.js').Word;
const wordArray = require("./word.js").wordArray;

var dragonfly = new Word("butterfly");
dragonfly.pushToWordArray();

var cricket = new Word("cricket");
cricket.pushToWordArray();

var ant = new Word("ant");
ant.pushToWordArray();

var beetle = new Word("beetle");
beetle.pushToWordArray();

var insect = new Word("insect");
insect.pushToWordArray();

function Letters(passedWord) {
	this.passedWord = passedWord;
	this.length = this.passedWord.length;
	this.letterArray = this.passedWord.split('');
	this.underScores = [];

 	this.createUnderScores = function() {
 	for (var index = 0; index < this.length; index++) {

 	this.underScores.push("_");

 	}
 
 	console.log("\n\n" + this.underScores.join(' ') + "\n\n");
 };
};

module.exports.Letters = Letters;
module.exports.wordArray = wordArray;


