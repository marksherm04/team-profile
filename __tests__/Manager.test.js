// pull test info from Manager.js
const Manager = require("../lib/Manger");
// creates false test before Manager.js input is correct
test("create a Manager object", () => {
	const manager = new Manager("Mark", 35, "marksherm04@gmail.com", 10);
	// last input (officeNumber) will equal any number input by user
	expect(manager.officeNumber).toEqual(expect.any(Number));
});