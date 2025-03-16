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
var data;
var count =0;
var arr = [];
var  a =0;

let completeFlag = false;
   
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
        // appendLog(`${exp} pushed to stack`);
    }
    
    function removefromstack() {
        const elem = peekfromstack();
        stack.remove();
        // appendLog(`${elem} popped from stack`);
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
        if(count > (array.length+1)) {
            answerBox.textContent = "OPERATION SUCCESSFUL";
            appendLog(`Final postfix string: ${arr.reverse().join("")}`);
            return;
        }
        if(count == array.length+1){
            while(!isEmptystack()){
                 answerBox.innerHTML="OPERATION SUCCESSFUL";
                 printalpha(peekfromstack());
                 opratorStack.removeChild(opratorStack.lastElementChild);
                 removefromstack();
                 completeFlag=true;
             }
             final2();
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
                    var op1 = peekfromstack();
                    // printalpha(peekfromstack());
                    removefromstack();
                    removestackelement()
                    var op2 = peekfromstack();
                    // printalpha(peekfromstack());
                    removefromstack();
                    removestackelement()
                    var joint = op1 + op2 + exp;
                    addtostack(joint);
                    addstackanimation(joint);
                    break;
                default:
                    addtostack(exp + "");
                    addstackanimation(exp);
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
    appendLog(`${exp} added to output string`);
}
// function for print alphabets to answer box
function addstackanimation(exp) {
    const oprand = document.createElement("div");
    oprand.classList.add("oprator-box");
    oprand.textContent = exp;
    opratorStack.appendChild(oprand);
    appendLog(`${exp} pushed to stack`);
}

function removestackelement() {
    const elem = opratorStack.lastElementChild.textContent;
    opratorStack.removeChild(opratorStack.lastElementChild);
    appendLog(`${elem} popped from stack`);
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

function appendLog(message) {
    const logEntry = document.createElement('div');
    logEntry.classList.add('log-entry');
    logEntry.innerHTML = `
        <span class="log-message">${message}</span>
    `;
    sms1.appendChild(logEntry);
    // Auto-scroll to bottom
    sms1.scrollTop = sms1.scrollHeight;
}

function final2() {
    finalAns.textContent = arr.reverse().join("");
    appendLog(`Final result displayed: ${finalAns.textContent}`);
}

// reset all 
resetall.addEventListener("click",clearAll);

function clearAll()
{
    location.reload();
}




