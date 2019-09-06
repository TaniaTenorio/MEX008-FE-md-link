#!/usr/bin/env node
const mdlinks = require ("./");

const url = process.argv[2];
const options = {
    validate: process.argv[3],
    stats: process.argv[4]
}
//console.log(options);

