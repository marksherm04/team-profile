// packages needed for application and HTML creation directory
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generatePage = require("./src/generatePage");

// const created to link to js files for different team members
const Manager = require("./lib/Manger");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// team members added to empty array
const fullTeam = [];

// function to run managerQuestions first always, and then will go into inquirer prompt to cycle through prompts to add new team members
function managerQuestions() {
	// Manager information added
	const managerInfo = [
		{
			// Manager name
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
	]
	// end array for manager questions and start prompt to get answers and log all of them under a new manager
	inquirer.prompt(managerInfo).then(response => {
		const newManager = new Manager(response.name, response.id, response.email, response.officeNumber)
		fullTeam.push(newManager)

		addEmployee();
	})
};

function addEmployee() {

	// adding in team members by asking which type of member to add
	const addTeamMember = [{
		type: "list",
		name: "teamMember",
		message: "Would you like to add another team member? If so, what department are they in?",
		choices: ["Engineer", "Intern", "None"]
	}]
	// if Engineer selected, will prompt the 4 questions for the engineer
	inquirer.prompt(addTeamMember).then(response => {
		console.log(response);

		if (response.teamMember === "Engineer") {
			inquirer.prompt(engineerInfo).then(response => {
				const newEngineer = new Engineer(response.name, response.id, response.email, response.github)
				fullTeam.push(newEngineer)
				console.log(fullTeam);
				addEmployee();
			})
		}
		// if Intern selected, will prompt the 4 questions for the intern
		else if (response.teamMember === "Intern") {
			inquirer.prompt(internInfo).then(response => {
				const newIntern = new Intern(response.name, response.id, response.email, response.school)
				fullTeam.push(newIntern)
				console.log(fullTeam)
				addEmployee();
			})
		}

		// if None selected, will end function and create page -- TODO: end function and create page somehow
		else if (response.teamMember === "None") {
			// TODO - create function to end prompts to pu in "None" else if statement
			createPage(fullTeam);
		}
	});
};

const createPage = fullTeam => {
	fs.writeFile("./dist/index.html", generatePage(fullTeam), err => {
		if (err) {
			console.log(err);
			return;
		}
		else {

			console.log("Your team page has been created! Right click and open index.html to see!")
		}
	});
};




// Engineer questions prompt
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
				return true;
			} else {
				console.log("Please enter the engineer's github!");
				return false;
			}
		}

	},
];
// Intern questions prompt
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
		name: "school",
		message: "Please input intern's school.",
		validate: githubInput => {
			if (githubInput) {
				return true;
			} else {
				console.log("Please enter the intern's school!");
				return false;
			}
		}

	}
];


// runs the function on start
managerQuestions();
