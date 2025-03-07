//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
    let inputAmigo = document.getElementById("amigo");
    let nome_do_amigo = inputAmigo.value;

    if(!nome_do_amigo){
        alert('Digite o nome do amigo');
        return;
    }
    amigos.push(nome_do_amigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    atualizarListaAmigos();
}

function atualizarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.textContent = "";

    for(let i = 0; i <= amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        listaAmigos.appendChild(item);
    }
}
function sortearAmigo(){
    if(amigos.length === 0){
        alert("Não há amigos adicionados!!!");
        return;
    }
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.textContent = `O amigo sorteado foi:${amigoSorteado}`;
    
    let limpaListaAmigos = document.getElementById("listaAmigos");
    limpaListaAmigos.textContent = "";
    amigos = [];
}



