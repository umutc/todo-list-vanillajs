var input = document.querySelector("input[type= 'text'");
var ul = document.querySelector("ul");
var lists = document.querySelectorAll("li");
var spans = document.getElementByTagName("span");
var addBtn = document.querySelector("#add-button");
var deleteBtn = document.querySelector("#deleteall-button");

// Hepsini sil'e basıldığında yapılacaklar listesini temizlemek için.
function deleteToDo(){
	for(let span of spans){
		span.addEventListener("click", function(){
			span.parentElement.remove();
			event.stopPropagation();
		});
	}
}
