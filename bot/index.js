// Gemini API configuration
const API_KEY = 'AIzaSyAkYVbt3jD7oqSEzyDjkJexTAu1xT_WCfw'; // Replace with your actual API key
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

// select the HTML elements
const chatContainer = document.getElementById("chat-containeer");
const userquation = document.getElementById("user-chat");
const botOutput = document.getElementById("chat-output");
const chatInputBox = document.getElementById("chat-input-box");
const chatSendBtn = document.getElementById("chat-send-btn");

// Function to append user message
function appenduserMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("ele", "user");
  messageContainer.innerHTML = `
    <img class="img1" src="image/google-user-icon-16.jpg" alt="user">
    <div class="message-content">${message}</div>
  `;
  chatContainer.appendChild(messageContainer);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function appendbotMessage(rawMessage, messageQ) {
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("ele1", "bot");
  
  messageContainer.innerHTML = `
    <div class="bot_output">
      <div class="botthanks">
        <img src="./image/bot-icon-img.png" alt="bot">
        <p>${messageQ}</p>
      </div>
      <div class="botreply"></div>
    </div>
  `;
  
  chatContainer.appendChild(messageContainer);
  // Initial scroll to show new message container
  chatContainer.scrollTop = chatContainer.scrollHeight;
  
  const cleanedMessage = cleanMarkdown(rawMessage);
  const replyElement = messageContainer.querySelector('.botreply');
  await typewriterEffect(replyElement, cleanedMessage);
}

// Function to identify sender and append message
async function identify(message, messageQ, sender) {
  if (sender === "user") {
    appenduserMessage(message);
  } else if (sender === "bot") {
    await appendbotMessage(message, messageQ);
  }
}

// Function to get response from Gemini API
async function getGeminiResponse(userInput) {
  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: userInput
          }]
        }]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Error:', error);
    return "Sorry, I'm having trouble connecting to the server. Please try again later.";
  }
}

// Function to handle message sending
async function sendMessageToChatbot() {
  const message = chatInputBox.value.trim();
  if (message === "") return;

  // Append user message
  identify(message, message, "user");
  chatInputBox.value = "";

  // Create loading element
  const loadingContainer = document.createElement("div");
  loadingContainer.classList.add("ele", "bot", "loading");
  loadingContainer.innerHTML = `
    <div class="bot_output">
      <div class="botthanks">
        <img src="./image/bot-icon-img.png" alt="bot">
        <p>${message}</p>
      </div>
      <div class="loading-message">
        <div class="loading-dots">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  `;
  chatContainer.appendChild(loadingContainer);
  chatContainer.scrollTop = chatContainer.scrollHeight;

  try {
    // Get response from Gemini
    const botResponse = await getGeminiResponse(message);
    
    // Remove loading element
    loadingContainer.remove();
    
    // Append bot response
    await identify(botResponse, message, "bot");
  } catch (error) {
    console.error('Error:', error);
    loadingContainer.remove();
    await identify("An error occurred while processing your request", message, "bot");
  }
}


async function typewriterEffect(element, text) {
  return new Promise(resolve => {
    let index = 0;
    const speed = 20;
    const chatContainer = document.getElementById("chat-containeer");
    
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        // Scroll to bottom after each character
        // chatContainer.scrollTop = chatContainer.scrollHeight;
        setTimeout(type, speed);
      } else {
        resolve();
      }
    }
    
    type();
  });
}


function cleanMarkdown(text) {
  return text
    .replace("* " ,'\n')
    .replace(/\*\*(.*?)\*\*/g, '$1')    // Bold
    .replace(/\*(.*?)\*/g, '$1')       // Italic
    .replace(/```[\s\S]*?```/g, '')    // Code blocks
    .replace(/`(.*?)`/g, '$1')         // Inline code
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')// Links
    .replace(/#{1,6}\s?/g, '')         // Headers
    .replace(/\-\s/g, '• ');           // Lists
}

// Event listeners
chatInputBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    chatSendBtn.click();
  }
});

chatSendBtn.addEventListener("click", sendMessageToChatbot);