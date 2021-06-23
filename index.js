// packages needed for application and HTML creation directory
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/generatePage");

// Manager information added
const newManager = [
	{
		type: "input",
		name: "name",
		message: "What is the manager's name?",
		validate: nameInput => {
			if (nameInput) {
				return true;
			} else {
				console.log("You must enter the manager's name!");
				return false;
			}
		}
	},
	{
		// Manager ID
		type: "input",
		name: "id",
		message: "Please enter the manager's ID.",
		validate: idInput => {
			if (idInput) {
				return true;
			} else {
				console.log("You must enter the manager's ID!");
			}
		}
	},
	{
		// Manager email
		type: "input",
		name: "email",
		message: "Please enter the manager's email.",
		validate: emailInput => {
			if (emailInput) {
				return true;
			} else {
				console.log("You must enter the manager's email!");
			}
		}
	},
	{
		// Manager office number
		type: "input",
		name: "officeNumber",
		message: "Please enter the manager's office number.",
		validate: officeNumberInput => {
			if (officeNumberInput) {
				return true;
			} else {
				console.log("You must enter the manager's office number!");
			}
		}
	}
];