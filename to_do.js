var input = document.querySelector("input[type= 'text'");
var unorderedList = document.querySelector("ul");
var unorderedListItems = document.querySelectorAll("li");
var unorderedListItemSpans = document.querySelectorAll("li");
var addBtn = document.getElementById("add-button");
var deleteAllBtn = document.getElementById("deleteall-button");


// [ Define Actions ]

/**
 * Add Todo
 * Add todo to todo list
 * 
 * Note: () => unorderedList.removeChild(li)) is an arrow function;
 */
function addTodo() {
	var value = input.value;
	var li = document.createElement('li');
	var textSpan = document.createElement('span');
	var removeItemButton = document.createElement('button');


	textSpan.textContent = value;
	removeItemButton.textContent = "X";
	removeItemButton.addEventListener("click", () => unorderedList.removeChild(li));

	input.value = "";
	li.appendChild(textSpan);
	li.appendChild(removeItemButton);
	unorderedList.appendChild(li);
}

/**
 * Clear Todo List
 * Clear the todo list(ul)
 */
function clearTodoList() {
	var child = unorderedList.lastElementChild;
	while (child) {
		unorderedList.removeChild(child);
		child = unorderedList.lastElementChild;
	}
}

// Hepsini sil'e basıldığında yapılacaklar listesini temizlemek için.
function deleteToDo() {
	for (let span of document.getElementsByTagName("span")) {
		span.addEventListener("click", function () {
			span.parentElement.remove();
			event.stopPropagation();
		});
	}
}


// [ Bind Actions ]
addBtn.addEventListener("click", addTodo);
deleteAllBtn.addEventListener("click", clearTodoList);


// [ Clear Actions ]
// in this section we should clear listeners on document close. But no matter right now.