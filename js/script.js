console.log("Hej" + "  " + "Hej");
let buttonSpecial = document.querySelector(".js-button");

buttonSpecial.addEventListener("click" , () =>{
    buttonSpecial.classList.toggle("button__special");
    buttonSpecial.innerText === "Zmien wyglad przycisku" ? buttonSpecial.innerText = "Powrot" : buttonSpecial.innerText = "Zmien wyglad przycisku";
    });

let licza1 = 66;
let licza2 = 17;
let licza3 = 12;
let licza4 = 99;

if(licza1>=licza2 && licza1>=licza3 && licza1>=licza4){
    if(licza2>=licza3 && licza2>=licza4){
        if(licza3>=licza4){
           console.log("Od największej do najmniejszej: " + licza1 +" , "+ licza2+" , " + licza3 +" , "+licza4);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza1 +" , "+ licza2+" , " + licza4 +" , "+licza3);
        }
    }

    if(licza3>=licza2 && licza3>=licza4){
        if(licza2>=licza4){
           console.log("Od największej do najmniejszej: " + licza1 +" , "+ licza3+" , " + licza2 +" , "+licza4);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza1 +" , "+ licza3+" , " + licza4 +" , "+licza2);
        }
    }
    
    if(licza4>=licza2 && licza4>=licza3){
        if(licza3>=licza2){
           console.log("Od największej do najmniejszej: " + licza1 +" , "+ licza4+" , " + licza3 +" , "+licza2);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza1 +" , "+ licza4+" , " + licza2 +" , "+licza3);
        }
    }

}



if(licza2>=licza1 && licza2>=licza3 && licza2>=licza4){
    if(licza1>=licza3 && licza1>=licza4){
        if(licza3>=licza4){
           console.log("Od największej do najmniejszej: " + licza2 +" , "+ licza1+" , " + licza3 +" , "+licza4);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza2 +" , "+ licza1+" , " + licza4 +" , "+licza3);
        }
    }

    if(licza3>=licza1 && licza3>=licza4){
        if(licza1>=licza4){
           console.log("Od największej do najmniejszej: " + licza2 +" , "+ licza3+" , " + licza1 +" , "+licza4);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza2 +" , "+ licza3+" , " + licza4 +" , "+licza1);
        }
    }
    
    if(licza4>=licza1 && licza4>=licza3){
        if(licza3>=licza1){
           console.log("Od największej do najmniejszej: " + licza2 +" , "+ licza4+" , " + licza3 +" , "+licza1);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza2 +" , "+ licza4+" , " + licza1 +" , "+licza3);
        }
    }

}




if(licza3>=licza1 && licza3>=licza2 && licza3>=licza4){
    if(licza1>=licza2 && licza1>=licza4){
        if(licza2>=licza4){
           console.log("Od największej do najmniejszej: " + licza3 +" , "+ licza1+" , " + licza2 +" , "+licza4);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza3 +" , "+ licza1+" , " + licza4 +" , "+licza2);
        }
    }

    if(licza2>=licza1 && licza2>=licza4){
        if(licza1>=licza4){
           console.log("Od największej do najmniejszej: " + licza3 +" , "+ licza2+" , " + licza1 +" , "+licza4);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza3 +" , "+ licza2+" , " + licza4 +" , "+licza1);
        }
    }
    
    if(licza4>=licza2 && licza4>=licza1){
        if(licza1>=licza2){
           console.log("Od największej do najmniejszej: " + licza3 +" , "+ licza4+" , " + licza1 +" , "+licza2);
        }
        else{
            console.log("Od największej do najmniejszej: " + licza3 +" , "+ licza4+" , " + licza2 +" , "+licza1);
        }
    }
}


    if(licza4>=licza1 && licza4>=licza2 && licza4>=licza3){
        if(licza1>=licza2 && licza1>=licza3){
            if(licza2>=licza3){
               console.log("Od największej do najmniejszej: " + licza4 +" , "+ licza1+" , " + licza2 +" , "+licza3);
            }
            else{
                console.log("Od największej do najmniejszej: " + licza4 +" , "+ licza1+" , " + licza3 +" , "+licza2);
            }
        }
    
        if(licza2>=licza1 && licza2>=licza3){
            if(licza1>=licza3){
               console.log("Od największej do najmniejszej: " + licza4 +" , "+ licza2+" , " + licza1 +" , "+licza3);
            }
            else{
                console.log("Od największej do najmniejszej: " + licza4 +" , "+ licza2+" , " + licza3 +" , "+licza1);
            }
        }
        
        if(licza3>=licza1 && licza3>=licza2){
            if(licza1>=licza2){
               console.log("Od największej do najmniejszej: " + licza4 +" , "+ licza3+" , " + licza1 +" , "+licza2);
            }
            else{
                console.log("Od największej do najmniejszej: " + licza4 +" , "+ licza3+" , " + licza2 +" , "+licza1);
            }
        }
    
    }


let liczba5 = 8;

switch(liczba5){
    case(1): {
        console.log("Poniedziałek");
        break;
    }
    case(2): {
        console.log("Wtorek");
        break;
    }
    case(3): {
        console.log("Środa");
        break;
    }
    case(4): {
        console.log("Czwartek");
        break;
    }
    case(5): {
        console.log("Piątek");
        break;
    }
    case(6): {
        console.log("Sobota");
        break;
    }
    case(7): {
        console.log("Niedziela");
        break;
    }
    default: {
        console.log("Podaj liczbe od 1 do 7");
        break;
    }
}

let liczbaa = 12;
let liczbab = 8;

let suma1 = liczbaa>liczbab ? console.log("liczbaa jest wieksza") : console.log("liczbab jest wieksza");



