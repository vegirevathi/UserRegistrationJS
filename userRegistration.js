console.log("Welcome to user registration");

const userInput = require('prompt-sync')();
let NAME_REGEX = new RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
let EMAIL_REGEX = new RegExp("^[a-zA-Z0-9.+_-]+[@][a-zA-Z0-9]+[.]co(m|.in)$");
let PHONE_NUMBER_REGEX = new RegExp("^[0-9][0-9] [0-9]{10}$");
function checkValidInput(userInput, regexPattern) {
	if(regexPattern.test(firstName))
		console.log("Valid");
	else
		console.log("Invalid");
}

let firstName = userInput("Enter First Name: ");
checkValidInput(firstName, NAME_REGEX);

let lastName = userInput("Enter Last Name: ");
checkValidInput(lastName, NAME_REGEX);

let email = userInput("Enter Email: ");
checkValidInput(email, EMAIL_REGEX);

let phoneNumber = userInput("Enter phone number");
checkValidInput(phoneNumber, PHONE_NUMBER_REGEX);


