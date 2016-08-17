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

  // The function that lists the notes for an author
  listNotes () {
    var results = "";
    for (var i = 0; i < this.notes.length ; i++) {
        results += 'Note ID: ' + (i+1) + '\n';
        results += this.notes[i] + '\n';
        results += 'By Author: ' + this.author;
        return results;
    }
  }

  // The function that
  get (note_id) {
    var results = "";
    var note = this.notes[note_id - 1];
    if (note) {
        results += note;
        return results;
    }
    else {
        results += 'Note not found';
        return results;
    }
  }

}
