const fs = require("fs");

const readFile = fs.readFile("./README.md", "utf8", (err,data) => {
    if(err) throw err;
    const mdFile = data;
    console.log(mdFile);
    return mdFile
});

module.exports = readFile;