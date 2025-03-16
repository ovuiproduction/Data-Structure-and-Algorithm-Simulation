const input = document.getElementById("input-text");
const infix = document.getElementById("infix-exp");
const submitButton = document.getElementById("go-btn");
const answerBox = document.getElementById("answer-field");
const stackAns = document.getElementById("answer-stack");
const opratorStack = document.getElementById("oprator-stack");
const ansFlat = document.getElementById("ans-flat");
const finalAns = document.getElementById("final-ans-block");
const nextButton = document.getElementById("next-button");
const resetall = document.getElementById("reset");
const sms = document.getElementById("alert-js");
const sms2 = document.getElementById("alert-js1");
var data;
var count = 0;
var arr = [];
var datacount = 0;
// stack for infix to prefix


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
    if (this.items.length > 0) {
      this.items.pop();
    }
  }

  // view the last element
  peek() {
    return this.items[this.items.length - 1];
  }

  // check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // the size of the stack
  size() {
    return this.items.length;
  }

  // empty the stack
  clear() {
    this.items = [];
  }
}
let stack = new Stack();

function addtostack(exp) {
  stack.add(exp);
  appendLog(exp + " is added to stack");
}

function removefromstack() {
  const elem = peekfromstack();
  stack.remove();
  appendLog(elem + " is removed from stack");
}

function peekfromstack() {
  return stack.peek();
}
function isEmptystack() {
  return stack.isEmpty();
}
function clearstack() {
  stack.clear();
}

submitButton.addEventListener("click", driver);

// submitButton.addEventListener("click" , driver);

function driver() {
  var oprator = 0;
  var oprand = 0;
  var oppara = 0;
  var closepara = 0;
  var opbracket = 0;
  var closebracket = 0;
  var opkarli = 0;
  var closekarli = 0;
  const text = input.value;
  data = text;
  const array = data.split("");
  for (var i = 0; i < array.length; i++) {
    var exp = array[i];
    switch (exp) {
      case "+":
      case "-":
      case "*":
      case "/":
      case "^":
        oprator = oprator + 1;
        break;
      case "(":
        oppara = oppara + 1;
        break;
      case ")":
        closepara = closepara + 1;
        break;
      case "[":
        opbracket = opbracket + 1;
        break;
      case "]":
        closebracket = closebracket + 1;
        break;
      case "{":
        opkarli = opkarli + 1;
        break;
      case "}":
        closekarli = closekarli + 1;
      default:
        oprand = oprand + 1;
        break;
    }
  }
  input.value = "";
  if (
    oprand - oprator == 1 &&
    oppara == closepara &&
    opbracket == closebracket &&
    opkarli == closekarli
  ) {
    infix.innerHTML = text;
    start();
  } else {
    sms2.innerHTML = "";
    const massage = document.createElement("div");
    massage.classList.add("alert-box");
    massage.innerHTML = "Enter Valid expression";
    sms2.appendChild(massage);
    setTimeout(() => {
      sms2.removeChild(sms2.lastElementChild);
    }, 1400);
    return;
  }
}
function start() {
  nextButton.addEventListener("click", ()=>{
    if(!completeFlag) next();
  });
  var i = 0;
  function next() {
    count = count + 1;
    answerBox.innerHTML = "";
    const array = data.split("");
    if (count > array.length + 1) {
      appendLog("MISSION SUCCESSFUL");
      appendLog("Postfix expression: " + "'" + arr.join("") + "'");
      finalAns.innerHTML = arr.join("");
      completeFlag=true;
      return;
    }
    if (count == array.length + 1) {
      while (!isEmptystack()) {
        appendLog("Processing remaining operators in the stack");
        printalpha(peekfromstack());
        opratorStack.removeChild(opratorStack.lastElementChild);
        removefromstack();
      }
    } else {
      const word = document.createElement("div");
      word.classList.add("ele");
      word.innerHTML = array[i];
      answerBox.appendChild(word);
      var exp = array[i];
      i = i + 1;
      switch (exp) {
        case "+":
        case "-":
        case "*":
        case "/":
        case "^":
          if (isEmptystack()) {
            // push to stack
            addtostack(exp);
            //visual of push to stack
            const stackbox = document.createElement("div");
            stackbox.classList.add("oprator-box");
            stackbox.innerHTML = exp;
            opratorStack.appendChild(stackbox);
          } else {
            if (priority(exp) <= priority(peekfromstack())) {
              while (priority(exp) <= priority(peekfromstack())) {
                // stack to answer box
                printalpha(peekfromstack());
                // remove from stack
                removefromstack();
                // remove from stack visual
                opratorStack.removeChild(opratorStack.lastElementChild);
              }
              // new element is added to stack
              addtostack(exp);
              // visual of new element to added to stack
              const stackbox = document.createElement("div");
              stackbox.classList.add("oprator-box");
              stackbox.innerHTML = exp;
              opratorStack.appendChild(stackbox);
            } else {
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
        case "(":
          addtostack(exp);
          const stackbox1 = document.createElement("div");
          stackbox1.classList.add("oprator-box");
          stackbox1.innerHTML = exp;
          opratorStack.appendChild(stackbox1);
          break;
        case ")":
          while (peekfromstack() != "(") {
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
        case "[":
          addtostack(exp);
          const stackbox2 = document.createElement("div");
          stackbox2.classList.add("oprator-box");
          stackbox2.innerHTML = exp;
          opratorStack.appendChild(stackbox2);
          break;
        case "]":
          while (peekfromstack() != "[") {
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
        case "{":
          addtostack(exp);
          const stackbox3 = document.createElement("div");
          stackbox3.classList.add("oprator-box");
          stackbox3.innerHTML = exp;
          opratorStack.appendChild(stackbox3);
          break;
        case "}":
          while (peekfromstack() != "{") {
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

// function for print alphabets to answer box
function printalpha(exp) {
  const alphanum = document.createElement("div");
  alphanum.classList.add("alpha");
  alphanum.innerHTML = exp;
  arr[datacount] = exp;
  datacount++;
  ansFlat.appendChild(alphanum);
  appendLog(exp + " is added to output String");
}
// function for priority
function priority(exp) {
  switch (exp) {
    case "+":
    case "-":
      return 1;
    case "*":
    case "/":
      return 2;
    case "^":
      return 3;
    default:
      return 0;
  }
}

function appendLog(message) {
  const logEntry = document.createElement("p");
  logEntry.classList.add('log-entry');
  logEntry.innerHTML = `
        <span class="log-message">${message}</span>
    `;
  sms.appendChild(logEntry);
  // Auto-scroll to the latest log
  sms.scrollTop = sms.scrollHeight;
}

// reset all
resetall.addEventListener("click", clearAll);

function clearAll() {
 location.reload();
}
