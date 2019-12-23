const chalk = require("chalk");
const yargs = require("yargs");

const getNotes = require("../notes_app/notes");

// Customize yargs version

yargs.version("1.1.0");

const command = process.argv[2];

if (command === "add") {
  console.log("Adding note!!");
} else if (command === "remove") {
  console.log("Removing note!");
}

console.log(process.argv);
console.log(yargs.argv);

if (command === yargs.argv._[0]) {
  console.log("Adding note!!");
} else if (command === "remove") {
  console.log("Removing note!");
}

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function(e) {
    console.log("!Adding a new note");
    console.log(e);
  }
});
