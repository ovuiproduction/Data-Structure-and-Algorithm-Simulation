
stack =[ 'X10h' ,'F20h', 'A224' ,'490h' ,'X780','930X','F456','0F87','0A54','0E64','09C5'];
const push = document.getElementById("add-node");
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const addinput = document.getElementById("addressinput");
const pop = document.getElementById("del-node");
const box = document.getElementById("bucket1");
const pointer = document.getElementById("pointer");
const stop1 = document.getElementById("stop");
const alert = document.getElementById("msg");
var count =0;
var element = document.createElement("div");
push.addEventListener("click" , insert);
function insert()
{
	if (input.value == "") {
		alert.innerHTML = "Please Enter a value.";
		alert.classList.add("error-massage");
		setTimeout(() => {
			alert.classList.remove("error-massage");
			alert.innerHTML="";
		}, 1200);
		return;
	}

	if(count==0){
		const data = input.value;
		const link = input2.value;
		const head = document.createElement("div");
		head.classList.add("pointer1");
		const element1 = document.createElement("div");
		element1.classList.add("data");
		// const element = document.createElement("div");
		element.classList.add("link");
		const element3 = document.createElement("div");
		element3.classList.add("arrow-1");
    		element1.innerHTML = data;
		element.innerHTML ="null";
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>head</div>`;
		input.value="";
		input2.value="";
		box.appendChild(element1);
		box.appendChild(element);
		pointer.appendChild(head);
		count = count+1;
	}
	else{
	if(count == 8){
		const data = input.value;
		const head = document.createElement("div");
		head.classList.add("pointer1");
		const element1 = document.createElement("div");
		element1.classList.add("data");
		const element2 = document.createElement("div");
		element2.classList.add("link");
		const element3 = document.createElement("div");
		element3.classList.add("arrow-1");
    		element1.innerHTML = data;
		element2.innerHTML = `null`;
		// element3.classList.add("arrow-1");
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>
		${stack[count]}</div>`;
		input.value="";
		input2.value="";
		box.appendChild(element3);
		box.appendChild(element1);
		box.appendChild(element2);
		pointer.appendChild(head);
		count=count+1;
		
	}else{
		element.innerHTML = stack[1];
		const data = input.value;
		const head = document.createElement("div");
		head.classList.add("pointer1");
		const element1 = document.createElement("div");
		element1.classList.add("data");
		const element2 = document.createElement("div");
		element2.classList.add("link");
		const element3 = document.createElement("div");
		element3.classList.add("arrow-1");
    		element1.innerHTML = data;
		element2.innerHTML = stack[count+1];
		element3.classList.add("arrow-1");
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>${stack[count]}</div>`;
		input.value="";
		input2.value="";
		box.appendChild(element3);
		box.appendChild(element1);
		box.appendChild(element2);
		pointer.appendChild(head);
		count=count+1;
	}
	}
}
pop.addEventListener("click",del);
function del()
{	
	if (count == 0) {
		alert.innerHTML = "Linked list is Empty";
		alert.classList.add("error-massage");
		setTimeout(() => {
			alert.classList.remove("error-massage");
			alert.innerHTML="";
		}, 1200);
		return;
	}

	count=count-1;
	if(count == 0){
		pointer.removeChild(pointer.lastElementChild);
	}
	box.removeChild(box.lastElementChild);
	box.removeChild(box.lastElementChild);
	box.removeChild(box.lastElementChild);
	pointer.removeChild(pointer.lastElementChild);
}
stop1.addEventListener("click",stop3);
function stop3()
{
	box.lastElementChild.innerHTML = `null`;
}




// <script>
// stack =[ 'X10h' ,'F20h', 'A224' ,'490h' ,'X780','930X','F456','0F87','0A54','0E64','09C5'];
// const push = document.getElementById("add-node");
// const input = document.getElementById("input");
// const input2 = document.getElementById("input2");
// const addinput = document.getElementById("addressinput");
// const pop = document.getElementById("del-node");
// const box = document.getElementById("bucket1");
// const pointer = document.getElementById("pointer");
// const stop1 = document.getElementById("stop");
// const alert = document.getElementById("msg");
// var count =0;
// var element = document.createElement("div");
// push.addEventListener("click" , insert);
// function insert()
// {
// 	if (input.value == "") {
// 		alert.innerHTML = "Please Enter a value.";
// 		alert.classList.add("error-massage");
// 		setTimeout(() => {
// 			alert.classList.remove("error-massage");
// 			alert.innerHTML="";
// 		}, 1200);
// 		return;
// 	}

// 	if(count==0){
// 		const data = input.value;
// 		const link = input2.value;
// 		const head = document.createElement("div");
// 		head.classList.add("pointer1");
// 		const element1 = document.createElement("div");
// 		element1.classList.add("data");
// 		// const element = document.createElement("div");
// 		element.classList.add("link");
// 		const element3 = document.createElement("div");
// 		element3.classList.add("arrow-1");
//     	element1.innerHTML = data;
// 		element.innerHTML ="null";
// 		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>head</div>`;
// 		input.value="";
// 		input2.value="";
// 		box.appendChild(element1);
// 		box.appendChild(element);
// 		pointer.appendChild(head);
// 		count = count+1;
// 	}
// 	else{
	
// 	if(count == 8){
// 		const data = input.value;
// 		const head = document.createElement("div");
// 		head.classList.add("pointer1");
// 		const element1 = document.createElement("div");
// 		element1.classList.add("data");
// 		const element2 = document.createElement("div");
// 		element2.classList.add("link");
// 		const element3 = document.createElement("div");
// 		element3.classList.add("arrow-1");
//     	element1.innerHTML = data;
// 		element2.innerHTML = `null`;
// 		// element3.classList.add("arrow-1");
// 		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>
// 		${stack[count]}</div>`;
// 		input.value="";
// 		input2.value="";
// 		box.appendChild(element3);
// 		box.appendChild(element1);
// 		box.appendChild(element2);
// 		pointer.appendChild(head);
// 		count=count+1;
		
// 	}else{
// 		element.innerHTML = stack[count];
// 		const data = input.value;
// 		const head = document.createElement("div");
// 		head.classList.add("pointer1");
// 		const element1 = document.createElement("div");
// 		element1.classList.add("data");
// 		const element2 = document.createElement("div");
// 		element2.classList.add("link");
// 		const element3 = document.createElement("div");
// 		element3.classList.add("arrow-1");
//     	element1.innerHTML = data;
// 		element2.innerHTML = stack[count+1];
// 		element3.classList.add("arrow-1");
// 		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>${stack[count]}</div>`;
// 		input.value="";
// 		input2.value="";
// 		box.appendChild(element3);
// 		box.appendChild(element1);
// 		box.appendChild(element2);
// 		pointer.appendChild(head);
// 		count=count+1;
// 	}
// 	}
// }
// pop.addEventListener("click",del);
// function del()
// {	
// 	if (count == 0) {
// 		alert.innerHTML = "Linked list is Empty";
// 		alert.classList.add("error-massage");
// 		setTimeout(() => {
// 			alert.classList.remove("error-massage");
// 			alert.innerHTML="";
// 		}, 1200);
// 		return;
// 	}

// 	count=count-1;
// 	if(count == 0){
// 		pointer.removeChild(pointer.lastElementChild);
// 	}
// 	box.removeChild(box.lastElementChild);
// 	box.removeChild(box.lastElementChild);
// 	box.removeChild(box.lastElementChild);
// 	pointer.removeChild(pointer.lastElementChild);
// }
// stop1.addEventListener("click",stop3);
// function stop3()
// {
// 	box.lastElementChild.innerHTML = `null`;
// }
// </script> 
