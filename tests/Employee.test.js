const Employee = require("../lib/Employee");

let testEmployee = new Employee("devin", "23444", "devin@gmail.com");

test("testing getName function", function () {
  expect(testEmployee.getName()).toBe("devin");
});

test("testing getEmail function", function () {
  expect(testEmployee.getEmail()).toBe("devin@gmail.com");
});

test("testing getId function", function () {
  expect(testEmployee.getId()).toBe("23444");
});
