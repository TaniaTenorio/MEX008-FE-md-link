# tania-tenorio-find-links

## Installation

Using npm:

`$ npm -i tania-tenorio-find-links`

In Node.js:

`const findLinks = require ("./mdLinks.js");`

`const links = findLinks(file,options)
//returns an array of objects with the following info:`


    [
      {href: URL
      text: text inside the link <a>
      file: path of the file where the link was founded}
    ]

## Features

find-links is a helpful tool for finding existing links in any markdown document. This library allows you to identify all the links and creates and HTTP request to identify if any link is broken.

## Quick Start

Type in the command line:
`npx find-links <path-to-file> [option]`

Example:

`$ npx find-links ./some/example.md`

    href: Link a algo,
    text: https://linkaalgo.com,
    file: /User/someuser/somedir/dir/some/example.md

Using Options:

The avaliable options are `-validate` and `-stats`. When validating a links, the result will be `ok` or `fail`, depending on the result of the HTTP request.

The `-stats` option will show basic info of the  links.

Example:

`$ npx find-links ./some/example.md -validate`

    fail 400 
    href: Link a algo,
    text: https://linkaalgo.com,
    file: /User/someuser/somedir/dir/some/example.md

`$ npx find-links ./some/example.md -stats`

    Total:1
    Unique: 1

`$ npx find-links ./some/example.md -stats -validate`

    Total: 1
    Unique: 1
    Broken: 0

## Demo

![Demo](./Screenshot-mdlinks.png)

## Diagrama de Flujo

[Diagrama de Flujo](https://www.lucidchart.com/invitations/accept/ea6a44c0-742c-4fd9-88f3-7129bfff5937)
