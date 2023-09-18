const btnEl = document.getElementById("btn");
const appEl = document.getElementById("app");


getNote().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
})
function createNoteEl(id, content){
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note";
    element.value = content;

    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to delete this node ?");
        if(warning){
            deleteNode(id, element);
        }
    });

    element.addEventListener("input", () => {
        updateNode(id, element.value);
    })

    return element;
}
function addNote(){
    const notes = getNote();
    const noteObj = {
        id: Math.floor(Math.random()* 100000),
        content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
    notes.push(noteObj);
    saveNote(notes);
}

function deleteNode(id, element) {
    const notes = getNote().filter((note)=> note.id != id)
    saveNote(notes);
    appEl.removeChild(element);
}

function updateNode(id, content) {
    const notes = getNote();
    const target = notes.filter((note)=>note.id == id);
    target[0].content = content;
    saveNote(notes);
}

function saveNote(notes) {
    localStorage.setItem("note-app", JSON.stringify(notes));
}

function getNote(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}
btnEl.addEventListener("click", addNote);