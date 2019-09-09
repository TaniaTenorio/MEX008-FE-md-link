
const readFile = require("./readFile.js");
const findLInk = require("./findLink.js");
const path = require ("path");

const mdlinks = (file, options) =>{
  if(path.extname(file) === ".md"){
    readFile(file).then((data) => {
    return findLInk(data);
    })
    .then((linkData) => {
      console.log(linkData);
    });
  // ejecuta readFile
  } else {
    console.log("este archivo no tiene formato MarkDown");
  }
  // if (file != null){
  //   console.log("tenemos archivo para leer", file);
  //   }
};
module.exports = mdlinks;