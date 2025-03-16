
stack =[ 'X10h' ,'F20h', 'A224' ,'490h' ,'X780','930X','F456','0F87','0A54','0E64','09C5'];
stack1=[];
const push = document.getElementById("add-node");
const input = document.getElementById("input");
// const input2 = document.getElementById("input2");
const addinput = document.getElementById("addressinput");
const pop = document.getElementById("del-node");
const box = document.getElementById("bucket1");
const pointer = document.getElementById("pointer");
const stop1 = document.getElementById("stop");
const alert = document.getElementById("msg");
var count =-1;
var dt =0;
var i =-1;
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

	if(count==-1){
		count = count+1;
		const data = input.value;
		i = i+1;
		stack1[i] = data;
		dt = data;
		element.classList.add("node_container");
		element.innerHTML =`<div class='pre'>null</div><div class='data'>${data}</div><div class='next'>null</div>`;
		const head = document.createElement("div");
		head.classList.add("pointer");
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>head</div>`;
		input.value="";
		box.appendChild(element);
		pointer.appendChild(head);
	}
	else if(count ==0){
		count=count+1;
		element.innerHTML =`<div class='pre'>null</div><div class='data'>${dt}</div><div class='next'>${stack[count]}</div>`;
		const data = input.value;
		i = i+1;
		stack1[i]=data;
		dt = data;
		const node = document.createElement("div");
		node.classList.add("node_container");
		node.innerHTML =
		`<div class="arrow_block"><div class="arrow-f"></div><div class="arrow-d"></div></div><div class='pre'>${stack[count-1]}</div><div class='data'>${data}</div><div class='next'>null</div>`;
		const head = document.createElement("div");
		head.classList.add("pointer");
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>${stack[count]}</div>`;
		input.value="";
		// input2.value="";
		box.appendChild(node);
		pointer.appendChild(head);
	}
	else{
		count=count+1;
		box.lastElementChild.innerHTML = `<div class="arrow_block"><div class="arrow-f"></div><div class="arrow-d"></div></div><div class='pre'>${stack[count-2]}</div><div class='data'>${dt}</div><div class='next'>${stack[count]}</div>`;
		const data = input.value;
		i = i+1;
		stack1[i]=data;
		dt = data;
		const node = document.createElement("div");
		node.classList.add("node_container");
		node.innerHTML =
		`<div class="arrow_block"><div class="arrow-f"></div><div class="arrow-d"></div></div><div class='pre'>${stack[count-1]}</div><div class='data'>${data}</div><div class='next'>null</div>`;
		const head = document.createElement("div");
		head.classList.add("pointer");
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>${stack[count]}</div>`;
		input.value="";
		// input2.value="";
		box.appendChild(node);
		pointer.appendChild(head);
	}
}
pop.addEventListener("click",del);
function del()
{	
	if (count == -1){
		alert.innerHTML = "Linked list is Empty";
		alert.classList.add("error-massage");
		setTimeout(()=>{
			alert.classList.remove("error-massage");
			alert.innerHTML="";
		}, 1200);
		return;
	}
	if(count == 0){
		box.lastElementChild.innerHTML = `<div class="del-ani"><div class='pre'>null</div><div class='data'>${stack1[0]}</div><div class='next'>null</div></div>`;
		setTimeout(() => {
		box.removeChild(box.lastElementChild);
		pointer.removeChild(pointer.lastElementChild);
		}, 1200);
	}
	else{
	box.lastElementChild.innerHTML = `<div class="del-ani"><div class="arrow_block"><div class="arrow-f"></div><div class="arrow-d"></div></div><div class='pre'>${stack[count-1]}</div><div class='data'>${stack1[i]}</div><div class='next'>null</div></div>`;
	setTimeout(() => {
		box.removeChild(box.lastElementChild);
		pointer.removeChild(pointer.lastElementChild);
		}, 1200);
	}
	i = i -1;
	count = count-1;
}
stop1.addEventListener("click",stop3);
function stop3()
{
	if (count == -1) {
		alert.innerHTML = "Linked List is Empty";
		alert.classList.add("error-massage");
		setTimeout(() => {
			alert.classList.remove("error-massage");
			alert.innerHTML="";
		}, 1200);
		return;
	}
	box.lastElementChild.innerHTML = `<div class="del-ani"><div class="arrow_block"><div class="arrow-f"></div><div class="arrow-d"></div></div><div class='pre'>${stack[count-1]}</div><div class='data'>${stack1[i]}</div><div class='next'>null</div></div>`;
	setTimeout(() => {
		box.lastElementChild.innerHTML = `<div class="arrow_block"><div class="arrow-f"></div><div class="arrow-d"></div></div><div class='pre'>${stack[count-1]}</div><div class='data'>${stack1[i]}</div><div class='next'>null</div>`;
	}, 1200);
}
