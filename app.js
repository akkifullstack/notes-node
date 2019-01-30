console.log("Starting App");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes")
const argv = yargs.argv;
let command  = process.argv[2];

if(command === 'add'){
  console.log('Adding Note')
  let note = notes.addNote(argv.title, argv.body)
  if(note){
    console.log("note added", argv.title, argv.body)
  }else{
    console.log("No note created Duplicate")
  }
}
else if (command === "list"){
  console.log("Listing all notes")
  let allNote = notes.getAll()
  console.log(allNote)
}
else if (command === "remove"){
  console.log("Removing note")
  notes.removeNote(argv.title)
}
else if (command === "read"){
  console.log("Get one note")
 let oneNotes = notes.readNote(argv.title)
 console.log(oneNotes)
}
else console.log("Nothing")