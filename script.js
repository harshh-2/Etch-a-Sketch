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

  
}


