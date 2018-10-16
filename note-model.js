(function(exports) {
  function Note() {
    this.text = 'text'
  };

  exports.Note = Note;
})(this);

Note.prototype.showText = function() {
  return this.text;
}

Note.prototype.createNote = function(text) {
  return this.text = text;
}
