const Employee = require("../lib/Employee");
test("testing getName function", function () {
  let testEmployee = new Employee("devin", "23444", "devin@gmail.com");
  expect(testEmployee.getName()).toBe("devin");
});
