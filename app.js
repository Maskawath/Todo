const todoInput= document.querySelector('.todo-input');
const todoBtn= document.querySelector('.todo-btn');
const todoList= document.querySelector('.todo-list');
const filterOption= document.querySelector('.filter-todo');

todoBtn.addEventListener('click', addTodo);

todoList.addEventListener('click', deletCheck);
filterOption.addEventListener('click', filterTodo);


function addTodo(){
 console.log("Hello");

 event.preventDefault();

 const todoDiv= document.createElement('div');
 todoDiv.classList.add('todo-div');
 const newTodo= document.createElement('li');
 newTodo.classList.add('todo-li');
 newTodo.innerHTML=todoInput.value;
 todoDiv.appendChild(newTodo);

 //  Check Mark Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML='<i class="fas fa-check"> </i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);

 //  Check Mark Button
  const trashButton = document.createElement('button');
  trashButton.innerHTML='<i class="fas fa-trash"> </i>';
  trashButton.classList.add('trash-btn');
  todoDiv.append(trashButton);

  //    Add to li
   todoList.appendChild(todoDiv);
   todoInput.value="";
 


}

function deletCheck(e){

	const item=e.target;

	if (item.classList[0]==='trash-btn')
	{
		const todo=item.parentElement;
		todo.classList.add('fall');
		todo.addEventListener('transitionend', function(){
            todo.remove();
 
		});
		// 
	}

	if (item.classList[0]==="complete-btn"){
			const todo =item.parentElement;
			console.log(todo);
			todo.classList.toggle('completed');

	}
}

function filterTodo (e){

	console.log("working")
	const todos= todoList.childNodes;
	todos.forEach(function(todo){

   switch(e.target.value)
   {

	case 'all':
		todo.style.display="block";
		break;
	
	case "completed":
		console.log("Com")

	case 'uncompleted':
		if(todo.classList.contains('uncompleted'))
		{
			todo.style.display= 'flex';
		}
		else{
			todo.style.display='none';
		}



      }
     
	 




	});


}