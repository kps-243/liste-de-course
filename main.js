"use strict";
let listeCourse = [];
function addItem(item) {
    listeCourse.push(item);
    displayList();
}
function displayList() {
    const listeElement = document.querySelector('.list');
    listeElement.innerHTML = ''

    listeCourse.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        listeElement.appendChild(li);
    });

    const total = document.querySelector('h2');
    total.textContent = `Liste de course (${listeCourse.length} ${listeCourse.length > 1 ? 'items' : 'item'})`;
}
function clearList() {
    listeCourse = [];
    displayList();
}
function deleteItem() {
    const itemToDelete = document.getElementById('toDelete').value.trim();

    const index = listeCourse.indexOf(itemToDelete);
    if (index !== -1) {
        listeCourse.splice(index, 1)
        displayList();
    } else {
        alert("Cet élément n'est pas dans la liste.");
    }

    togglePopup();
}
function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('hide');
}
document.getElementById('submit').addEventListener('click', function() {
    const itemToAdd = document.getElementById('toAdd').value.trim();
    if (itemToAdd !== '') {
        addItem(itemToAdd);
    }
});
document.getElementById('delete').addEventListener('click', clearList);
document.getElementById('deleteOne').addEventListener('click', togglePopup);
document.getElementById('btnDelete').addEventListener('click', deleteItem);
document.querySelector('#popup span').addEventListener('click', togglePopup);
document.addEventListener('DOMContentLoaded', displayList);
