const form = document.querySelector(".addform");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const birthDate= document.querySelector("#birth-date").value;
    const gender= document.querySelector("#gender").value;
    if (gender && birthDate){
        let spitValues = birthDate.split('-');
        const year= parseInt(spitValues[0]);
        const month= parseInt(spitValues[1]);
        const day= parseInt(spitValues[2]);
        let a = Math.floor((14-month)/12);
       