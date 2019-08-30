// const mdLinks = require('../');


// describe('mdLinks', () => {c

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
const readFile = require("../readFile.js");

test("it should be a function", () => {
    expect(typeof readFile).toBe("function");
});
