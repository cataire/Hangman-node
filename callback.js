var fs = require("fs");
// Write a function that logs a message, then executes
// a function argument.
function logMessage(argument, string) {
	console.log(string);
argument();
};
// Write a function that runs a function argument if
// its other argument is truthy.

function truthy(argument2, true) {
	if(true === true) {
		argument2();
	}
};
// Write a function that accepts a function argument and
// a value, and returns a function that returns the result
// of executing the function argument with the value.

function function3(argument3, value){

	return argument(value);
  // Write a function that accepts a 
   //function (F) and a value (V), and returns a function that 
//returns the result of running F on V. This sounds tricky, 
//but it's easier than it sounds—just take it step by step!
}
// This isn't as hard as it sounds!
// Use fs.writeFile to log a message to a file called
// log.txt. Are yo uusing callbacks anywhere? Where?