// Updated Variable Declaration
const push = document.getElementById("add-node");
const pop = document.getElementById("del-node");
const reset = document.getElementById("stop");
const bucket = document.getElementById("bucket");
const input = document.getElementById("input");
const messageBox = document.getElementById("msg");
const stack = [];

// Metadata elements
const topValue = document.getElementById("top-value");
const lastPushed = document.getElementById("last-pushed");
const lastPopped = document.getElementById("last-popped");
const stackSize = document.getElementById("stack-size");

// Disable all buttons
const buttonDisable = () => {
    [push, pop, reset, input].forEach(element => {
        element.disabled = true;
        if (element.tagName === 'BUTTON') {
            element.classList.add("disable-button");
        }
    });
};

// Enable all buttons
const buttonEnable = () => {
    [push, pop, reset, input].forEach(element => {
        element.disabled = false;
        if (element.tagName === 'BUTTON') {
            element.classList.remove("disable-button");
        }
    });
};

// Update stack metadata display
const updateMetadata = () => {
    topValue.textContent = stack.length > 0 ? stack[stack.length - 1] : "None";
    stackSize.textContent = `${stack.length}/5`;
};

// Push operation
push.addEventListener("click", () => {
    if (!input.value.trim()) {
        messageBox.textContent = "Please Enter a value.";
        messageBox.classList.add("error");
        setTimeout(() => messageBox.classList.remove("error"), 1200);
        return;
    }

    if (stack.length >= 5) {
        input.value = "";
        messageBox.textContent = "Stack Overflow";
        messageBox.classList.add("error");
        setTimeout(() => messageBox.classList.remove("error"), 1200);
        return;
    }

    const itemValue = input.value;
    stack.push(itemValue);

    const element = document.createElement("div");
    element.className = "ele";
    element.textContent = itemValue;
    bucket.appendChild(element);

    input.value = "";
    element.classList.add("ele-add");
    buttonDisable();

    setTimeout(() => {
        element.classList.remove("ele-add");
        lastPushed.textContent = itemValue;
        messageBox.textContent = `Item ${itemValue} pushed`;
        updateMetadata();
        buttonEnable();
    }, 1500);
});

// Pop operation
pop.addEventListener("click", () => {
    if (stack.length === 0) {
        messageBox.textContent = "Stack Underflow";
        messageBox.classList.add("error");
        setTimeout(() => messageBox.classList.remove("error"), 1200);
        return;
    }

    const lastElement = bucket.lastElementChild;
    lastElement.classList.add("ele-remove");
    buttonDisable();

    setTimeout(() => {
        const itemValue = stack.pop();
        bucket.removeChild(lastElement);
        lastPopped.textContent = itemValue;
        messageBox.textContent = `Item ${itemValue} popped`;
        updateMetadata();
        buttonEnable();
    }, 1500);
});

// Reset operation
reset.addEventListener("click", () => {
    while (stack.length > 0) stack.pop();
    
    // Clear visualization
    while (bucket.firstChild) {
        bucket.removeChild(bucket.firstChild);
    }
    
    // Reset metadata
    topValue.textContent = "None";
    lastPushed.textContent = "None";
    lastPopped.textContent = "None";
    stackSize.textContent = "0/5";
    messageBox.textContent = "";
});