const Employee = require("../lib/Employee");

test("creates an employee object", () => {
	const employee = new Employee("Mark", 35, "marksherm04@gmail.com");

	expect(employee.name).toBe("Mark");
	expect(employee.id).toEqual(expect.any(Number));
	expect(employee.email).toEqual(expect.any(String));
});