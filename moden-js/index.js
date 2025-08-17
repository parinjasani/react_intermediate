// create elemet and add it
// let para=document.getElementsByClassName('para')

// let item=document.createElement('p')

// item.innerText="this is paragraph"

// para[0].appendChild(item)

//add event listener

// document.addEventListener('click',function(){
//     console.log("clicked action perform");
// })

//remove event listener

// function print(){
//     console.log("hello ji clicked you");
// }

// document.addEventListener('click',print);
// document.removeEventListener('click',print);

//how to prevent default 

// links=document.querySelectorAll('a')
// thirdlink=links[2];
// thirdlink.addEventListener('click',function(event){

//     event.preventDefault();
//     console.log('maza aya')
// })

// how to avoid many events


// myDiv=document.createElement('div');
// function printData(event){
//     console.log('click on para'+event.target.textContent);
// }
// myDiv.addEventListener('click',printData);

// for (let i=0;i<=100;i++){
//     textElement=document.createElement('p');
//     textElement.innerText='this is para' + i; 
//     myDiv.appendChild(textElement);
// }

// document.body.appendChild(myDiv);


//nodeNmae
element=document.querySelector("#problem");
element,addEventListener('click',function(event){
    if(event.target.nodeName=='SPAN'){
        console.log(event.target.textContent);
    }
})