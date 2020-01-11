console.log('Now you are online');
showNotes();
let addNoteBtn = document.getElementById('addNote');
let addTxt = document.getElementById('addTxt');
let title = document.getElementById('title');
let directory = document.getElementById('directory');
let body = document.querySelector('body');
let searchBox = document.getElementById('searchBox');
addNoteBtn.addEventListener('click', addNotefunc);
searchBox.addEventListener('input', searchfunc);
function addNotefunc() {
    let notes = localStorage.getItem('notes')
    if (notes == null) { notesObj = []; }
    else { notesObj = JSON.parse(notes); }

    let Obj = { 'title': title.value, 'data': addTxt.value };
    notesObj.push(Obj);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    title.value = '';
    showNotes();
}
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) { notesObj = []; }
    else { notesObj = JSON.parse(notes); }
    let html = '';

    notesObj.forEach(function (Obj, index) {
        html += `<div class="child notetable" id="index">
        <h2>${Obj.title}</h2><hr>${Obj.data}<br>
        <button id="${index}" onclick="deleteNote(${this.id})">Delete Note</button>
        </div>`
    })
    let notesElm = document.getElementById('directory');
    if (notesObj.length != 0) {
        notesElm.innerHTML = `${html}`;
    }
    else {
        notesElm.innerHTML = `<h3 style="text-align:center">Nothing to show</h3>`;
    }
}
function deleteNote(index) {

    let notes = localStorage.getItem('notes')
    if (notes == null) { notesObj = []; }
    else { notesObj = JSON.parse(notes); }
    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

function searchfunc() {
    let child = document.getElementsByClassName('child');
    let searchVal = searchBox.value;
    Array.from(child).forEach(function (element) {
        let cardtxt = element.getElementsByTagName('h2')[0].innerText;
        if (cardtxt.includes(searchVal)) {
            element.style.display = "inline-block";
        }
        else {
            console.log(element.innerText);
            console.log(element);
            element.style.display = "none";
        }
        // console.log(element.title);
    })
}
