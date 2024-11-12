const fs = require("fs")

//Sync
console.log("Starting read file")

const data =fs.readFileSync("./phonebook.json")
console.log("File data:" , data.toString( ))
console.log("Ending readfile")