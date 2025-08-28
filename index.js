/*
vf = prompt("Digite um valor ?  ");
            document.writeln(vf+" e ");
            
pq = prompt("Digite o 2 valor ? ");
            document.writeln(pq); 

    if (vf % pq == 0 ) {
            document.writeln(`</br> ${vf} E divisivel por  ${pq}`);
    } 
    else { 
        document.writeln(`</br> ${vf} Nao é divisivel por ${pq}`);
    }

   
let v2 = prompt("Digite um valor");
if (v2 > 10) {
        document.writeln(`</br> ${v2} é maior que 10`);
}
else {

        for (let v1 = v2; v1 < 10; v1++) {
                document.writeln(`</br> ${v1} é menor de 10`);

        }

}


let v1 = prompt("Digite um valor");
while (v1 <= 100) {
        document.writeln(`</br> ${v1} Proximo`);
        v1++;
}
if (v1 > 100) {
        document.writeln(`</br> ${v1} Maior de 100`);
}
 

let v1 = prompt("Digite um valor :");
do { document.writeln(`</br> ${v1} Proximo`);
        v1++;
        
} while (v1 <= 100);


let nome = prompt("Digite o seu nome");
             console.log(nome);

let idade = prompt("Digite o sua idade");
            console.log(idade);

let peso = prompt("Digite o seu peso");
           console.log(peso);

let altura = prompt("Digite o sua altura");
           console.log(altura);

document.writeln(`O seu nome é ${nome}, </br> tens ${idade} anos de idade pesas ${peso} kg e tens ${altura} de altura`);

console.log("O seu nome é " +nome, " " +idade, "seu peso é " +peso, " " +altura);


const n1 = prompt("Digite a Nota1");
const n2 = prompt("Digite a Nota2");
const n3 = prompt("Digite a Nota3");

const media  = (parseFloat(n1) + parseFloat(n2) + parseFloat(n3)) /3;
        console.log("Primeiro numero: " +n1, "Segundo numero: " +n2, "TERCEIRO NUMERO: " +n3, "a sua media é " +media);

const n1 = prompt("Digite a Nota1");
const n2 = prompt("Digite a Nota2");

const soma = (parseFloat(n1) + parseFloat(n2));
const sub = (n1 - n2);
const div = (n1 / n2);
const mult = (n1 * n2);

document.writeln(`A soma da ${soma}, </br> a subtrção da ${sub}  </br> a divisão dá ${div}  </br> e a multiplicação ${mult}`);


let idade = prompt("Digite a sua idade: ");
        const ano = (2025 - parseInt(idade));
 console.log("Com " +idade, " anos de idade voce nasceu em " +ano);


const idade = parseInt(prompt("Digite a sua idade: "));

if (isNaN(idade)) {
        document.writeln("Não é um valor numerico");
} else {if (idade >= 18) {
        document.writeln("Você é maior de idade");
        } else {
                document.writeln("Você é menor de idade");
        }
}
*/
