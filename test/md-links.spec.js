// const mdLinks = require('../');


// describe('mdLinks', () => {

//   it('should...', () => {
//     console.log('FIX ME!');
//   });

// });
const {readFile} = require("./cli.js");
test("it should be a function", () => {
  const file = readFile;
    expect(typeof file).toBe(" function");
});
