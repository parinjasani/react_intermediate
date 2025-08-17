const inputBox=document.querySelector("#input-box")
const listContainer=document.querySelector("#list-container")


function AddTask(){
    if(inputBox.value===""){
        alert("you must write something");
    }
    else{
        let li=document.createElement('li');
        li.innerText=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement("span")
        span.innerHTML="\u00d7"
        li.appendChild(span);
    }
    inputBox.value="";
    savedata();
}


listContainer.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName==='SPAN'){
       
        e.target.parentElement.remove();
        savedata()
    }
},false)


function savedata(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data")
}
showTask();
// console.log(localStorage.getItem("data"));