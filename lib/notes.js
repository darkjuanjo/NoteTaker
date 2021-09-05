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
  // const UpdatedNotes = notesArray.filter(note => note.id != id)[0];
  // fs.writeFileSync(
  //   path.join(__dirname, '../db/db.json'),
  //   JSON.stringify(UpdatedNotes, null, 2)
  // );
  console.log(id);

};

module.exports = {
  createNewNote,
  validateNote,
  RemoveNote
};

