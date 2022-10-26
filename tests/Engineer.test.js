const Engineer = require("../lib/Engineer");

let testEngineer = new Engineer(
  "devin",
  "23444",
  "devin@gmail.com",
  "Dev-Devin"
);

test("testing getName function", function () {
  expect(testEngineer.getName()).toBe("devin");
});

test("testing getEmail function", function () {
  expect(testEngineer.getEmail()).toBe("devin@gmail.com");
});

test("testing getId function", function () {
  expect(testEngineer.getId()).toBe("23444");
});

test("testing getGithub function", function () {
  expect(testEngineer.getGithub()).toBe("Dev-Devin");
});

test("testing getRole function", function () {
  expect(testEngineer.getRole()).toBe("Engineer");
});
