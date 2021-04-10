const form = document.querySelector(".addform");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const birthDate= document.querySelector("#birth-date").value;
    const gender= document.querySelector("#gender").value;
   