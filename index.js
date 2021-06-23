// packages needed for application and HTML creation directory
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/generatePage");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manger");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team members added to empty array
const teamMembers = [];

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
				return false;
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
				return false;
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
				return false;
			}
		}
	}
];

// adds new employees
const newEmployee = () => {
	inquirer.prompt([
		{
			type: "list",
			name: "role",
			message: "Please choose your employee's role in the company.",
			choices: ["Engineer, Intern"]
		},
		{
			type: "input",
			name: "name",
			message: "What is the employee's name?",
			validate: nameInput => {
				if (nameInput) {
					return true;
				} else {
					console.log("Please enter the employee's name!");
					return false;
				}
			}
		},
		{
			type: "input",
			name: "id",
			message: "Please enter the employee's ID.",
			validate: idInput => {
				if (idInput) {
					return true;
				} else {
					console.log("Please enter the employee's ID!");
					return false;
				}
			}
		},
		{
			type: "input",
			name: "email",
			message: "Please enter the employee's email.",
			valdiate: emailInput => {
				if (emailInput) {
					return true;
				} else {
					console.log("Please enter the employee's email!");
					return false;
				}
			}
		},
		{
			type: "input",
			name: "github",
			message: "Please input employee's GitHub username.",
			when: (input) => {
				if (input.role === "Engineer") {
					return true;
				} else {
					console.log("Please enter employee's GitHub username!");
					return false;
				}
			}
		},
		{
			type: "input",
			name: "school",
			message: "Please input your intern's school name.",
			when: (input) => {
				if (input.role === "Intern") {
					return true;
				} else {
					console.log("Please enter your intern's school name!");
					return false;
				}
			}
		},
		{
			type: "confirm",
			message: "Would you like to add another employee?",
			default: false
		}
	])
	

};

// function to create HTML page
function writeToFile(fileName, data) {
	fs.writeFile("./dist/index.html", (fileName, data), err => {
		// if there's an error with the page creation, it will throw an error, otherwise a page will be created
		if (err)
			throw (err);
		console.log("Your Team Profile has been created.")
		return;
	});
};

function startApp() {
	inquirer.prompt(teamMembers)

		.then(function (userInput) {
			writeToFile("index.html", generatePage(userInput));
		});
};

// function to call and start application
startApp();