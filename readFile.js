const fs = require("fs");
const path = require ("path");
//console.log(process.argv[2]);

const readFile = file => {
    const fileContent = new Promise((resolve, reject) => {
        fs.readFile(path.resolve(file), "utf8", (err, data) => {
            // console.log(typeof data)
            if (err) {
                return reject(err);
            }
            return resolve(data);
        })
    })
    return fileContent
    //retorna una promesa pendiente
}

module.exports = readFile;