// const mdLinks = require('../');


// describe('mdLinks', () => {c

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
const readFile = require("../readFile.js");
const findLink = require("../findLink.js");
const dataMock = "[Google](https://www.google.com/)";

test("it should be a function", () => {
    expect(typeof readFile).toBe("function");
});
test ("the data should be a string", () => {
  return readFile("testingFile.md").then(data => {
    expect(typeof data).toBe("string");
  });
});
test("it should be a function", () => {
  expect(typeof findLink).toBe("function");
});
test ("the data should be an object", () => {
  return findLink(dataMock).then(data => {
    expect(typeof linksArray).toBe("object");
  });
});