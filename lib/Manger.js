const Employee = require(".//Employee");

// Manager constructor
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		// super keyword accesses and calls functions for object's parent which is Employee construtor items
		super(name, id, email);
		
		this.officeNumber = officeNumber;
	}

	getRole () {
		return "Manager";
	}
}

module.exports = Manager;