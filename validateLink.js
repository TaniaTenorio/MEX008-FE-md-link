const findLink = require("./findLink.js");
const https = require ("https");
const url = require("url");

// const link = new URL("https://www.google.com/");
// const req = https.request(link, (res) => {
//     console.log("se está procesando");
    
//     console.log(res.statusCode);
// })
// const req = https.get('https://wwww.google.com', (res) => {
//     console.log('statusCode:', res.statusCode);
// })
const getLinks = (arrayOfLinks) => {  
  return arrayOfLinks.map((item) => item.text);
}

const validateLinks = arrayOfLinks => {
  const newLinks = getLinks (arrayOfLinks);
  return newLinks.map(link => {
    return new Promise ((resolve, reject) => {
      // console.log(link);
      https.get(link, (res) =>{
        if(res.statusCode === 200) {
          return resolve(res.statusCode)
        }
        return reject("Error")
      });
    });
  });

  // return validateLinks;
};

  module.exports = validateLinks;
