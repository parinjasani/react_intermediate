let toastBox=document.getElementById('toastBox');

let successmsg='<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
let errormsg='<i class="fa-solid fa-circle-xmark"></i>please fixed the error !';
let invalidmsg='<i class="fa-solid fa-circle-exclamation"></i>invalid input,check again';

function showToasts(msg){
    let toast=document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=msg;
    toastBox.append(toast)

    if(msg.includes('error')){
        // console.log('error')
        toast.classList.add('error');
    }
    if(msg.includes('invalid')){
        // console.log('invalid')
        toast.classList.add('invalid');
    }

    setTimeout(()=>{
        toast.remove();
    },6000);
    
}