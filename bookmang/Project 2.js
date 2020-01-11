console.log('online');
let bookName = document.getElementById('bookName');
let authorName = document.getElementById('authorName');
let addBtn = document.getElementById('addNote');
let searchBox = document.getElementById('searchBox');
let radioBtn = document.getElementsByName('r1');
let list = document.getElementById('list');
let cancelAlert = document.getElementById('alert');
let radioBtnValue = '';

showBooks();
addBtn.addEventListener('click', addBook);
searchBox.addEventListener('input', search);

function addBook() {
    console.log('inside addBook');
    if ((bookName.value != '') && (authorName.value != '')) {
        let Objdata = localStorage.getItem('books');
        if (Objdata != null) {
            Objdata = JSON.parse(Objdata);
        }
        else {
            Objdata = [];
        }
        radioBtn.forEach(function (element) {
            if (element.checked) {
                radioBtnValue = element.value;
                console.log(radioBtnValue);
            }
        })
        let Obj = { 'Name': bookName.value, 'Author': authorName.value, 'Type': radioBtnValue };
        Objdata.push(Obj);
        localStorage.setItem('books', JSON.stringify(Objdata));
        showBooks();
        bookName.value = '';
        authorName.value = '';
        radioBtn.forEach((element) => { element.checked = false; });
        display('success', 'Your book has been successfully added');
    }
    else {
        display('danger', 'Please complete the form.')
    }
}
function showBooks() {
    console.log('inside showBook');
    let html = ``;
    let Objdata = localStorage.getItem('books');
    if (Objdata != null) {
        Objdata = JSON.parse(Objdata);
        //here if you will write index,Obj then it will not work.
        Objdata.forEach(function (Obj, index) {
            
            html += ` <li>
            <table>
                <tr class="bookRow"> 
                    <td width=10% class="directory"></td>
                    <td width=25% class="directory bookList">${Obj.Name}</td>
                    <td width=30% class="directory bookList">${Obj.Author}</td>
                    <td width=30% class="directory bookList">${Obj.Type}</td>
                    <td width=10% class="directory"><button id="${index}" onclick="deleteBook(${this.id})">Delete</button></td>
                </tr>
            </table>
        </li>`
        });
        list.innerHTML = html;

    }
    else {
        list.innerHTML = "Nothing to show";
    }
}

function display(type, displayMessage) {
    console.log('displaying alert...........')
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert-${type}">
                            <strong>Messge:</strong> ${displayMessage}
                            <button type="button" class="alert" id="alert" onclick="clean()">X</button>
                        </div>`;
    setTimeout(clean, 4000);
}
function clean() {
    console.log('clearing..........');
    document.getElementById('message').innerHTML = '';
}
function deleteBook(index) {

    let books = localStorage.getItem('books')
    if (books == null) { booksObj = []; }
    else { booksObj = JSON.parse(books); }
    booksObj.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(booksObj));
    display('success', 'Your book has been successfully deleted');
    showBooks();
}
function search() {
    let bookRow = document.getElementsByClassName('bookRow');

    let searchVal = searchBox.value;
    Array.from(bookRow).forEach(function (element) {
        let bookList = element.getElementsByClassName('bookList');
        let cardtxt = '';
        Array.from(bookList).forEach((ele) => {
            cardtxt += `${ele.innerText}`;
        })

        if (cardtxt.includes(searchVal)) {
            // element.style.display = "table";
            element.style = "text-align:center";
        }
        else {
            element.style.display = "none";
        }
    })

}

