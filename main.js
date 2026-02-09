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



const even= true;
const numb= 2;

const pc_rndm= Math.floor(Math.random()*5+1);
const sum=pc_rndm+numb;
console.log(pc_rndm,numb);

function odd_or_even_game(num){
    const number= num;
    if(num % 2===0){
        console.log(number,'è pari');
        if(even==true){console.log('hai vinto');
        } else{console.log('il pc vince')}
    }  else {console.log(number,'è dispari');
        if(even==false){console.log('hai vinto');
        } else{console.log('il pc vince')}
    }
}
odd_or_even_game(sum)

