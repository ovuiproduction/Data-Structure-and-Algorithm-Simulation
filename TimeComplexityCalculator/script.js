const input = document.getElementById('input');
const output = document.getElementById('output');
const code = document.getElementById('code');
const timearray = document.getElementById('timecalculate');
const explaination1 = document.getElementById('explain1');
const explaination2 = document.getElementById('explain2');
const explaination3 = document.getElementById('explain3');
const explaination4 = document.getElementById('explain4');
const explaination5 = document.getElementById('explain5');
const testcode = document.getElementById('test');

var substring=[];

var time=[];
var c =0;
var subarray=[];
var count =0;
function printInput(){
  let arr = input.value.split(" ");
  let len = arr.length;
  var flag = 0;

  for(let i=0;i<len;i++){
    if(arr[i] == "for" || arr[i] == "while"){
        flag = flag +1;
        let j =i+1;
        subarray[count++] = arr[i];
        time[c++] = "N1";

        //step1
        while(arr[j] !="}"){
            subarray[count++] = arr[j];
            if(arr[j] == "for" || arr[j] == "while"){
                time[c++] = "N2";
            }
            j++;
        }
        subarray[count++] = "}";

        // step2
        j++;
        if(time[c-1] == "N2"){
        while(arr[j] !="}"){
            subarray[count++] = arr[j++];
        }
    }
    // step 3
    j++;
    if(subarray.includes("if") == true){
        while(arr[j] !="}"){
            subarray[count++] = arr[j++];
        }
        subarray[count++] = "}";
    }
    subarray[count++] = "}";
        i = j;
    }
  }

  if(flag == 0){
    explaination1.innerHTML = "<h1>O(1)</h1>";
    return;
  }


  let q =0;

  var str1=[];
  var str1c =0;

  var str2=[];
  var str2c =0;

  var str3=[];
  var str3c =0;

  var str4=[];
  var str4c =0;

  var str5=[];
  var str5c =0;

  while(subarray[q] != "{"){
    str1[str1c++] = subarray[q++]; 
  }
  str1[str1c] = "{";
  
  

  if(time.includes("N2") == true){
  q++;
  while(subarray[q]!="{")
  {
    str2[str2c++] = subarray[q++]; 
  }
  str2[str2c] = "{";
}




  q++;
  while(subarray[q]!="}")
  {
    str3[str3c++] = subarray[q++]; 
  }
  if(str3.includes("if") == true){
    str3[str3c++] = "}";
 }
  str3[str3c] = "}";
 


let n1 = 0;
  for(let i=0;i<time.length;i++){
    if(time[i] == "N1"){
        n1++;
    }
  }

  if(time.includes("N2") == false &&  n1 == 2){
    q++;
  while(subarray[q]!="{")
  {
    str2[str2c++] = subarray[q++]; 
  }
  str2[str2c] = "{";

  q++;
  while(subarray[q]!="}")
  {
    str4[str4c++] = subarray[q++]; 
  }
  str4[str4c] = "}";
  }



  if(time.includes("N2") == true){
  q++;
  while(subarray[q]!="}")
  {
    str4[str4c++] = subarray[q++]; 
  }
  str4[str4c] = "}";
}

if(time[c-1] == 'N1' && time[c-2] == "N2"){
    q=q+2;
    while(subarray[q]!="}")
    {
      str5[str5c++] = subarray[q++]; 
    }
    str5[str5c] = "}";
}


if(time[c-1] == 'N1' && time[c-2] == "N2"){
    explaination1.innerHTML = str1.join(' ');
    explaination1.style.backgroundColor="black";
    explaination1.style.wordSpacing="5px";
    explaination2.innerHTML = str2.join(' ');
    explaination2.style.backgroundColor="black";
    explaination3.innerHTML = str3.join(' ');
    explaination4.innerHTML = str4.join(' ');
    explaination5.innerHTML = str5.join(' ');
    explaination5.style.backgroundColor="black";
    timearray.innerHTML = "<p>N*N + N = N^2 + N ~ N^2</p><p>Nested for Loops</p>";
    output.innerHTML = "<h1>O(N^2)</h1>";
    
}

 else if(time.includes("N2") == true){
    explaination1.innerHTML = str1.join(' ');
    explaination1.style.backgroundColor="black";
    explaination1.style.wordSpacing="5px";
    explaination2.innerHTML = str2.join(' ');
    explaination2.style.backgroundColor="black";
    explaination3.innerHTML = str3.join(' ');
    explaination4.innerHTML = str4.join(' ');
    timearray.innerHTML = "<p>N*N = N^2</p><p>Nested for Loops</p>";
    output.innerHTML = "<h1>O(N^2)</h1>";
  }
  else if(time.includes("N2") == false && time.includes("N1") == true){
    explaination1.innerHTML = str1.join(' ');
    explaination1.style.backgroundColor="black";
    explaination2.innerHTML = str3.join(' ');
    if(n1 == 2){
        explaination3.innerHTML = str2.join(' ');
        explaination3.style.backgroundColor="black";
        explaination4.innerHTML = str4.join(' ');
        timearray.innerHTML = "<p>N+N ==>> 2N ~ N</p>";
    }
    if(n1 == 1){
    timearray.innerHTML = "<p>N</p>";
    }
    output.innerHTML = "<h1>O(N)</h1>";
  }
  else if(time.includes("N2") == false && time.includes("N1") == false){
    timearray.innerHTML = time;
    output.innerHTML = "<h1>O(1)</h1>";
  }

}









input.addEventListener("keyup", function(event) {
    code.innerHTML = input.value;
  
  if (event.keyCode === 13) {

    event.preventDefault();
   
    document.getElementById("button").click();
  }
});
