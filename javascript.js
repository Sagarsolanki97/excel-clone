// function fnc(event){
//     console.log("hello",event.target);
//     // alert("focus");

// }
// function fnc2(){
//     console.log("hello");
//     alert("focus");
// }

const thh =document.getElementById("table-heading-column");
const column = 26;
const trr = document.getElementById("table-rows");
const rows = 100;

let currCell  ;
// console.log(currCell);
const bold =document.getElementById("btn-b");
const italic=document.getElementById("btn-i");
const underline = document.getElementById("btn-u") ;
const bgcolorbtn= document.getElementById("BG-color");
const  textcolorbtn =document.getElementById("text-color");

const left_aln =document.getElementById("l-align");
const center_aln =document.getElementById("c-align");
const right_aln =document.getElementById("r-align");
const fontSize =document.getElementById("font-size");

const font_Family=document.getElementById("font_family");



const Cut = document.getElementById("cut");
var cutval = {};
const Copy = document.getElementById("copy");
const Paste = document.getElementById("paste");

for( let col =0;col< column;col++){
    let th = document.createElement("th");
    th.innerText =String.fromCharCode(col + 65);
    thh.appendChild(th);
}

const tbody = document.getElementById("table-rows");

for(let row =0; row<rows; row++){
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerText = row+1;
    tr.appendChild(th);
    for( let col = 0; col<column; col++){
        let td = document.createElement("td");
        td.setAttribute("contenteditable","true");
        td.setAttribute("id",`${String.fromCharCode(65+col)}${row+1}`);
        td.setAttribute("spellcheck","false");
        td.addEventListener("focus", (event) => onFocus(event));
        tr.appendChild(td);
    }

    tbody.appendChild(tr);
}

function onFocus(event){
console.log("in focus : " , event.target.id);
currCell =event.target;
document.getElementById("currentCell").innerText = event.target.id;
}

bold.addEventListener("click", () => {
    console.log("bold", currCell);

    if (currCell.style.fontWeight == "bold") {
      currCell.style.fontWeight = "normal";
    } else {
      currCell.style.fontWeight = "bold";
    }
  });

italic.addEventListener("click", ()=>{
   

    if(currCell.style.fontStyle  == "italic"){
        currCell.style.fontStyle = "normal";
    }else{
        currCell.style.fontStyle = "italic"
    }
    console.log("italics", currCell);
});

underline.addEventListener("click", () => {
    if (currCell.style.textDecoration == "none") {
      currCell.style.textDecoration = "underline";
    } else {
      currCell.style.textDecoration = "none";
    }
  });


  bgcolorbtn.addEventListener("change" ,()=> {
    currCell.style.backgroundColor=bgcolorbtn.value;
  });

  textcolorbtn.addEventListener("change" ,()=> {
    currCell.style.color = textcolorbtn.value;
  });

  left_aln.addEventListener("click", ()=> {
currCell.style.textAlign ="left";
  });
  center_aln.addEventListener("click", ()=> {
 currCell.style.textAlign ="center";
  });
  right_aln.addEventListener("click", ()=> {
currCell.style.textAlign ="right";
  });


fontSize.addEventListener("change",()=>{
currCell.style.fontSize=fontSize.value;
  }); 



  font_Family.addEventListener("change",()=>{
    currCell.style.fontFamily=font_Family.value;
  });

// // // using below method , its basic , using this we cant copy css part
//   Cut.addEventListener("click" , ()=> {
// cutval = {
//   style:currCell.style,
//   text:currCell.innerText,
// };
// currCell.style = null;
// currCell.innerText = null;
// });

//   Paste.addEventListener("click" , ()=> {
//     console.log(cutval);
// currCell.style=cutval.style;
// currCell.innerText=cutval.text;
// });

// // // using this  , can copy css too.
Cut.addEventListener("click" , ()=> {
  cutval = {
    style:currCell.style.cssText,
    text:currCell.innerText,
  };
  currCell.style = null;
  currCell.innerText = null;
  });

  Copy.addEventListener("click", ()=> {
    cutval = {
      style:currCell.style.cssText,
      text:currCell.innerText,
    };
  })
  
    Paste.addEventListener("click" , ()=> {
   
  currCell.style.cssText=cutval.style;
  currCell.innerText=cutval.text;
  });