// create the class for the note Application

class NotesApplication {
  constructor (author) {
    this.name = author;
    this.notes = [];
  }

  // The function that creates a note
  create (note_content) {
    return this.notes.push(note_content);
  }

}
