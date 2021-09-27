let taskList = []
 
//<li class="collection-item" id="custom-list-item" title="Hello"> Custom List Item </li>
getFromLocalStorage('taskList')

if (taskList.length > 0) {
  taskList.forEach((i) => appendTask(i))
}

function appendTask(task) {
  let li = document.createElement('li');
	li.className = "collection-item";
	li.title = "Hello";
	li.id = "custom-list-item";
  
  li.textContent = task;
	let listOFaTag = document.getElementsByClassName('delete-item')
	let a = document.createElement('a');
	a.className = 'delete-item secondary-content';
	a.href = '#';
	let i = document.createElement('i')
	i.className = 'fa fa-remove';
	i.id = `item-${listOFaTag.length}`
  //console.log(listOFaTag.length)
	i.addEventListener('click', removeItem)

	a.appendChild(i)

	//console.log(listOFaTag[0].children[0].className)
	li.appendChild(a);

	let ul = document.querySelector('ul.collection');
	ul.appendChild(li);
}

function liCreator(e) {

	// prevents from getting submitted
	e.preventDefault();
  
	let inputText = document.querySelector('#task');

	let li = document.createElement('li');
	li.className = "collection-item";
	li.title = "Hello";
	li.id = "custom-list-item";
  
  inputText.value = inputText.value.length < 1 ? 'New Task' : inputText.value;
  
	li.textContent = inputText.value;
	let listOFaTag = document.getElementsByClassName('delete-item')
	let a = document.createElement('a');
	a.className = 'delete-item secondary-content';
	a.href = '#';
	let i = document.createElement('i')
	i.className = 'fa fa-remove';
	i.id = `item-${listOFaTag.length}`
  //console.log(listOFaTag.length)
	i.addEventListener('click', removeItem)

	a.appendChild(i)

	//console.log(listOFaTag[0].children[0].className)
	li.appendChild(a);

	let ul = document.querySelector('ul.collection');
	ul.appendChild(li);
  saveToLocalStorage(i.id)
  alert(`Task "${inputText.value}" added successfully`)
	inputText.value = ''
}
  
document.querySelector('.btn').addEventListener('click', liCreator);
  
function removeItem(e) {
  e.preventDefault() //console.log(document.querySelector('ul.collection').children[0])
 let li = e.target.parentElement.parentElement;
 li.remove(e.target.parentElement.id);
  removeFromLocalStorage(li.textContent);
  alert('Task deleted successfully');
  
}
  
function removeFromLocalStorage(taskToBeRemoved) {
  //taskList.remove(taskToBeRemoved)
  let index = taskList.indexOf(taskToBeRemoved)
  console.log(index)
  if (index !== -1) {
  	taskList.splice(index, 1);
  	console.log(taskList) //.forEach((i) => i));
  	localStorage.setItem('taskList', JSON.stringify(taskList))
  }
}

let listOfaTag = document.getElementsByClassName('delete-item')
for(i = 0; i < listOfaTag.length; i++) {
  listOfaTag[i].addEventListener('click', removeItem)
  listOfaTag[i].id = `item-${i}`
}
  
let clearButton = document.querySelector('a.clear-tasks')

//console.log(clearButton)

clearButton.addEventListener('click', clearTasks)

function clearTasks(e){
  
  e.preventDefault();
  
  let ulChildren = document.querySelector('ul.collection');
  while(ulChildren.firstChild) {
    ulChildren.removeChild(ulChildren.firstChild)
  }
  taskList.splice(0, taskList.length)
  localStorage.setItem('taskList', JSON.stringify(taskList))
  alert('All tasks deleted successfully')
}

function saveToLocalStorage(id){
  let task = document.getElementById(id).parentElement.parentElement.textContent;
  //console.log(task);
  taskList.push(task); 
  localStorage.setItem('taskList', JSON.stringify(taskList));
}

function getFromLocalStorage(key){
  taskList = JSON.parse(localStorage.getItem(key))
  taskList = taskList === null ? [] : taskList
}