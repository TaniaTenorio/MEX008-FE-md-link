const readFile = require("./readFile.js");
const path = require ("path");


    const findLink = (data) => {
    const linkData = new Promise((resolve, reject)=> {
        const regEx = /\[([a-zA-Z0-9\.]{1,})+\]\((https?\:\/\/(www\.)?([a-zA-Z0-9\-\_]{1,})+((\.?[a-zA-Z0-9\-\_\$\%\=\#\?\&]{1,4})?\/?){1,})\)/gm;
        const linksArray = [];
        let link;
        // let href;
        // let url;
        while ((link = regEx.exec(data)) != null) {
            const linkInfo = new Object();
            linkInfo.href = link[1];
            linkInfo.text = link[2];
            linkInfo.file = path.resolve();
            linksArray.push(linkInfo);
            console.log(linksArray);
            
            resolve(linksArray);
        }
        if(linksArray == null){
            const err = new Error ("No se encontraron links en este archivo");
            return reject(err);
        }
})
return linkData;
}
    // console.log(linksArray);

module.exports = findLink;