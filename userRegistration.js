console.log("Welcome to user registration");

const userInput = require('prompt-sync')();
let NAME_REGEX = new RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
let EMAIL_REGEX = new RegExp("^([a-zA-Z0-9_\\-\\+]+)@([a-zA-Z1-9]+)\\.([a-zA-Z]{2,})$" ||
										"^([a-zA-Z0-9_\\-\\+]+)@([a-zA-Z1-9]+)\\.([a-zA-Z]{2,}+)\\.([A-Za-z]{2})$" || 
										"^([a-zA-Z0-9_\\-\\+]+)\\.([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z1-9]+)\\.([a-zA-Z]{2,})$" ||
										"^([a-zA-Z0-9_\\-\\+]+)\\.([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z1-9]+)\\.([a-zA-Z]{2,}+)\\.([A-Za-z]{2})$");
let PHONE_NUMBER_REGEX = new RegExp("^[1-9][0-9] [0-9]{10}$");
let PASSWORD_REGEX = new RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\\s).{8,15}$");

function checkValidInput(userInput, regexPattern) {
	if(regexPattern.test(userInput))
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

let phoneNumber = userInput("Enter phone number: ");
checkValidInput(phoneNumber, PHONE_NUMBER_REGEX);

let password = userInput("Enter password: ");
checkValidInput(password, PASSWORD_REGEX);
