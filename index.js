const readFile = require("./readFile.js");
const findLInk = require("./findLink.js");
const getStatus = require("./validateLink.js");
const path = require("path");

// const linkError = (error) => {
//   console.log(error);
// }


const mdlinks = (file, options) => {

  if (path.extname(file) !== ".md") {
    console.log("Este archivo no es de tipo 'md'");
    return;
  }
  // ejecuta readFile
  readFile(file)
  .then((fileContent) => {
	return findLInk(fileContent);
  })
  .then((linkData) => {
    // console.log("linkData:", linkData);

 
    Promise.all(linkData.map((url) => {
            let link = url.text;
            // console.log("URL", link);
            getStatus(link)
            .catch(err => console.log(err))
            .then(results => console.log(results))
          }));
        // console.log("RESP:", resp);
  })
  .catch( (error) => linkError(error))
  };

// if (file != null){
//   console.log("tenemos archivo para leer", file);
//   }
module.exports = mdlinks;