var samplenote = new Note();
var notelist = new NoteList();
var noteListView = new NoteListView(notelist);

notelist.add(samplenote.createNote('testing note'))
console.log(this.allNoteArr)
console.log(noteListView.viewHtml())
