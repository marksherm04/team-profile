const Employee = require(".//Employee");

// Manager constructor
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// super keyword accesses and calls all functions for object parent which is Employee construtor objects
		super(name, id, email);
		
		this.officeNumber = officeNumber;
	}

	getRole () {
		return "Manager";
	}
}

module.exports = Manager;