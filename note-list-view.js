(function(exports) {
  function NoteListView(notelist = new NoteList()) {
    this.allNoteArr = notelist.displayNoteList() ;

  };

  exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.viewHtml = function(){
  // var eachNote = for(i = 0; i < this.allNoteArr.length; i++){
  //   this.allNoteArr[i];
  //   }
  // return eachNote;
  return this.allNoteArr[0]
}
