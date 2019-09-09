const findLink = require("./findLink.js");
const https = require ("https");

const link = new URL("https://www.google.com/");
const req = https.request(link, (res) => {
    console.log("se está procesando");
    
    console.log(res.statusCode);
})