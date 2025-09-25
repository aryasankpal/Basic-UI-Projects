const addBtn = document.getElementById('addBtn');
const noteInput = document.getElementById('noteInput');
const notesList = document.getElementById('notesList');
const deleteBtn = document.getElementById('deleteBtn');

let notes = JSON.parse(localStorage.getItem('notes')) || [];
let selectedIndex = null;

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

// Delete selected note
deleteBtn.addEventListener('click', () => {
  if (selectedIndex !== null) {
    notes.splice(selectedIndex, 1); // remove selected note
    localStorage.setItem('notes', JSON.stringify(notes));
    selectedIndex = null;
    renderNotes();
  } else {
    alert("Please select a note to delete!");
  }
});

// Render notes
function renderNotes() {
  notesList.innerHTML = '';
  notes.forEach((note, index) => {
    const li = document.createElement('li');
    li.textContent = note;

    // Highlight if selected
    if (index === selectedIndex) {
      li.classList.add('selected');
    }

    // On click, mark as selected
    li.addEventListener('click', () => {
      selectedIndex = index;
      renderNotes();
    });

    notesList.appendChild(li);
  });
}
