function addTodo() {
  let task = document.getElementById('newTask').value;
  let text = document.createTextNode(task);
  let newItem = document.createElement('li');
  newItem.appendChild(text);
  document.getElementById('newTask').value = '';
  document.getElementById('todoList').appendChild(newItem);
    newItem.onclick = removeItems; 
}

document.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    addTodo();
  }
});

function removeItems(e) {
e.target.parentElement.removeChild(e.target);

}