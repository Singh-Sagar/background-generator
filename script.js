// let button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", function(){
// 	console.log("CLICK!!!");
// })

function inputLength(){
	return input.value.length;
}
function addItem(){
	console.log(input.value)
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}


let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul  = document.querySelector("ul");

button.addEventListener("click", function(){
	if(input.value==false){
		return 
	}
	addItem();
})


input.addEventListener("keypress", function(event){

	console.log(event)
	if(event.keyCode==13  && input.inputLength()){
		addItem();
	}












// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// function inputLength() {
// 	return input.value.length;
// }

// function createListElement() {
// 	var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value = "";
// }

// function addListAfterClick() {
// 	if (inputLength() > 0) {
// 		createListElement();
// 	}
// }

// function addListAfterKeypress(event) {
// 	if (inputLength() > 0 && event.keyCode === 13) {
// 		createListElement();
// 	}
// }

// button.addEventListener("click", addListAfterClick);

// input.addEventListener("keypress", addListAfterKeypress);