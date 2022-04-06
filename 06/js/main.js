
const validCredentials ={
    username:'fdlondono16@gmail.com',
    password:'fr@nklin',
}

const myCredentials ={
    username:null,
    password:null,

}

const username = document.getElementById('inUsername');
const password = document.getElementById('InPassword');
const submit = document.getElementById('submitBtn');
const private = document.getElementById('private')
const modal = document.getElementById('staticBackdrop');
const close = document.getElementById('closeBtn');
const success = document.getElementById('success')
const error = document.getElementById('error')


//funciones

const handleinUsername = (event) =>{

myCredentials.username=event.target.value;
}

const handleinPassword= (event) =>{
myCredentials.password=event.target.value;

console.log(myCredentials)

};
const handleSubmitBtn = () => {
const username = myCredentials.username === validCredentials.username;
console.log (username)
const password = myCredentials.password === validCredentials.password;
console.log (password)

 if (username && password){


 console.log('permitir acceso');

private.classList.remove('disabled');
console.log(private)

//console.log(modal);
 console.log(close);

 //mostrar mensajes de login exitoso

 //success.classList.remove('d-none');

 //ocultar mensaje de login 

 //setTimeout(() => {
 //success.classList.add('d-none');
 //close.click();}, 5000 );


 }
else


console.log('denegar acceso');

 //mostrar error

//error.classList.remove.apply('d-none');

 //ocultar mensaje

 //setTimeout(() => {
 //error.classList.add('d-none');}, 5000);

}



//crear eventos

document.addEventListener('DOMContentLoaded', ()=> {
    username.addEventListener('input', handleinUsername);
    password.addEventListener('input', handleinPassword);
    submit.addEventListener('click' , handleSubmitBtn);
    
    
})