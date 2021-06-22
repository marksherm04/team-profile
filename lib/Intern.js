// pulling input from Employee.js
const Employee = require(".//Employee");
// Intern class will be an extension of Employee constructor and pull school info
class Intern extends Employee {
	constructor(name, id, email, school) {
		// super keyword accesses and calls functions for object's parent which is Employee construtor items
		super(name, id, email);

		this.school = school;
	}

	getSchool() {
		return this.school;
	}
	// default role to be Intern if selected
	getRole() {
		return "Intern";
	}
};

module.exports = Intern;