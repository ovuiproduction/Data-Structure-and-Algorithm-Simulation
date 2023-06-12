stack =[ 'X10h' ,'F20h', 'A224' ,'490h' ,'X780','930X','F456','0F87','0A54','0E64','09C5'];
const push = document.getElementById("add-node");
const input = document.getElementById("input");
const input2 = document.getElementById("input2");
const addinput = document.getElementById("addressinput");
const pop = document.getElementById("del-node");
const box = document.getElementById("bucket1");
const pointer = document.getElementById("pointer");
const stop1 = document.getElementById("stop");
const alert1 = document.getElementById("msg");
var address =100;
var count =0;
var base =100;
var arr=[];
var c =0;
var k =0;
var element = document.createElement("div");
push.addEventListener("click" , insert);
function insert()
{
	if (input.value == "") {
		alert1.innerHTML = "Please Enter a value.";
		alert1.classList.add("error-massage");
		setTimeout(() => {
			alert1.classList.remove("error-massage");
			alert1.innerHTML="";
		}, 1200);
		return;
	}

	if(count==0){
		const data = input.value;
		const head = document.createElement("div");
		head.classList.add("pointer1");
		const element1 = document.createElement("div");
		element1.classList.add("data");
    	element1.innerHTML = data;
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>front</div>`;
		input.value="";
		input2.value="";
		box.appendChild(element1);
		pointer.appendChild(head);
        base = base + 4;
        count = count + 1;
		alert1.innerHTML="";
		const alertmsg = document.createElement("div");
		arr[c] = data;
		c=c+1;
		
	alertmsg.classList.add("msg");
	alertmsg.innerHTML = data + " is enqueue";
	alert1.appendChild(alertmsg);
	}
    else if(count==1){
		const data = input.value;
		const head = document.createElement("div");
		head.classList.add("pointer1");
		const element1 = document.createElement("div");
		element1.classList.add("data");
    	element1.innerHTML = data;
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>rare</div>`;
		input.value="";
		input2.value="";
		box.appendChild(element1);
        // alert1.innerHTML = data + " is enqueue in queue";
		//box.appendChild(element);
		pointer.appendChild(head);
		count = count + 1;
		const alertmsg = document.createElement("div");
		alert1.innerHTML="";
	alertmsg.classList.add("msg");
	alertmsg.innerHTML = data  + " is enqueue";
	alert1.appendChild(alertmsg);
	arr[c] = data;
	c=c+1;
	}
	// else if(count == 8){
	// 	const data = input.value;
	// 	const head = document.createElement("div");
	// 	head.classList.add("pointer1");
	// 	const element1 = document.createElement("div");
	// 	element1.classList.add("data");
	// 	const element2 = document.createElement("div");
	// 	element2.classList.add("link");
	// 	const element3 = document.createElement("div");
	// 	element3.classList.add("arrow-1");
    // 	element1.innerHTML = data;
	// 	element2.innerHTML = `null`;
	// 	// element3.classList.add("arrow-1");
	// 	head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>
	// 	rare</div>`;
	// 	input.value="";
	// 	input2.value="";
	// 	//box.appendChild(element3);
	// 	box.appendChild(element1);
	// 	//box.appendChild(element2);
	// 	pointer.appendChild(head);
    //     address = address+4;
	// 	count=count+1;
		
	// }
    else{
        pointer.lastElementChild.innerHTML = `<div class='arrow-2'></div><div id='head' class='head'>${base}
		</div>`
		// element.innerHTML = stack[count];
		const data = input.value;
		const head = document.createElement("div");
		head.classList.add("pointer1");
		const element1 = document.createElement("div");
		element1.classList.add("data");
		// const element2 = document.createElement("div");
		// element2.classList.add("link");
		// const element3 = document.createElement("div");
		// element3.classList.add("arrow-1");
    	element1.innerHTML = data;
		// element2.innerHTML = stack[count+1];
		// element3.classList.add("arrow-1");
		head.innerHTML =`<div class='arrow-2'></div><div id='head' class='head'>rare</div>`;
		input.value="";
		input2.value="";
		//box.appendChild(element3);
		box.appendChild(element1);
        // alert1.innerHTML = data + " is enqueue in queue";
		//box.appendChild(element2);
		pointer.appendChild(head);
        base = base + 4;
		count= count + 1;
		const alertmsg = document.createElement("div");
		alert1.innerHTML="";
	alertmsg.classList.add("msg");
	alertmsg.innerHTML = data + " is enqueue";
	alert1.appendChild(alertmsg);
	arr[c] = data;
	c=c+1;
	}
}

pop.addEventListener("click",del);
function del()
{	
	if (count == 0) {
		alert1.innerHTML = "Linked list is Empty";
		alert1.classList.add("error-massage");
		setTimeout(() => {
			alert1.classList.remove("error-massage");
			alert1.innerHTML="";
		}, 1200);
		return;
	}

	count=count-1;
	if(count == 0){
		pointer.removeChild(pointer.lastElementChild);
	}
	
    // alert1.innerHTML = `${box.firstElementChild} + is poped from queue`;
	alert1.innerHTML="";
	const alertmsg = document.createElement("div");
	alertmsg.classList.add("msg");
	alertmsg.innerHTML = arr[k] + " is Dequeue From Queue";
	k=k+1;
	alert1.appendChild(alertmsg);
	box.removeChild(box.firstElementChild);
	
    pointer.removeChild(pointer.firstElementChild);
    pointer.firstElementChild.innerHTML = `<div class='arrow-2'></div><div id='head' class='head'>front</div>`
}
stop1.addEventListener("click",stop3);
function stop3()
{
	box.lastElementChild.innerHTML = `null`;
}