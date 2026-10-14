// funçoes são blocos de codigo reutilizaveis

//função simples
function saudacao(){
    console.log("Oi")
}

// função com parametro
let nome = prompt("qual o seu nome")
function saudacao2(nome){
    console.log("oi " + nome)
}
saudacao2(nome)


function soma (num1 , num2){
    return num1+num2
}
let numr1= Number(prompt("Digite um número"))
let numr2= Number(prompt("Digite um número"))
console.log("A soma dos números é :" + soma(numr1,numr2))