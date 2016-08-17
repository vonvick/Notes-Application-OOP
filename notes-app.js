// create the class for the note Application
class Note {
  constructor (author, note_content) {
    this.author = author;
    this.note = note_content;
  }

}

class NotesApplication {
  constructor (author) {
    this.name = author;
    this.notes = [];
  }

  // The function that creates a note
  create (author, note_content) {
  	var newNote = new Note (author, note_content);
    return this.notes.push(newNote.note);
  }

  // The function that lists the notes for an author
  listNotes () {
    var results = "";
    for (var i = 0; i < this.notes.length ; i++) {
      results += 'Note ID: ' + (i+1) + '\n';
      results += this.notes[i] + '\n';
      results += 'By Author: ' + this.name + '\n' + '\n';
    }
    return results;
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
    console.log('Showing results for search: ' + search_text + '\n');
    var result = "";
    var count = 0;
    var author = this.name;
    if (search_text === "" || search_text === " ") {
    	return "You did not enter a search text";
    } else {
      for (var i = 0; i < this.notes.length; i++) {
   	    if (this.notes[i].indexOf(search_text) !== -1) {
          result += 'Note ID ' + (i + 1) + '\n';
          result += this.notes[i] + '\n';
          result += author + '\n' + '\n';
          count += 1;
        }
      }
      if (count > 0) {
    	return result;
      } else {
    	return "Could not find your search text";
      }
    }
  }

}
