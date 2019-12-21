const fs = require("fs");
const chalk = require("chalk");

const getNotes = function() {
  return fs.readFileSync("notes.json", { encoding: "utf8" });
};

const addNote = function(title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body
    });

    saveNotes(notes);
    console.log(chalk.green.inverse("New note addded"));
  } else {
    console.log(chalk.red.inverse("This note already existe"));
  }
};

const removeNote = function(title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter(function(note) {
    return note.title !== title;
  });

  if (notesToKeep.length !== notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed: ", title));
  } else {
    console.log(chalk.red.inverse("The note do not exist"));
  }
};

const saveNotes = function(notes) {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = function() {
  try {
    const notesBuffer = fs.readFileSync("notes.json");
    const notesJSON = notesBuffer.toString();
    const parsedNotes = JSON.parse(notesJSON);
    return parsedNotes;
  } catch (error) {
    return [];
  }
};

module.exports = {
  addNote,
  getNotes,
  removeNote
};
