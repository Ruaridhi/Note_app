let note = new Note();

expect(note.showText()).toBe('text');
expect(typeof note.showText()).toBe('string');

note.createNote('createdText')
expect(note.text).toBe('createdText');
