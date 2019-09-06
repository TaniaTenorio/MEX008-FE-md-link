const fs = require("fs");
const path = require ("path");
//console.log(process.argv[2]);

const readFile = (file) => {
    const fileContent = new Promise((resolve, reject) => {
        fs.readFile(path.resolve(file), "utf8", (err,data) => {
            if(err) return reject(err);
            resolve(data);
        })
    })
    return fileContent
}
//readFile();
module.exports = readFile;