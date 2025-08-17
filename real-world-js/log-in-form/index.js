document.getElementById('form-group')
.addEventListener('submit',function(event){
    event.preventDefault();
    const username=document.getElementById('username').value;
    const password=document.getElementById('password').value;

    if(username && password){
        alert("sucessfully register");
    }else{

        alert("plese fill the details");
    }

})