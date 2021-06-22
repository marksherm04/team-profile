const Manager = require("../lib/Manger");

test("create a Manager object", () => {
	const manager = new Manager("Mark", 35, "marksherm04@gmail.com", 10);

	expect(manager.officeNumber).toEqual(expect.any(Number));
});