const fs = require("fs");

const readFile = () => {
    const fileContent = new Promise((resolve, reject) => {
        fs.readFile("./testingFile.md", "utf8", (err,data) => {
            if(err) return reject(err);
            resolve(data);
        })
    })
    return fileContent

}
//readFile();
module.exports = readFile;