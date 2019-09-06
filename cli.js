#!/usr/bin/env node
"use strict"

const mdlinks = require ("./");

const file = process.argv[2];
const options = {
    validate: process.argv[3],
    stats: process.argv[4]
}
//console.log(options);
mdlinks(file, options);

