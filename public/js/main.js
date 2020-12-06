const number=document.getElementById('number'),
      text=document.getElementById('msg'),
      button=document.getElementById('button'),
      response=document.querySelector('.response');

button.addEventListener('click',send,false)      

function send(){
    const num=number.value.replace(/\D/g,'');
    const message=text.value;
    fetch('/',{
        method:'post',
        headers:{
            'Content-type':'application/json'
        },
        body:JSON.stringify({num:num,message:message})
    })
    .then(function(res){
        console.log(res);
    })
    .catch(function(err){
        console.log(err);
    })
}