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
        let y = year-a;
        let m= month + 12 * a-2;
        let output= (day + y + Math.floor(y/100)+ Math.floor(year/400) + Math.floor(31 * m/12))% 7 ;
        const dayArray=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
        let femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
        if (gender==="male"){
            alert(`You were born on ${dayArray[output]} and your Akan name is ${maleNames[output]}` );
        }
        else if(gender==="female"){
            alert(`You were born on ${dayArray[output]} and your Akan name is ${femaleNames[output]}`);
        }
        else{
            alert("Choose your gender");
        }       
    }
    else{
        alert("Insert your BirthDay");
    }
 
}
)
