const readFile = require("./readFile.js");


// console.log(readFile());
readFile().then((data) =>{
    console.log(typeof data);
    
} )
// const fileContent = readFile();
// console.log(fileContent);


// const link = "https://www.google.com, https://www.facebook.com, https://www.hotmail.com";

// const linkStructure = /https/g;
// const linkMatch = fileContent.match(linkStructure);
// console.log(linkMatch);

