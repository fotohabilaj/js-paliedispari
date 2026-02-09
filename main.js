console.log('vamos');



function palindetector(str){
    
const parola = str;
let alorap= []
for(let i= parola.length-1 ; i>=0; i--){
    const lettera= parola[i];
    alorap= alorap + lettera
    
}

if(parola===alorap){
    console.log(parola,'=',alorap,' palindromo rilevato');
    
} else {console.log('palindromo non rilevato');
}

}


const parola = 'aia';

palindetector(parola)
