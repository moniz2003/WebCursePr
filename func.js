/*
let lista=[];
for (let index = 0; index < 5; index++) {
    lista[0] = prompt("Digite elemento 1");; 

}
console.log(lista);


let list = ["monz","5","4"];
for (let element of list) {

    console.log(element);
    
}


let carro = {cor:"yellow", marca:"mercedes", modelo:"", matricula:"LD-05-89-AO"};
let palavra="";
document.writeln(carro.cor," " +carro.marca, " " ,carro.matricula);


function media(n1, n2) {

    let soma = n1 + n2;

    const media = soma / 2;

    return media;    
}

let n1 = prompt("Digite elemento 1");

let n2 = prompt("Digite elemento 2");

document.writeln("Sua Media é: " ,media(parseFloat(n1), parseFloat(n2)));
*/

function situacao(notanecessaria, notadoaluno) {
    
    if (notadoaluno >= notanecessaria) {
        
        return (" Está Apto");
    } else {
         return ("Vai Chorar no Colo da Mamã");
    }
}

let n1 = prompt("Digite elemento 1");
let n2 = prompt("Digite elemento 2");

let notadoaluno = (parseFloat(n1) + parseFloat(n2))/2;

const notanecessaria = 7;



document.writeln(`Com as notas ${n1} e ${n2} o aluno  ${situacao(notanecessaria, notadoaluno)}`);




