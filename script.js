window.onload=()=>{
creategrid(5);
};
let res=document.getElementById("reset");
let pop=document.getElementById("popup");
let col=document.getElementById("picker");
let Rainbow=document.getElementById("rainbow");
let clic=document.getElementById("clis");
res.addEventListener("click",()=>{
pop.style.display="flex";
});
function grid(){
    let size=parseInt(document.getElementById("int").value);
    if(size>=1 && size<=100){
    pop.style.display="none";
    creategrid(size);
    }
    else{
        alert("Enter a valid number(1-100)");
    }
 document.getElementById("int").value="";
}

function creategrid(size){
    let gri=document.getElementById("grid");
    gri.innerHTML=``;
    gri.style.display="grid";
    gri.style.width="600px";
    gri.style.height="600px";
    gri.style.gap="1px";
    gri.style.marginTop="20px";
    gri.style.gridTemplateColumns=`repeat(${size}, 1fr)`;
    gri.style.gridTemplateRows=`repeat(${size}, 1fr)`;
    for(let i=0;i<size*size;i++){
        let div=document.createElement("div");
        div.classList.add("grid");
        div.style.border="2px solid black";
        div.style.width="100%";
        div.style.height="100%";
        div.addEventListener("click",()=>{
            div.style.backgroundColor="black";
        })
        gri.appendChild(div);
    }
}


