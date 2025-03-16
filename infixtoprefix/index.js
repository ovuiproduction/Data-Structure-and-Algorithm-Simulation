const input = document.getElementById("input-text");
const infix = document.getElementById("infix-exp");
const submitButton= document.getElementById("go-btn");
const answerBox = document.getElementById("answer-field");
const stackAns = document.getElementById("answer-stack");
const opratorStack = document.getElementById("oprator-stack");
const ansFlat = document.getElementById("ans-flat");
const finalAns = document.getElementById("final-ans-block");
const nextButton = document.getElementById("next-button");
const resetall = document.getElementById("reset");
const sms = document.getElementById("alert-js");
const sms1 = document.getElementById("alert-js1");
let completeFlag = false;

let operationLogs = [];

var data;
var count =0;
var arr = [];
var  a =0;
    // stack for infix to prefix

    class Stack {
        constructor() {
            this.items = [];
        }
        
        // add element to the stack
        add(element) {
            this.items.push(element);
        }
        
        // remove element from the stack
        remove() {
            if(this.items.length > 0) {
                this.items.pop();
            }
        }
        
        // view the last element
        peek() {
            return this.items[this.items.length - 1];
        }
        
        // check if the stack is empty
        isEmpty(){
           return  this.items.length == 0;
        }
       
        // the size of the stack
        size(){
            return this.items.length;
        }
     
        // empty the stack
        clear(){
            this.items = [];
        }
    }
    let stack = new Stack();

    function addtostack(exp) {
        stack.add(exp);
        logOperation(`${exp} pushed to stack`);
        // updateStackVisual(exp, 'push');
    }
    
    function removefromstack() {
        const popped = peekfromstack();
        stack.remove();
        logOperation(`${popped} popped from stack`);
        // updateStackVisual(popped, 'pop');
    }
    
    function peekfromstack(){
       return stack.peek();
    }
    function isEmptystack(){
        return stack.isEmpty()
    }
    function clearstack(){
        stack.clear();
    }
   
submitButton.addEventListener("click" , driver);

function driver(){
    var oprator =0;
    var oprand =0;
    var oppara =0;
    var closepara =0;
    var opbracket =0;
    var closebracket =0;
    var opkarli =0;
    var closekarli = 0;
    const text = input.value;
    data = text;
    const array = data.split("");
    for(var i =(array.length-1);i>=0;i--){
        var exp = array[i];
        switch(exp){
            case '+':
            case '-':
            case '*':
            case '/':
            case '^':
                oprator=oprator+1;
                break;
            case '(':
                oppara = oppara + 1;
                break;
            case ')':
                closepara = closepara +1;
                break;
            case '[':
                opbracket = opbracket +1;
                break;
            case ']':
                closebracket = closebracket +1;
                break;
            case '{':
                opkarli = opkarli +1;
                break;
            case '}':
                closekarli = closekarli + 1;
            default :
                oprand= oprand+1;
                break;
        }
    }
    input.value = "";
    if((oprand - oprator == 1) && (oppara == closepara) && (opbracket == closebracket) && (opkarli == closekarli) ){
        let arrayarr = text.split("");
        var reversearr = [...arrayarr].reverse();
        for(let i  =0;i<reversearr.length;i++){
            var exp2 = reversearr[i];
            switch(exp2){
                case '(':
                    reversearr[i] = ')';
                    break;
                case ')':
                    reversearr[i] ='(';
                    break;
                case '[':
                    reversearr[i] = ']';
                    break;
                case ']':
                    reversearr[i] = '[';
                    break;
                case '{':
                    reversearr[i] = '}';
                    break;
                case '}':
                    reversearr[i] = '{';
                    break;
            }
        }
        var text2 = reversearr.join("");
        infix.innerHTML = text2;
        start();
    }
    else{
        sms.innerHTML ="";
        const massage = document.createElement("div");
        massage.classList.add("alert-box");
        massage.innerHTML = "Enter Valid expression";
        sms.appendChild(massage);
        setTimeout(() => {
			sms.removeChild(sms.lastElementChild);
		}, 1400);
		return;
    }
}
function start()
{
    nextButton.addEventListener("click" ,()=>{
        if(!completeFlag) next();
    });
    var i = 0;
    function next(){
        count = count + 1;
        answerBox.innerHTML="";
        let array = data.split("");
        var reverse = [...array].reverse();
        for(let i  =0;i<reverse.length;i++){
            var exp1 = reverse[i];
            switch(exp1){
                case '(':
                    reverse[i] = ')';
                    break;
                case ')':
                    reverse[i] ='(';
                    break;
                case '[':
                    reverse[i] = ']';
                    break;
                case ']':
                    reverse[i] = '[';
                    break;
                case '{':
                    reverse[i] = '}';
                    break;
                case '}':
                    reverse[i] = '{';
                    break;
            }
        }
        if(count > (array.length+1)){
            answerBox.innerHTML="MISSION SUCCESSFUL";
            final2();
            return;
        }
        if(count == array.length+1){
            while(!isEmptystack()){
                let popped_element = peekfromstack();
                opratorStack.removeChild(opratorStack.lastElementChild);
                removefromstack();
                printalpha(popped_element);
             }
             return;
         }
         else{
            const word = document.createElement("div");
            word.classList.add("ele");
            word.innerHTML = reverse[i];
            answerBox.appendChild(word);
            var exp = reverse[i];
            i = i+1;
            switch(exp){
                case '+':
                case '-':
                case '*':
                case '/':
                case '^':
                    if(isEmptystack()){
                    // push to stack
                    addtostack(exp);
                    //visual of push to stack
                    const stackbox = document.createElement("div");
                    stackbox.classList.add("oprator-box");
                    stackbox.innerHTML = exp;
                    opratorStack.appendChild(stackbox);
                    }else{
                        if(priority(exp) <= priority(peekfromstack())){
                        while(priority(exp) <= priority(peekfromstack())){
                            // stack to answer box
                            let popped_element  = peekfromstack();
                            // remove from stack
                            removefromstack();
                            // remove from stack visual
                            opratorStack.removeChild(opratorStack.lastElementChild);
                            printalpha(popped_element);
                        }
                            // new element is added to stack
                            addtostack(exp);
                            // visual of new element to added to stack
                            const stackbox = document.createElement("div");
                            stackbox.classList.add("oprator-box");
                            stackbox.innerHTML = exp;
                            opratorStack.appendChild(stackbox);
                        
                    }
                        else{
                            // push to stack
                            addtostack(exp);
                            //visual of push to stack
                            const stackbox = document.createElement("div");
                            stackbox.classList.add("oprator-box");
                            stackbox.innerHTML = exp;
                            opratorStack.appendChild(stackbox);
                            }
                        }
                    break;
                case '(':
                    addtostack(exp);
                    const stackbox1 = document.createElement("div");
                    stackbox1.classList.add("oprator-box");
                    stackbox1.innerHTML = exp;
                    opratorStack.appendChild(stackbox1);
                    break;
                case ')':
                    while(peekfromstack()!= '('){
                        //stack to answer box
                        printalpha(peekfromstack());
                        // remove from stack
                        removefromstack();
                        // remove from stack visual
                        opratorStack.removeChild(opratorStack.lastElementChild);
                    }
                    removefromstack();
                    opratorStack.removeChild(opratorStack.lastElementChild);
                    break;
                case '[':
                    addtostack(exp);
                    const stackbox2 = document.createElement("div");
                    stackbox2.classList.add("oprator-box");
                    stackbox2.innerHTML = exp;
                    opratorStack.appendChild(stackbox2);
                    break;
                case ']':
                    while(peekfromstack()!= '['){
                        //stack to answer box
                        printalpha(peekfromstack());
                        // remove from stack
                        removefromstack();
                        // remove from stack visual
                        opratorStack.removeChild(opratorStack.lastElementChild);
                    }
                    removefromstack();
                    opratorStack.removeChild(opratorStack.lastElementChild);
                    break;
                case '{':
                    addtostack(exp);
                    const stackbox3 = document.createElement("div");
                    stackbox3.classList.add("oprator-box");
                    stackbox3.innerHTML = exp;
                    opratorStack.appendChild(stackbox3);
                    break;
                case '}':
                    while(peekfromstack()!= '{'){
                        //stack to answer box
                        printalpha(peekfromstack());
                        // remove from stack
                        removefromstack();
                        // remove from stack visual
                        opratorStack.removeChild(opratorStack.lastElementChild);
                    }
                    removefromstack();
                    opratorStack.removeChild(opratorStack.lastElementChild);
                    break;
                default:
                    // alphabets added to answer box
                    printalpha(exp);
                    break; 
            }
        }
    }   
}
function printalpha(exp) {
    const alphanum = document.createElement("div");
    alphanum.classList.add("alpha");
    alphanum.textContent = exp;
    ansFlat.appendChild(alphanum);
    arr[a] = exp;
    a++;
    logOperation(`${exp} added to output`);
    
    // Add highlight animation
    alphanum.classList.add('highlight');
    setTimeout(() => alphanum.classList.remove('highlight'), 300);
}
// function for priority
function priority(exp){
    switch(exp){
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
            default :
                return 0;
    }   
}

function logOperation(message) {
    const logEntry = document.createElement('div');
    logEntry.classList.add('log-entry');
    logEntry.innerHTML = `
        <span class="log-message">${message}</span>
    `;
    sms1.appendChild(logEntry);
    sms1.scrollTop = sms1.scrollHeight; // Auto-scroll to bottom
}
function updateStackVisual(element, action) {
    if (action === 'push') {
        const stackItem = document.createElement("div");
        stackItem.classList.add("oprator-box");
        stackItem.textContent = element;
        opratorStack.appendChild(stackItem);
        stackItem.scrollIntoView({ behavior: 'smooth' });
    } else {
        if (opratorStack.lastElementChild) {
            opratorStack.lastElementChild.classList.add('removing');
            setTimeout(() => {
                opratorStack.removeChild(opratorStack.lastElementChild);
            }, 300);
        }
    }
}

function final2() {
    finalAns.textContent = arr.reverse().join("");
    logOperation(`Final prefix string: ${finalAns.textContent}`);
    completeFlag = true;
    // Add final animation
    finalAns.classList.add('final-result');
    setTimeout(() => finalAns.classList.remove('final-result'), 1000);
}
// reset all 
resetall.addEventListener("click",clearAll);

function clearAll() {
    location.reload();
}