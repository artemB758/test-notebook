let button = document.querySelector(".button");
let opton = document.getElementById("select");
let select = document.getElementById("option");
let para = document.getElementById("b-text");
let output = document.getElementById("sub");



opton.style.visibility = "hidden";
select.style.visibility= "hidden";
para.style.visibility = "hidden";
output.style.visibility = "hidden";




button.addEventListener("click", openOption);

function openOption(){
    if(button){
        opton.style.visibility = "visible";
        select.style.visibility= "visible";
    }
    
    
    
}

let selectValue = document.querySelector(".va")

select.addEventListener("click", optionSelect);

function optionSelect() {
    if(selectValue){
        para.style.visibility = "visible";
        output.style.visibility = "visible";
    }

}

output.addEventListener("click", outputSave);



let ul = document.createElement("ul");
   ul.classList.add("ul");

function outputSave(){
    
   let li = document.createElement("li");
   li.innerHTML = para.value;
   ul.appendChild(li);
   document.body.appendChild(ul); 
   
   if(li.innerHTML.length > 10){
    alert("Длинная строка");
    li.remove();
   }
       
}

