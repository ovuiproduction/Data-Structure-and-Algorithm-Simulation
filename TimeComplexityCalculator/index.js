const input = document.getElementById('input');
const output = document.getElementById('output');
const code = document.getElementById('code');
const timearray = document.getElementById('timecalculate');
const explain = document.getElementById('explain');
const testcode = document.getElementById('test');

var substring = [];
var time = [];
var c = 0;
var subarray = [];
var count = 0;

function createHeaderDiv(content, isNested) {
  const div = document.createElement('div');
  div.textContent = content;
  div.className = `code-header${isNested ? ' nested' : ''}`;
  return div;
}

function createBodyDiv(content) {
  const div = document.createElement('div');
  div.textContent = content;
  div.className = 'code-body';
  return div;
}

function printInput() {
  let code = input.value;
  // Normalize line endings and split into lines
  let lines = code.replace(/\r\n/g, '\n').split('\n');
  let arr = [];
  
  // Properly tokenize the code with line awareness
  lines.forEach(line => {
      // Split line into tokens while preserving code structure
      let tokens = line.split(/(\{|\}|;|\(|\)|\s+)/)
          .filter(token => token.trim().length > 0);
      arr = arr.concat(tokens);
  });

  let len = arr.length;
  var flag = 0;
  subarray = [];
  time = [];
  count = 0;
  c = 0;

    explain.innerHTML = '';
    timearray.innerHTML = '';
    output.innerHTML = '';

    for(let i=0;i<len;i++){
      if(arr[i] == "for" || arr[i] == "while"){
          flag = flag +1;
          let j =i+1;
          subarray[count++] = arr[i];
          time[c++] = "N1";

            while (arr[j] != "}") {
                subarray[count++] = arr[j];
                if (arr[j] == "for" || arr[j] == "while") {
                    time[c++] = "N2";
                }
                j++;
            }
            subarray[count++] = "}";

            j++;
            if (time[c - 1] == "N2") {
                while (arr[j] != "}") {
                    subarray[count++] = arr[j++];
                }
            }
            j++;
            if (subarray.includes("if") == true) {
                while (arr[j] != "}") {
                    subarray[count++] = arr[j++];
                }
                subarray[count++] = "}";
            }
            subarray[count++] = "}";
            i = j;
        }
    }

    if (flag == 0) {
        const div = document.createElement('h1');
        div.textContent = 'O(1)';
        explain.appendChild(div);
        return;
    }

    let q = 0;
    var str1 = [];
    var str1c = 0;
    var str2 = [];
    var str2c = 0;
    var str3 = [];
    var str3c = 0;
    var str4 = [];
    var str4c = 0;
    var str5 = [];
    var str5c = 0;

    while (subarray[q] != "{") {
        str1[str1c++] = subarray[q++];
    }
    str1[str1c] = "{";

    if (time.includes("N2")) {
        q++;
        while (subarray[q] != "{") {
            str2[str2c++] = subarray[q++];
        }
        str2[str2c] = "{";
    }

    q++;
    while (subarray[q] != "}") {
        str3[str3c++] = subarray[q++];
    }
    if (str3.includes("if")) {
        str3[str3c++] = "}";
    }
    str3[str3c] = "}";

    let n1 = 0;
    for (let i = 0; i < time.length; i++) {
        if (time[i] == "N1") {
            n1++;
        }
    }

    if (!time.includes("N2") && n1 == 2) {
        q++;
        while (subarray[q] != "{") {
            str2[str2c++] = subarray[q++];
        }
        str2[str2c] = "{";

        q++;
        while (subarray[q] != "}") {
            str4[str4c++] = subarray[q++];
        }
        str4[str4c] = "}";
    }

    if (time.includes("N2")) {
        q++;
        while (subarray[q] != "}") {
            str4[str4c++] = subarray[q++];
        }
        str4[str4c] = "}";
    }

    if (time[c - 1] == 'N1' && time[c - 2] == "N2") {
        q += 2;
        while (subarray[q] != "}") {
            str5[str5c++] = subarray[q++];
        }
        str5[str5c] = "}";
    }

    let partsArrays = [];
    if (time[c - 1] == 'N1' && time[c - 2] == "N2") {
        partsArrays = [str1, str2, str3, str4, str5];
        timearray.innerHTML = "<p>N*N + N = N^2 + N ~ N^2</p><p>Nested for Loops</p>";
        output.innerHTML = "<h1>O(N^2)</h1>";
    } else if (time.includes("N2")) {
        partsArrays = [str1, str2, str3, str4];
        timearray.innerHTML = "<p>N*N = N^2</p><p>Nested for Loops</p>";
        output.innerHTML = "<h1>O(N^2)</h1>";
    } else if (!time.includes("N2") && time.includes("N1")) {
        partsArrays = [str1, str3];
        if (n1 == 2) {
            partsArrays.push(str2, str4);
            timearray.innerHTML = "<p>N+N ==>> 2N ~ N</p>";
        }
        if (n1 == 1) {
            timearray.innerHTML = "<p>N</p>";
        }
        output.innerHTML = "<h1>O(N)</h1>";
    } else {
        const div = document.createElement('h1');
        div.textContent = 'O(1)';
        explain.appendChild(div);
        return;
    }

    let indentLevel = 0;
    let isNested = false;

    partsArrays.forEach(partArray => {
        const part = partArray.join(' ');
        const lines = part.split('{').join(' {\n').split('}').join('\n}\n').split('\n');

        lines.forEach(line => {
            line = line.trim();
            if (!line) return;

            // Detect loop keywords at start of line
            if (line.startsWith('for ') || line.startsWith('while ') || line.indexOf("for")!=-1 || line.indexOf("while")!=-1) {
                const div = createHeaderDiv(line, isNested);
                div.innerHTML = highlightSyntax(line);
                explain.appendChild(div);
                indentLevel++;
                isNested = indentLevel > 1;
            } 
            else if (line === '}') {
                indentLevel = Math.max(0, indentLevel - 1);
                isNested = indentLevel > 1;
            }
            else {
                const div = createBodyDiv(line);
                div.innerHTML = highlightSyntax(line);
                div.style.marginLeft = `${30 * indentLevel}px`;
                explain.appendChild(div);
            }
        });
    });
}

function highlightSyntax(code) {
  // First escape HTML entities
  const escapeDiv = document.createElement('div');
  escapeDiv.textContent = code;
  const escaped = escapeDiv.innerHTML;

  // Now apply syntax highlighting
  return escaped
      .replace(/\b(for|while|if|else|return|function)\b/g, '<span>$1</span>')
      .replace(/\b(console|log|printf)\b/g, '<span>$1</span>')
      .replace(/(\d+)/g, '<span>$1</span>')
      .replace(/("[^"]*"|'[^']*')/g, '<span>$1</span>')
      .replace(/\/\/.*/g, '<span>$&</span>');
}

input.addEventListener("keyup", function(event) {
    code.innerText = input.value;
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("button").click();
    }
});