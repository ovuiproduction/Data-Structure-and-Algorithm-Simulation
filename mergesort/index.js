const divide1 = document.getElementById("divide1");
const divide2 = document.getElementById("divide2");
const divide3 = document.getElementById("divide3");
const conquere1 = document.getElementById("conquere1");
const conquere2 = document.getElementById("conquere2");
const conquere3 = document.getElementById("conquere3");
// const Success = document.getElementById("alert");
const Success = document.getElementById("main-bucket");


const D1 = document.getElementById("d1");
const D2 = document.getElementById("d2");
const D3 = document.getElementById("d3");
const C1 = document.getElementById("c1");
const C2 = document.getElementById("c2");
const C3 = document.getElementById("c3");

const d11 = document.getElementById("d1-1");
const d12 = document.getElementById("d1-2");
const d13 = document.getElementById("d1-3");
const d14 = document.getElementById("d1-4");
const d15 = document.getElementById("d1-5");
const d16 = document.getElementById("d1-6");


const d21 = document.getElementById("d2-1");
const d22 = document.getElementById("d2-2");
const d23 = document.getElementById("d2-3");
const d24 = document.getElementById("d2-4");
const d25 = document.getElementById("d2-5");
const d26 = document.getElementById("d2-6");


const d31 = document.getElementById("d3-1");
const d32 = document.getElementById("d3-2");
const d33 = document.getElementById("d3-3");
const d34 = document.getElementById("d3-4");
const d35 = document.getElementById("d3-5");
const d36 = document.getElementById("d3-6");


const c11 = document.getElementById("c1-1");
const c12 = document.getElementById("c1-2");
const c13 = document.getElementById("c1-3");
const c14 = document.getElementById("c1-4");
const c15 = document.getElementById("c1-5");
const c16 = document.getElementById("c1-6");


const c21 = document.getElementById("c2-1");
const c22 = document.getElementById("c2-2");
const c23 = document.getElementById("c2-3");
const c24 = document.getElementById("c2-4");
const c25 = document.getElementById("c2-5");
const c26 = document.getElementById("c2-6");


const c31 = document.getElementById("c3-1");
const c32 = document.getElementById("c3-2");
const c33 = document.getElementById("c3-3");
const c34 = document.getElementById("c3-4");
const c35 = document.getElementById("c3-5");
const c36 = document.getElementById("c3-6");

const ele1 = document.getElementById("input-1");
const ele2 = document.getElementById("input-2");
const ele3 = document.getElementById("input-3");
const ele4 = document.getElementById("input-4");
const ele5 = document.getElementById("input-5");
const ele6 = document.getElementById("input-6");


// const arr0 = [3,2,1,6,4,5];
const arr0 = [];

const arr11=[];
const arr12=[];

const arr21 =[];
const arr22 =[];
const arr23 =[];
const arr24 =[];

const arr31 =[];
const arr32 =[];
const arr33 =[];
const arr34 =[];
const arr35 =[];
const arr36 =[];


divide1.addEventListener("click",step1);
divide2.addEventListener("click",step2);
divide3.addEventListener("click",step3);
conquere1.addEventListener("click",step4);
conquere2.addEventListener("click",step5);
conquere3.addEventListener("click",step6);


function step1()
{

    // input element filling into arr0
    arr0[0] = ele1.value;
    arr0[1] = ele2.value;
    arr0[2] = ele3.value;
    arr0[3] = ele4.value;
    arr0[4] = ele5.value;
    arr0[5] = ele6.value;


    // visible array
    D1.style.visibility='visible';
    // visible next button
    divide2.style.visibility='visible';
    
    // divididing arr0 into 2 array arr11 and arr12
    for(let i =0;i<arr0.length/2;i++){
        arr11[i] = arr0[i];
    }
    // display arr11 element 
    d11.innerHTML = arr11[0];
    d12.innerHTML = arr11[1];
    d13.innerHTML = arr11[2];

    // divididing arr0 into 2 array arr11 and arr12
    for(let j=0,i =arr0.length/2;i<arr0.length;i++,j++){
        arr12[j] = arr0[i];
    }
     // display arr12 element 
    d14.innerHTML = arr12[0];
    d15.innerHTML = arr12[1];
    d16.innerHTML = arr12[2];
}


function step2()
{
    D2.style.visibility='visible';
   
    divide3.style.visibility='visible';
    // arr  11 divide into 2 parts

    for(let i =0;i<arr11.length/2;i++){
        arr21[i] = arr11[i];
    }
    d21.innerHTML = arr21[0];
    
    // arr  11 divide into 2 parts

    for(let j=0,i =Math.round(arr11.length/2)-1;i<arr11.length;i++,j++){
        arr22[j] = arr11[i];
    }
    d22.innerHTML = arr22[0];
    d23.innerHTML = arr22[1];

    // arr 12 divide into 2 parts

    for(let i =0;i<=arr12.length/2;i++){
        arr23[i] = arr12[i];
    }
    d24.innerHTML = arr23[0];
    d25.innerHTML = arr23[1];
    
    for(let j=0,i =Math.round(arr12.length/2);i<arr12.length;i++,j++){
        arr24[j] = arr12[i];
    }
    d26.innerHTML = arr24[0];
   
}


function step3()
{
    D3.style.visibility='visible';

    conquere1.style.visibility='visible';
     // arr  21 

     for(let i =0;i<arr21.length/2;i++){
        arr31[i] = arr21[i];
    }
    d31.innerHTML = arr31[0];
    
    // arr 22 divide into 2 parts
    for(let i=0;i<Math.round(arr22.length)-1;i++){
        arr32[i] = arr22[i];
    }
    d32.innerHTML = arr32[0];
    // arr 22 divide into 2 parts
    for(let j=0 ,i=Math.round(arr22.length)-1;i<Math.round(arr22.length);i++,j++){
        arr33[j] = arr22[i];
    }
    d33.innerHTML = arr33[0];


    // arr 23 divide into 2 parts
    for(let i=0;i<Math.round(arr23.length)-1;i++){
        arr34[i] = arr23[i];
    }
    d34.innerHTML = arr34[0];
    // arr 23 divide into 2 parts
    for(let j=0 ,i=Math.round(arr23.length)-1;i<Math.round(arr23.length);i++,j++){
        arr35[j] = arr23[i];
    }
    d35.innerHTML = arr35[0];

    // arr  24

    for(let i =0;i<arr24.length/2;i++){
        arr36[i] = arr24[i];
    }
    d36.innerHTML = arr36[0];
    
}
function step4()
{
    C1.style.visibility='visible';

    conquere2.style.visibility='visible';
     // arr  31 conquere into 21 array

    c11.innerHTML = arr21[0];
    
    // arr  32 and 33 conquere into 22 array

    arr22.sort();
    c12.innerHTML = arr22[0];
    c13.innerHTML = arr22[1];


    // arr 34 and 35 conquere into 23 parts

    arr23.sort();
    c14.innerHTML = arr23[0];
    c15.innerHTML = arr23[1];
    
    // arr 36 conquere into 24 parts

    c16.innerHTML = arr24[0];

}
function step5()
{
    C2.style.visibility='visible';

    conquere3.style.visibility='visible';
    // conquere array 21 and 22 into array 11
    arr11.sort();
    c21.innerHTML = arr11[0];
    c22.innerHTML = arr11[1];
    c23.innerHTML = arr11[2];

    // conquere array 23 and 24 into array 12
    arr12.sort();
    c24.innerHTML = arr12[0];
    c25.innerHTML = arr12[1];
    c26.innerHTML = arr12[2];
}
function step6()
{
    C3.style.visibility='visible';


    arr0.sort();

    c31.innerHTML = arr0[0];
    c32.innerHTML = arr0[1];
    c33.innerHTML = arr0[2];
    c34.innerHTML = arr0[3];
    c35.innerHTML = arr0[4];
    c36.innerHTML = arr0[5];

   
    Success.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2020/04/10/13/28/success-5025797_1280.png')";
    // Success.style.backgroundColor = 'blue'
    Success.style.backgroundSize ='100% 100%';
    setTimeout(() => {
        Success.style.backgroundImage ='none';
        Success.style.backgroundColor ='rgb(11, 6, 15)';
    }, 2500);
}