const readFile = require("./readFile.js");


// console.log(readFile());
readFile().then((data) =>{
    const regEx = /\[([a-zA-Z0-9\.]{1,})+\]\((https?\:\/\/(www\.)?([a-zA-Z0-9\-\_]{1,})+((\.?[a-zA-Z0-9\-\_\$\%\=\#\?\&]{1,4})?\/?){1,})\)/gm;
    const linksArray = [];
    let href;
    let url;
    while ((link = regEx.exec(data)) !== null) {
    const linkInfo = new Object();
    linkInfo.href = link[1];
    linkInfo.url = link[2];
    linksArray.push(linkInfo);
}
console.log(linksArray);
});
// const fileContent = readFile();
// console.log(fileContent);


// const link = "https://www.google.com, https://www.facebook.com, https://www.hotmail.com";

// const linkStructure = /https/g;
// const linkMatch = fileContent.match(linkStructure);
// console.log(linkMatch);

