const router = require('express').Router();
const notes = require('../../db/db.json');
const {createNewNote, validateNote, RemoveNote} = require('../../lib/notes');
const uniqid = require('uniqid');

router.get('/notes', (req,res) => {
let saved_notes = notes;
console.log(saved_notes);
res.json(saved_notes);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uniqid();
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note cannot be empty.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = uniqid();
  
    if (!validateNote(req.body)) {
      res.status(400).send('The note cannot be empty.');
    } else {
      const note = createNewNote(req.body, notes);
      res.json(note);
    }
});

router.delete('/notes/:id', (req,res) => {
   const updated_notes = RemoveNote(req.params.id, notes);
   res.json(updated_notes);
});

module.exports = router;