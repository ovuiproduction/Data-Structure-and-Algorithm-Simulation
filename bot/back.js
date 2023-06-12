// define the chatbot responses
const chatbotResponses = [
  "Hi, how can I assist you today?",
  "What can I help you with?",
  "hello , what can i do for you ?"
];
const stack =[
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nostrum quaerat id eos veniam, rerum ratione debitis distinctio, recusandae consequatur similique inventore labore? In quis ipsum quo vel, quibusdam error?"

]
// select the HTML elements
const chatContainer = document.getElementById("chat-containeer");
const userquation = document.getElementById("user-chat");
const botOutput = document.getElementById("chat-output");
const chatInputBox = document.getElementById("chat-input-box");
const chatSendBtn = document.getElementById("chat-send-btn");

// function to append a message to the chat output
function appenduserMessage(message, sender) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("ele");
  messageContainer.classList.add(sender);
  messageContainer.innerHTML =`<img class="img1" src="image/google-user-icon-16.jpg" alt="image">

  <style>
      .img1{
        margin-right:100px;
        margin-left:0px;
        display: flex;
        display: inline-block;
        width: 50px;
        height: 40px;
        width: 50px;
        height: 40px;
        margin-top:0px;
      }
  </style>`+ message;
  chatContainer.appendChild(messageContainer);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}
function appendbotMessage(message,messageQ,sender) {
  const messageContainer = document.createElement("div"); 
  messageContainer.classList.add("ele1");
  messageContainer.classList.add(sender);
  messageContainer.innerHTML = 
  `<div class="bot_output">
  <div class="botthanks">
    <img src="https://miro.medium.com/v2/resize:fit:525/1*lyyXmbeoK5JiIBNCnzzjjg.png" alt="">
    <p>${messageQ}</p>
  </div>
  <div class="botreply">
    ${message}
  </div>
</div>
<style>
  .bot_output{
    width: 850px;
    background-color:rgb(18, 18, 20);
  }
  .botthanks{
    width: 850px;
    height: 50px;
    display: flex;
    background-color: rgb(21, 21, 21);
  }
  .botreply{
    margin-top:10px;
    width: 850px;
    background-color:rgb(18, 18, 20);
  }
  p{
    margin-left: 100px;
    color: aliceblue;
  }
</style>`;
  chatContainer.appendChild(messageContainer);
  chatContainer.appendChild(messageContainer);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function identify(message,messageQ,sender){
  if(sender == "user"){
    appenduserMessage(message);
  }else if(sender == "bot"){
    appendbotMessage(message,messageQ);
  }
  }


// function to send a message to the chatbot
function sendMessageToChatbot() {
  const message = chatInputBox.value.trim();
  if (message != "") {
    identify(message,message,"user");
    chatInputBox.value = "";
    // simulate a response from the chatbot
    if(message == "hii" ||message == "hello" ||message == "hey" ){
        const randomResponseIndex = Math.floor(Math.random() * chatbotResponses.length);
        response = chatbotResponses[randomResponseIndex];
    }
    else if(message == "write code for merge sort"){
      response = `<div class="mergesort">
          <div class="code-container"><div id="highlighter_818751" class="syntaxhighlighter nogutter"><table border="0" cellpadding="0" cellspacing="0"><tbody><tr><td class="code"><div class="container"><div class="line number1 index0 alt2"><code class="comments">// C program for Merge Sort</code></div><div class="line number2 index1 alt1"><code class="preprocessor">#include &lt;stdio.h&gt;</code></div><div class="line number3 index2 alt2"><code class="preprocessor">#include &lt;stdlib.h&gt;</code></div><div class="line number4 index3 alt1">&nbsp;</div><div class="line number5 index4 alt2"><code class="comments">// Merges two subarrays of arr[].</code></div><div class="line number6 index5 alt1"><code class="comments">// First subarray is arr[l..m]</code></div><div class="line number7 index6 alt2"><code class="comments">// Second subarray is arr[m+1..r]</code></div><div class="line number8 index7 alt1"><code class="keyword bold">void</code> <code class="plain">merge(</code><code class="color1 bold">int</code> <code class="plain">arr[], </code><code class="color1 bold">int</code> <code class="plain">l,</code></div><div class="line number9 index8 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">m, </code><code class="color1 bold">int</code> <code class="plain">r)</code></div><div class="line number10 index9 alt1"><code class="plain">{</code></div><div class="line number11 index10 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">i, j, k;</code></div><div class="line number12 index11 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">n1 = m - l + 1;</code></div><div class="line number13 index12 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">n2 = r - m;</code></div><div class="line number14 index13 alt1">&nbsp;</div><div class="line number15 index14 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Create temp arrays</code></div><div class="line number16 index15 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">L[n1], R[n2];</code></div><div class="line number17 index16 alt2">&nbsp;</div><div class="line number18 index17 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Copy data to temp arrays</code></div><div class="line number19 index18 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// L[] and R[]</code></div><div class="line number20 index19 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">for</code> <code class="plain">(i = 0; i &lt; n1; i++)</code></div><div class="line number21 index20 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">L[i] = arr[l + i];</code></div><div class="line number22 index21 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">for</code> <code class="plain">(j = 0; j &lt; n2; j++)</code></div><div class="line number23 index22 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">R[j] = arr[m + 1 + j];</code></div><div class="line number24 index23 alt1">&nbsp;</div><div class="line number25 index24 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Merge the temp arrays back</code></div><div class="line number26 index25 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// into arr[l..r]</code></div><div class="line number27 index26 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Initial index of first subarray</code></div><div class="line number28 index27 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">i = 0;</code></div><div class="line number29 index28 alt2">&nbsp;</div><div class="line number30 index29 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Initial index of second subarray</code></div><div class="line number31 index30 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">j = 0;</code></div><div class="line number32 index31 alt1">&nbsp;</div><div class="line number33 index32 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Initial index of merged subarray</code></div><div class="line number34 index33 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">k = l;</code></div><div class="line number35 index34 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">while</code> <code class="plain">(i &lt; n1 &amp;&amp; j &lt; n2)</code></div><div class="line number36 index35 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">{</code></div><div class="line number37 index36 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">if</code> <code class="plain">(L[i] &lt;= R[j])</code></div><div class="line number38 index37 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">{</code></div><div class="line number39 index38 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">arr[k] = L[i];</code></div><div class="line number40 index39 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">i++;</code></div><div class="line number41 index40 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">}</code></div><div class="line number42 index41 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">else</code></div><div class="line number43 index42 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">{</code></div><div class="line number44 index43 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">arr[k] = R[j];</code></div><div class="line number45 index44 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">j++;</code></div><div class="line number46 index45 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">}</code></div><div class="line number47 index46 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">k++;</code></div><div class="line number48 index47 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">}</code></div><div class="line number49 index48 alt2">&nbsp;</div><div class="line number50 index49 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Copy the remaining elements</code></div><div class="line number51 index50 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// of L[], if there are any</code></div><div class="line number52 index51 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">while</code> <code class="plain">(i &lt; n1) {</code></div><div class="line number53 index52 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">arr[k] = L[i];</code></div><div class="line number54 index53 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">i++;</code></div><div class="line number55 index54 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">k++;</code></div><div class="line number56 index55 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">}</code></div><div class="line number57 index56 alt2">&nbsp;</div><div class="line number58 index57 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Copy the remaining elements of</code></div><div class="line number59 index58 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// R[], if there are any</code></div><div class="line number60 index59 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">while</code> <code class="plain">(j &lt; n2)</code></div><div class="line number61 index60 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">{</code></div><div class="line number62 index61 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">arr[k] = R[j];</code></div><div class="line number63 index62 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">j++;</code></div><div class="line number64 index63 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">k++;</code></div><div class="line number65 index64 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">}</code></div><div class="line number66 index65 alt1"><code class="plain">}</code></div><div class="line number67 index66 alt2">&nbsp;</div><div class="line number68 index67 alt1"><code class="comments">// l is for left index and r is</code></div><div class="line number69 index68 alt2"><code class="comments">// right index of the sub-array</code></div><div class="line number70 index69 alt1"><code class="comments">// of arr to be sorted</code></div><div class="line number71 index70 alt2"><code class="keyword bold">void</code> <code class="plain">mergeSort(</code><code class="color1 bold">int</code> <code class="plain">arr[],</code></div><div class="line number72 index71 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">l, </code><code class="color1 bold">int</code> <code class="plain">r)</code></div><div class="line number73 index72 alt2"><code class="plain">{</code></div><div class="line number74 index73 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">if</code> <code class="plain">(l &lt; r)</code></div><div class="line number75 index74 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">{</code></div><div class="line number76 index75 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Same as (l+r)/2, but avoids</code></div><div class="line number77 index76 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// overflow for large l and h</code></div><div class="line number78 index77 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">m = l + (r - l) / 2;</code></div><div class="line number79 index78 alt2">&nbsp;</div><div class="line number80 index79 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="comments">// Sort first and second halves</code></div><div class="line number81 index80 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">mergeSort(arr, l, m);</code></div><div class="line number82 index81 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">mergeSort(arr, m + 1, r);</code></div><div class="line number83 index82 alt2">&nbsp;</div><div class="line number84 index83 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">merge(arr, l, m, r);</code></div><div class="line number85 index84 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">}</code></div><div class="line number86 index85 alt1"><code class="plain">}</code></div><div class="line number87 index86 alt2">&nbsp;</div><div class="line number88 index87 alt1"><code class="comments">// UTILITY FUNCTIONS</code></div><div class="line number89 index88 alt2"><code class="comments">// Function to print an array</code></div><div class="line number90 index89 alt1"><code class="keyword bold">void</code> <code class="plain">printArray(</code><code class="color1 bold">int</code> <code class="plain">A[], </code><code class="color1 bold">int</code> <code class="plain">size)</code></div><div class="line number91 index90 alt2"><code class="plain">{</code></div><div class="line number92 index91 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">i;</code></div><div class="line number93 index92 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">for</code> <code class="plain">(i = 0; i &lt; size; i++)</code></div><div class="line number94 index93 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="functions bold">printf</code><code class="plain">("%d ", A[i]);</code></div><div class="line number95 index94 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="functions bold">printf</code><code class="plain">("\n");</code></div><div class="line number96 index95 alt1"><code class="plain">}</code></div><div class="line number97 index96 alt2">&nbsp;</div><div class="line number98 index97 alt1"><code class="comments">// Driver code</code></div><div class="line number99 index98 alt2"><code class="color1 bold">int</code> <code class="plain">main()</code></div><div class="line number100 index99 alt1"><code class="plain">{</code></div><div class="line number101 index100 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">arr[] = {12, 11, 13, 5, 6, 7};</code></div><div class="line number102 index101 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="color1 bold">int</code> <code class="plain">arr_size = </code><code class="keyword bold">sizeof</code><code class="plain">(arr) / </code><code class="keyword bold">sizeof</code><code class="plain">(arr[0]);</code></div><div class="line number103 index102 alt2">&nbsp;</div><div class="line number104 index103 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="functions bold">printf</code><code class="plain">("Given array is \n");</code></div><div class="line number105 index104 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">printArray(arr, arr_size);</code></div><div class="line number106 index105 alt1">&nbsp;</div><div class="line number107 index106 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">mergeSort(arr, 0, arr_size - 1);</code></div><div class="line number108 index107 alt1">&nbsp;</div><div class="line number109 index108 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="functions bold">printf</code><code class="plain">("\nSorted array is \n");</code></div><div class="line number110 index109 alt1"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="plain">printArray(arr, arr_size);</code></div><div class="line number111 index110 alt2"><code class="undefined spaces">&nbsp;&nbsp;&nbsp;&nbsp;</code><code class="keyword bold">return</code> <code class="plain">0;</code></div><div class="line number112 index111 alt1"><code class="plain">}</code></div></div></td></tr></tbody></table></div></div>
      </div>`;
    }
    else if(message == "what is stack"){
      response = `<div class="line">A stack data structure is a collection of elements that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. Stacks are commonly used in computer science and programming to manage function calls, expression evaluation, and backtracking.

      A stack has two fundamental operations: push and pop. The push operation adds an element to the top of the stack, while the pop operation removes the top element from the stack.
      
      Other operations that are commonly associated with stacks include:
      
      Top: returns the top element of the stack without removing it.
      Size: returns the number of elements in the stack.
      Empty: checks if the stack is empty.
      Stacks can be implemented using arrays or linked lists. The array implementation is simpler and more efficient in terms of memory usage, while the linked list implementation allows for dynamic resizing of the stack.
      
      Stacks are used in a variety of applications, including parsing, expression evaluation, and backtracking algorithms. They are also used in web browsers to implement the back and forward buttons.</div>`;
    }
    else if(message == "write a code for create node in linked list"){
      response = `
      <div class="code-block">
      <div class="struct-declare">
        <span class="keyword">void <span class="word">insertfront (<span class="keyword">struct</span> Node *head,<span class="keyword"> int</span>data)</span></span>
        <div class="line"><span>{</span></div>
        <div class="line"><span class="keyword">struct</span><span class="word">Node *newNode = (<span class="keyword">struct</span> Node *) malloc (<span class="keyword">sizeof</span>(<span class="keyword">struct</span>Node))</span>;</div>
        <div class="line"><span class="word">newNode ->data = data</span>;</div>
        <div class="line"><span class="word">newNode ->next = NULL</span>;</div>
        <div class="line"><span class="word">*head = newNode</span>;</div>
        <div class="line"><span>};</span></div>
      </div>
    </div>`;
    }
    else if(message == "what is tree" ){
      response = `<div class="line" >A tree data structure is a collection of nodes organized in a hierarchical way. It is a popular data structure used in computer science to store and manipulate hierarchical data such as file systems, XML documents, and HTML documents.

      A tree consists of nodes and edges. The topmost node in a tree is called the root, and it has zero or more children nodes. Every other node in the tree has exactly one parent and zero or more child nodes.
      
      Each node in a tree can have any number of child nodes, but it can only have one parent node. Nodes that have no children are called leaf nodes, while nodes that have children are called internal nodes.
      
      Tree data structures are widely used in computer science and programming, including in algorithms such as binary search trees, AVL trees, and red-black trees. They are also used in various applications such as decision trees, syntax trees, and hierarchical clustering.</div>`
      
}
else if(message == "visualize bubble sort") {
  response = `<img style="width: 600px;height:400px;"  src="image/bubble-sort-animation2.gif" alt="">
`;
}
else if(message == "Suggest video on Dijkstra Algorithm") {
  response = `
  <iframe width="560" height="315" src="https://www.youtube.com/embed/smHnz2RHJBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  `;
}
else {
      response = `Sorry , I can't understand your querie <p>Try Again..... <p>Thanks a Lot</p>`;
    }
    setTimeout(() => {
      identify(response,message,"bot");
    }, 500);
  }
}

// add event listeners
chatInputBox.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    chatSendBtn.click();
  }
});
chatSendBtn.addEventListener("click", sendMessageToChatbot);

