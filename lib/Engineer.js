// pulling input from Employee.js
const Employee = require(".//Employee");
// Engineer class is an extension of Employee constructor and pull github info
class Engineer extends Employee {
	constructor(name, id, email, github) {
		// super keyword accesses and calls functions for object's parent which is Employee construtor items
		super(name, id, email);

		this.github = github;
	}

	getGithub() {
		return this.github;
	}
	// default role to be Engineer if selected
	getRole() {
		return "Engineer";
	}
};

module.exports = Engineer;