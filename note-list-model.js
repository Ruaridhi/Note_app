(function(exports) {
  function NoteList() {
    this.listArray = [];
  };

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.add = function(text = Note().createNote()) {
  return this.listArray.push(text);
}
