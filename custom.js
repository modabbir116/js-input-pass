let passInput = document.querySelector(".inputbox");
let inputBtn = document.querySelector(".btn");
let error = document.querySelector(".error")


inputBtn.addEventListener("click", function(){
   if(!passInput.value){
    passInput.style.border = "3px solid red"
    error.innerHTML = "Please Your Pasword"
   }
   else{
    if(passInput.type == "password"){
        passInput.type = "text"
        inputBtn.innerHTML = "Hide"
        passInput.style.border = ""
        error.innerHTML = ""
       }
       else{
        passInput.type = "password"
        inputBtn.innerHTML = "Show"
        passInput.style.border = ""
        error.innerHTML = ""
       }
   }
})