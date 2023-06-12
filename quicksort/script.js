const lessthan = document.getElementById("less");
const pivot = document.getElementById("pivot-1");
const greaterthan = document.getElementById("greater");
const great21 = document.getElementById("greater-2-1");
const less21 = document.getElementById("less-2-1");
// const  pivot21= document.getElementById("pivot-2-1");
const pivot22 = document.getElementById("pivot-2-2");
const  less22= document.getElementById("less-2-2");
const button = document.getElementById("btn");
const va1 = document.getElementById("ver");
const ha1 = document.getElementById("horizontal-a1");
const va2 = document.getElementById("vertical-a2");
const element1 = document.getElementById("ele1");
const element2 = document.getElementById("ele2");
const element3 = document.getElementById("ele3");
const element4 = document.getElementById("ele4");
const arrowblock = document.getElementById("arrow-block");
const arrowblock2 = document.getElementById("arrow-block2");
const button2 = document.getElementById("btn1");
const newless = document.getElementById("newless1");
// const newpivot1 = document.getElementById("new-pivot-1");
const newgreater = document.getElementById("newgrater1");
const ans1 = document.getElementById("elelast1");
const ans2 = document.getElementById("elelast2");
const ans3 = document.getElementById("elelast3");
const ans4 = document.getElementById("elelast4");
const step1Info = document.getElementById("actionInfo");
const step2Info = document.getElementById("actionInfo2");

button.addEventListener("click" , next);

const arr = [45 , 23 , 78 , 32];
const arrless = [];
const arrgrater = [];
const arrless21 = [];
const arrgrater21 = [];
const arrless22 = [];
const arrgrater22 = [];
var i = 0;
var j =0;
var k =0;
var j1 =0;
var k1 =0;
var count =0;
const size = arr.length;
var newarray =[];
var newcount =0;
var countnext =0;

function next()
{
    if(count == 0){
   
    element4.style.backgroundColor = 'rgb(255, 73, 164)';
    pivot.style.backgroundColor ='rgb(255, 73, 164)';
    const info = document.createElement("div");
    info.classList.add("stepdirection");
    info.innerHTML = "Taking " + arr[size-1] +" as a Pivot Element";
    step1Info.appendChild(info);
    // newpivot1.style.backgroundColor ='rgb(255, 73, 164)';

    const newele = document.createElement("div");
    newele.classList.add("arrow");
    va1.style.border = '1px solid lightblue';
    va1.style.borderBottom = 'none';
    va1.appendChild(newele);
    
    const newele1 = document.createElement("div");
    newele1.classList.add("arrowh");
    ha1.style.border = '1px solid lightblue';
    newele1.innerHTML = `<span></span>`;
    ha1.appendChild(newele1);

    const newele2 = document.createElement("div");
    newele2.classList.add("arrow");
    va2.style.border = '1px solid lightblue';
    va2.style.borderBottom = 'none';
    va2.style.borderTop = 'none';
    va2.appendChild(newele2);

    setTimeout(() => {
        va1.classList.remove();
        va1.innerHTML="";
        ha1.classList.remove();
        ha1.innerHTML="";
        va2.classList.remove();
        va2.innerHTML="";
        arrowblock.innerHTML ="";
    }, 3000);
    pivot.innerHTML = arr[size-1];
    pivot.backgroundColor='rgb(255, 73, 164)';
    // newpivot1.innerHTML = arr[size-1];
    // newpivot1.backgroundColor='rgb(255, 73, 164)';
    count = count + 1;
    return;
    }
    // pivot21.innerHTML = arr[size-1];
    next1();
    count = count+1;
}

function next1(){

       if(count == 1){
        element1.style.backgroundColor = 'lawngreen';
        step1Info.removeChild(step1Info.lastElementChild);
        const info = document.createElement("div");
        info.classList.add("stepdirection");
        info.innerHTML = "45 > 32 so 45 is Placed  right OF 32";
        step1Info.appendChild(info);
       }
       if(count == 2){
        element2.style.backgroundColor = 'lawngreen';
        step1Info.removeChild(step1Info.lastElementChild);
        const info = document.createElement("div");
        info.classList.add("stepdirection");
        info.innerHTML = "23 < 32 so 23 is Placed  Left OF 32";
        step1Info.appendChild(info);
       }
       if(count == 3){
        element3.style.backgroundColor = 'lawngreen';
        step1Info.removeChild(step1Info.lastElementChild);
        const info = document.createElement("div");
        info.classList.add("stepdirection");
        info.innerHTML = "78 > 32 so 78 is Placed  right OF 32";
        step1Info.appendChild(info);
       }
       if(count == 4){
        arrowblock.innerHTML ="";
        const message = document.createElement("div");
        message.classList.add("step3")
        message.innerHTML = "go to Next Button for further oprations..";
        arrowblock.appendChild(message);
        step1Info.removeChild(step1Info.lastElementChild);
        const info = document.createElement("div");
        info.classList.add("stepdirection");
        info.innerHTML = "Now first step is Over";
        step1Info.appendChild(info);
        setTimeout(() => {
            arrowblock.innerHTML ="";
            step1Info.innerHTML="";
        }, 3000);
        return;
       }
        if(arr[i] > arr[size-1]){
            arrgrater[j] = arr[i];
            j = j+1;
            G(arr[i]);
            arrowblock.innerHTML ="";
            const message = document.createElement("div");
            message.classList.add("step")
            message.innerHTML = arr[i] + " > " + arr[size-1];
            arrowblock.appendChild(message);
        }
        else if(arr[i] < arr[size-1]){
            arrless[k] = arr[i];
            k = k+1;
            L(arr[i]);
            arrowblock.innerHTML = "";
            const message = document.createElement("div");
            message.classList.add("step1")
            message.innerHTML = arr[i] + " < " + arr[size-1];
            arrowblock.appendChild(message);
        }
        i = i+1;
    
   
    
}
var l =0;
button2.addEventListener("click" , next2);
function next2(){
    if(countnext == 0){
    if(arrless.length == 1){
        // step2Info.removeChild(step1Info.lastElementChild);
        // step2Info.removeChild(step2Info.lastElementChild);
        const info = document.createElement("div");
        info.classList.add("stepdirection");
        info.innerHTML = "23 is Take as a Pivot Element.";
        step2Info.appendChild(info);
        // pivot21.innerHTML = arr[size-1];
        // pivot21.backgroundColor="rgb(255, 73, 164)";
        newless.firstElementChild.style.backgroundColor = "lightgreen";
        const message = document.createElement("div");
        message.classList.add("step3")
        message.innerHTML = "as their is only one element, it is sorted.. ";
        arrowblock2.appendChild(message);
        setTimeout(() => {
            arrowblock2.innerHTML="";
            newless.firstElementChild.style.backgroundColor = "lightsalmon"; 
        }, 3000);
        const newele = document.createElement("div");
        newele.classList.add("pivotele");
        newele.innerHTML = arrless[0];
        newele.style.backgroundColor='rgb(255, 73, 164)';
        less21.appendChild(newele);
        countnext = countnext +1;
        return;
    }
}else if(countnext == 1){
    if(arrgrater.length == 1){
    const newele = document.createElement("div");
    newele.classList.add("pivotele");
    newele.innerHTML = arrgrater[0];
    pivot22.appendChild(newele);
    pivot22.backgroundColor="rgb(255, 73, 164)";
    return;
    }
else{
    const newele = document.createElement("div");
    newele.classList.add("ele");
    newele.innerHTML = arrgrater[arrgrater.length -1];
    step2Info.removeChild(step2Info.lastElementChild);
    const info = document.createElement("div");
    info.classList.add("stepdirection");
    info.innerHTML = arrgrater[arrgrater.length -1] +  " is Taken as Pivot Element..";
    step2Info.appendChild(info);
    pivot22.appendChild(newele);
    pivot22.style.backgroundColor="rgb(255, 73, 164)";
    pivot22.backgroundColor="rgb(255, 73, 164)";
    setTimeout(() => {
        newgreater.lastElementChild.style.backgroundColor = "lightsalmon";
    }, 1000);
    countnext = countnext+1;
    return;
}
}
        if(l == arrgrater.length-1){
            const message = document.createElement("div");
            message.classList.add("step3")
            message.innerHTML = "Opration SuccessFull...";
            ans1.innerHTML = 23;
            ans2.innerHTML = 32;
            ans3.innerHTML = 45;
            ans4.innerHTML = 72;
            step2Info.removeChild(step2Info.lastElementChild);
            arrowblock2.appendChild(message);
            setTimeout(() => {
                arrowblock2.innerHTML="";
            }, 3000);
            l = l+1;
            return;
        }
        if(l > arrgrater.length-1){
            return;
        }
        newgreater.firstElementChild.style.backgroundColor = "lightgreen";
        if(arrgrater[l] > arrgrater[arrgrater.length -1]){
            arrgrater21[j1] = arrgrater[l];
            j1 = j1+1;
            G2(arrgrater[l]);
            const info = document.createElement("div");
            step2Info.removeChild(step2Info.lastElementChild);
            info.classList.add("stepdirection");
            info.innerHTML = arrgrater[l]+" > " + arrgrater[arrgrater.length -1]+" So "+arrgrater[l] +" is Placed Right Of "+ arrgrater[arrgrater.length -1];
            step2Info.appendChild(info);
        }
        else if(arrgrater[l] < arrgrater[arrgrater.length-1]){
            arrless21[k1] = arrgrater[l];
            k1 = k1+1;
            L2(arrgrater[l]);
            step2Info.removeChild(step2Info.lastElementChild);
            const info = document.createElement("div");
            info.classList.add("stepdirection");
            info.innerHTML = arrgrater[l]+" < " + arrgrater[arrgrater.length -1]+" So "+arrgrater[l] +" is Placed Left Of "+ arrgrater[arrgrater.length -1];
            step2Info.appendChild(info);
        }
        l = l +1;
    
}
function G(exp)
{   
    // greaterthan.style.backgroundColor="lightgreen";
    const newele = document.createElement("div");
    newele.classList.add("ele");
    newele.innerHTML = exp;
    greaterthan.appendChild(newele);
    newele.style.backgroundColor='lightgreen';
    newele.style.width='100px';
    newele.style.height='50px';
    newele.style.borderLeftColor='black';
    newele.style.borderRightColor='black';
    const newele1 = document.createElement("div");
    newele1.classList.add("ele");
    newele1.innerHTML = exp;
    newele1.style.backgroundColor='lightgreen';
    newgreater.appendChild(newele1);
}

function L(exp)
{
    const newele = document.createElement("div");
    newele.classList.add("ele");
    newele.innerHTML = exp;
    lessthan.appendChild(newele);
    newele.style.backgroundColor='pink';
    const newele1 = document.createElement("div");
    newele1.classList.add("ele");
    newele1.innerHTML = exp;
    newele1.style.backgroundColor='pink';
    newless.appendChild(newele1);
    newarray[newcount] = exp;
    newcount = newcount+1;
}

function G2(exp)
{
    const newele = document.createElement("div");
    newele.classList.add("ele");
    newele.innerHTML = exp;
    newele.style.width='100px';
    newele.style.height='50px';
    newele.style.backgroundColor='lightgreen';
    great21.appendChild(newele);
    const message = document.createElement("div");
    message.classList.add("step1")
    message.innerHTML = exp +" > " + arrgrater[arrgrater.length -1] ;
    arrowblock2.appendChild(message);
    const info = document.createElement("div");
    info.classList.add("stepdirection");
    info.innerHTML = "Now first step is Over";
    step1Info.appendChild(info);
}

function L2(exp)
{
    const newele = document.createElement("div");
    newele.classList.add("ele");
    newele.innerHTML = exp;
    newele.style.backgroundColor='pink';
    less22.appendChild(newele);
    const message = document.createElement("div");
        message.classList.add("step1")
        message.innerHTML = exp +" < " + arrgrater[arrgrater.length -1] ;
        arrowblock2.appendChild(message);
        setTimeout(() => {
            arrowblock2.innerHTML ="";
        }, 2000);  
}

