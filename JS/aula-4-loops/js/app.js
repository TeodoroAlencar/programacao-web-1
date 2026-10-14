console.log("Seja bem vindo a estrutura do for")
// Estrutura for loop
/* 
Se divide em 3 partes
1° parte - variavel contadora
2° parte - condição
3° parte - incremento
*/

for(let i = 0; i <= 5; i++){
    console.log(`${i}° numero for `)
}
let numero = Number(prompt("Escolha o número da sua tabuada"))
for(let i = 0; i<= 10; i++){
    if(i == 5){

        // para o codigo
        break
    }
    
    console.log(`${i} x ${numero} = ${i*numero} `)

}

