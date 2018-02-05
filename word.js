let wordArray = [];

function Word(currentWord) {

 this.currentWord = currentWord;
 this.length = this.currentWord.length;

 this.pushToWordArray = function(){
 	wordArray.push(this.currentWord);

 }

} 

module.exports.Word = Word;
module.exports.wordArray = wordArray;
