let paragrafo = document.getElementById("primPara")
let div = document.getElementById("div1")
let segParagrafo = document.getElementById("segPara")

paragrafo.textContent = "Novo texto"

function mudarParag(){
    paragrafo.textContent = "Novoknknkn texto"
}

function mudarCor(){
    paragrafo.style.color = "red"
}

function corIn(){
    div.style.backgroundColor= "red"
    segParagrafo.textContent= "Entrou na div"
}


function corOut(){
    div.style.backgroundColor= "green"
    segParagrafo.textContent="saiu da div :("
}



let btn = document.getElementById("btnEnviar")

