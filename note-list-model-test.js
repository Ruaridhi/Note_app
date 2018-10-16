var notelist = new NoteList();
var note1 = new Note();
// console.log(note1.text)
notelist.add(note1.text)
expect(notelist.listArray[0]).toBe("text")
// noteListItem = notelist.add("note1: xyz")
// expect(notelist.listArray[0]).toBe("note1: xyz")
