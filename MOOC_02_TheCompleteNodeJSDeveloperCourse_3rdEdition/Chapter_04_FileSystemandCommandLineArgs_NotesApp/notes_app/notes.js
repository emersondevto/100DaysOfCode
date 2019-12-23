const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return fs.readFileSync("notes.json", { encoding: "utf8" });
};

// Filter no se detiene una ves que se cumple la condición
// Find se detiene inmediatamente después de satisfacer la primera coincidencia.
const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(note => note.title === title);
  const duplicateNote = notes.find(note => note.title === title);

  // if (duplicateNotes.length === 0) {
  if (!duplicateNote) {
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

const removeNote = title => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notesToKeep.length !== notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green.inverse("Note removed: ", title));
  } else {
    console.log(chalk.red.inverse("The note do not exist"));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse("Your notes:"));
  notes.forEach(note => console.log(note.title));
};

const readNote = title => {
  const notes = loadNotes();
  const noteToPrint = notes.find(note => note.title === title);
  if (noteToPrint) {
    console.log(chalk.inverse("Title: ", noteToPrint.title));
    console.log("Body: ", noteToPrint.body);
  } else {
    console.log(chalk.red.inverse("Note not exist"));
  }
};

const saveNotes = notes => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", notesJSON);
};

const loadNotes = () => {
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
  removeNote,
  listNotes,
  readNote
};
