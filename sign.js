let home = document.querySelector(".hm");
let menu = document.querySelector(".ri-menu-fill");
let arrow = document.querySelector(".arrow");
let input = document.querySelector(".input");
let password = document.querySelector(".password");
let two = document.querySelector(".google");
menu.addEventListener("click",() =>{
window.location.href ="menupage.html";
});
home.addEventListener("click",()=>{
    window.location.href ="index.html";
});
arrow.addEventListener("click",()=>
{
    if(input.value.length !== 10){
        input.value ="";
       input.placeholder ="ENTER CORRECT PH NO.";
       input.style.border ="2px solid red";
       input.focus();
       return;
    }
    else{
        password.focus();
    }
});
input.addEventListener("input",()=>{
    input.placeholder="enter your phone number";
    input.style.border="none";
});
two.addEventListener("click",()=>{
    input.value="";
    password.value="";
});