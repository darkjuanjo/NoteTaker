const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );
  return note;
};

function validateNote(note) {
  if(note.length == 0){
    return false
  };
  return true;
}

function RemoveNote(id, notesArray) {
  notesArray.forEach((note, index) => {
    if(note.id === id){
      notesArray.splice(index, 1);
    }
  });

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify(notesArray, null, 2)
  );

  return notesArray
};


module.exports = {
  createNewNote,
  validateNote,
  RemoveNote
};

