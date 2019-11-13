const readFile = require("./readFile.js");
const findLInk = require("./findLink.js");
const validateLinks = require("./validateLink.js");
const path = require("path");

const linkError = (error) => {
  console.log(error);
}


const mdlinks = (file, options) => {

  if (path.extname(file) !== ".md") {
    console.log("Este archivo no es de tipo 'md'");
    return;
  }
  // ejecuta readFile
  readFile(file)
  .then((linkData) => {
	return findLInk(linkData);
  })
  .then((response) => {
	  return validateLinks(response);
  })
  .then((resp) => console.log(resp))
  .catch( (error) => linkError(error))
};

// if (file != null){
//   console.log("tenemos archivo para leer", file);
//   }
module.exports = mdlinks;