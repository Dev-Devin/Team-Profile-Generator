const Manager = require("../lib/Manager");

let testManager = new Manager("devin", "23444", "devin@gmail.com", "12345");

test("testing getName function", function () {
  expect(testManager.getName()).toBe("devin");
});

test("testing getEmail function", function () {
  expect(testManager.getEmail()).toBe("devin@gmail.com");
});

test("testing getId function", function () {
  expect(testManager.getId()).toBe("23444");
});

test("testing getOfficeNumber function", function () {
  expect(testManager.getOfficeNumber()).toBe("12345");
});

test("testing getRole function", function () {
  expect(testManager.getRole()).toBe("Manager");
});
