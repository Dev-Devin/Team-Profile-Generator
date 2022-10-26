const Intern = require("../lib/Intern");

let testIntern = new Intern(
  "devin",
  "23444",
  "devin@gmail.com",
  "testingSchool"
);

test("testing getName function", function () {
  expect(testIntern.getName()).toBe("devin");
});

test("testing getEmail function", function () {
  expect(testIntern.getEmail()).toBe("devin@gmail.com");
});

test("testing getId function", function () {
  expect(testIntern.getId()).toBe("23444");
});

test("testing getSchool function", function () {
  expect(testIntern.getSchool()).toBe("testingSchool");
});

test("testing getRole function", function () {
  expect(testIntern.getRole()).toBe("Intern");
});
