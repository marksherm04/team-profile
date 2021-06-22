// pull test info from Intern.js
const Intern = require("../lib/Intern");
//creates false test before Intern.js input is correct
test("create an Intern object", () => {
	const intern = new Intern("Ryan", 22, "ryanhoward@dundermifflin.com", "Kania");
	// last input (school) will equal any string input by user
	expect(intern.school).toEqual(expect.any(String));
});