const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
	const engineer = new Engineer("Mark", 35, "marksherm04@gmail.com", "marksherm04");

	expect(engineer.github).toEqual(expect.any(String));
});