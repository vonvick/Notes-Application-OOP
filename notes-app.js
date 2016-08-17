/**
 * Class Note that creates the note.
 * @param {string} author the author name of the note.
 * @param {string} note_content The note to be stored in the list of notes.
 * @constructor
 */
class Note {
  // constructor for Note Class
  constructor (author, note_content) {
    this.author = author;
    this.note = note_content;
  }
}

/**
 * Class NoteApplication that creates the note application.
 * @param {string} author the author name of the note.
 * @extends {Note}
 * @constructor
 */
class NotesApplication {
  //constructor for NoteApplication Class
  constructor (author) {
    this.name = author;
    this.notes = [];
  }

  // The function that creates a note
  create (note_content) {
  	var newNote = new Note (name, note_content);
    return this.notes.push(newNote.note);
  }

  // The function that lists the notes for an author
  listNotes () {
    var listResults = "";
    if (this.notes.length < 1) {
      listResults += "You do not have any note here!";
      return listResults;
    } else {
      for (var i = 0; i < this.notes.length ; i++) {
        listResults += 'Note ID: ' + (i+1) + '\n';
        listResults += this.notes[i] + '\n';
        listResults += 'By Author: ' + this.name + '\n' + '\n';
      }
      return listResults;
    }
  }

  // The function that
  getNotes (note_id) {
    var getResult = "";
    if (typeof note_id === 'number') {
      var note = this.notes[note_id - 1];
      if (note) {
        getResult += note;
        return getResult;
      }
      else {
        getResult += 'Note not found';
        return getResult;
      }
    }
    return "You did not enter a number";
  }

  search (search_text) {
    console.log('Showing results for search: ' + search_text + '\n');
    var searchResult = "";
    var searchCount = 0;
    var author = this.name;
    if (search_text === "" || search_text === " ") {
    	return "You did not enter a search text";
    } else {
      for (var i = 0; i < this.notes.length; i++) {
   	    if (this.notes[i].indexOf(search_text) !== -1) {
          searchResult += 'Note ID ' + (i + 1) + '\n';
          searchResult += this.notes[i] + '\n';
          searchResult += author + '\n' + '\n';
          searchCount += 1;
        }
      }
      if (searchCount > 0) {
    	return searchResult;
      } else {
    	return 'Could not find your search text';
      }
    }
  }

  delete (note_id) {
    var deleted = "";
    if (this.notes.length < note_id - 1) {
      deleted += 'Could not find the file to delete';
      return deleted;
    } else {
      deleted += this.notes.splice([note_id - 1 ],1);
      var removed = this.notes[deleted];
      return 'you have deleted ' + '\"'+ deleted + '\"' + ' from the list';
    }
  }

  edit (note_id, new_content) {
    var editResult = "";
    if (this.notes.length < note_id - 1) {
      editResult += 'Could not find the file to edit';
      return editResult;
    } else {
      this.notes[note_id - 1] = new_content;
      editResult += this.notes[note_id - 1];
      return editResult;
    }
  }
}
