const addBtn = document.getElementById('addBtn');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');
const deleteBtn = document.getElementById('deleteBtn');

// Load saved notes from localStorage
let notes = JSON.parse(localStorage.getItem('notes')) || [];
renderNotes();

// Add note
addBtn.addEventListener('click', () => {
    const noteText = noteInput.value.trim();
    if (noteText) {
        notes.push(noteText);
        localStorage.setItem('notes', JSON.stringify(notes));
        noteInput.value = '';
        renderNotes();
    }
});

// Delete most recent note (last one)
deleteBtn.addEventListener('click', () => {
    if (notes.length > 0) {
        notes.pop();  // remove last note
        localStorage.setItem('notes', JSON.stringify(notes));
        renderNotes();
    } else {
        alert("No notes to delete!");
    }
});

// Render notes
function renderNotes() {
    notesList.innerHTML = '';
    notes.forEach(note => {
        const li = document.createElement('li');
        li.textContent = note;
        notesList.appendChild(li);
    });
}
