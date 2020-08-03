console.log("Welcome to user registration");

const userInput = require('prompt-sync')();
let NAME_REGEX = new RegExp("^[A-Z]{1}[A-Za-z]{2,}");

function checkValidInput(userInput, regexPattern) {
	if(NAME_REGEX.test(firstName))
		console.log("Valid");
	else
		console.log("Invalid");
}

let firstName = userInput("Enter First Name: ");
checkValidInput(firstName, NAME_REGEX);

let lastName = userInput("Enter Last Name: ");
checkValidInput(lastName, NAME_REGEX);
