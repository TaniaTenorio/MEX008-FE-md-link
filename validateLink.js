const findLink = require("./findLink.js");
const https = require ("https");
const url = require("url");
const fetchUrl = require("fetch").fetchUrl;

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

// const validateLinks = arrayOfLinks => {
//   const newLinks = getLinks (arrayOfLinks);
//   return newLinks.map(link => {
//     return new Promise ((resolve, reject) => {
//       // console.log(link);
//       https.get(link, (res) =>{
//         if(res.statusCode === 200) {
//           let status = res.statusCode
//           return resolve(status)
//         }
//         return reject("Error")
//       });
//       // return validateLinks;
//     });
//   });
// };
// const validateLinks = (newArray) => {
  // console.log(newArray);
  
  const getStatus = (link) => {
    // console.log("link:", link);
    let url = link.toString();
    // console.log("LINK:", url);
    return new Promise ((resolve, reject) => {
      fetchUrl(url, (error, meta, body) => {
        if(meta){
          const status = meta.status;
          if(status){
            resolve(status);
          }else {
            reject(err);
        }} else {
          console.log("broken");
          
        };
      });
    });
  // };

  // Promise.all(newArray.map((url) => {
  //   let link = url.text;
  //   console.log("URL", link);
  //   getStatus(link)
  //   .catch(err => console.log(err))
  //   .then(results => console.log("Resultado", results))
  // }));
  // const arrayOfStatus = newArray.map(element => {
  //   let elementUrl = element.text
  //   let elementStatus = getStatus(elementUrl)
  //   console.log("elemento", elementStatus);
  // })
  // return arrayOfStatus
};

  module.exports = getStatus;