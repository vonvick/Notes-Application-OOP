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
      results += 'By Author: ' + this.name + '\n' + '\n';
      return results;
    }
  }

  // The function that
  getNotes (note_id) {
    var results = "";
    if (typeof note_id === 'number') {
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
    return "You did not enter a number";
  }

  search (search_text) {
      console.log('Showing results for search: ' + search_text);
      var results = ""
      var author = this.author;
      this.notes.forEach(function(note, id) {
         if (note.includes(search_text)) {
             results += 'Note ID: ' + (id + 1) + '\n';
             results += note + '\n';
             results += author;

             return results;

         }else if (!note.includes(search_text)) {
              results += 'Could not find name in file';

              return results;
          }
      });
  }

}
