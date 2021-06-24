// packages needed for application and HTML creation directory
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/generatePage");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manger");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team members added to empty array
const workTeam = [];

// Manager information added
const managerInfo = [
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

const engineerInfo = [
	{
		type: "input",
		name: "name",
		message: "What is the engineer's name?",
		validate: nameInput => {
			if (nameInput) {
				return true;
			} else {
				console.log("Please enter the engineer's name!");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "id",
		message: "Please enter the engineer's ID.",
		validate: idInput => {
			if (idInput) {
				return true;
			} else {
				console.log("Please enter the engineer's ID!");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "email",
		message: "Please enter the engineer's email.",
		valdiate: emailInput => {
			if (emailInput) {
				return true;
			} else {
				console.log("Please enter the engineer's email!");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "github",
		message: "Please input engineer's GitHub username.",
		validate: githubInput => {
			if (githubInput) {
			} else {
				console.log("Please enter the engineer's github!");
				return false;
			}
		}

	},
];

const internInfo = [
	{
		type: "input",
		name: "name",
		message: "What is the intern's name?",
		validate: nameInput => {
			if (nameInput) {
				return true;
			} else {
				console.log("Please enter the intern's name!");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "id",
		message: "Please enter the intern's ID.",
		validate: idInput => {
			if (idInput) {
				return true;
			} else {
				console.log("Please enter the intern's ID!");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "email",
		message: "Please enter the intern's email.",
		valdiate: emailInput => {
			if (emailInput) {
				return true;
			} else {
				console.log("Please enter the intern's email!");
				return false;
			}
		}
	},
	{
		type: "input",
		name: "github",
		message: "Please input intern's school.",
		validate: githubInput => {
			if (githubInput) {
			} else {
				console.log("Please enter the intern's school!");
				return false;
			}
		}

	}		
];

const addTeamMember = {
	type: "list",
	name: "teamMember",
	message: "Would you like to add another team member? If so, what department are they in?",
	choices: ["Engineer", "Intern", "None"]
}



// adds new employees
const newEmployee = () => {
	console.log(`
=========================
Add Additional Employees
=========================`)

};

