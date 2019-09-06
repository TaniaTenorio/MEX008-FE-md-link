
const readFile = require("./readFile.js");
const findLInk = require("./findLink.js");

const mdlinks = (file, options) =>{
    readFile(file).then((data) => {
    console.log("esta es la data", data);
    return findLInk(data);
    })
        .then((linkData) => {
            console.log(linkData);
        });
  // if (file != null){
  //   console.log("tenemos archivo para leer", file);
  //   }
};
module.exports = mdlinks;