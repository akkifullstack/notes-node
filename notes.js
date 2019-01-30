console.log('Starting Notes.js')

const fs = require("fs");

let fetchNotes = () => {
  try {
    let noteString = fs.readFileSync('notes-data.json');
    return JSON.parse(noteString)
  }catch (e) {
      return [];
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes))
}


let addNote = (title, body) =>{
  let notes = fetchNotes();
  let note = {
    title,
    body
  }

  let duplicatesNotes = notes.filter((note) => note.title === title)
  if(duplicatesNotes.length === 0){

    notes.push(note)
    saveNotes(notes)
    return note;
  }
}
let getAll = () =>{
  let allNotes = fetchNotes()
  return  allNotes
}

let readNote = (title) => {
  let notes = fetchNotes();
  let oneNotes = notes.find((note) => note.title === title)
  return oneNotes
}
let removeNote = (title) => {
  let notes = fetchNotes();
  let newNotes = notes.filter((note) => note.title !== title)
  saveNotes(newNotes)

}


module.exports = {addNote, getAll, readNote, removeNote}
