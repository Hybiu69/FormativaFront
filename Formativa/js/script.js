// Atividade 1: Alterar texto
function E1() {
    document.getElementById("mensagem").innerText = "Texto alterado com sucesso!";
}

// Atividade 2: Adicionar parágrafos
function E2() {
    const container = document.getElementById("container2");
    const p = document.createElement("p");
    p.innerText = "Novo parágrafo adicionado!";
    container.appendChild(p);
}

// Atividade 3: Adicionar botões
function E3() {
    const container = document.getElementById("container");
    const btn = document.createElement("button");
    btn.innerText = "Clique!";
    btn.onclick = () => alert("Você clicou em um botão dinâmico!");
    container.appendChild(btn);
}

// Atividade 4: Trocar classe
function E4() {
    const p = document.querySelector("#box p");
    p.classList.toggle("modal"); // Usando a classe 'modal' como exemplo
}

// Atividade 5: Adicionar itens à lista
function addItem() {
    const lista = document.getElementById("lista");
    const li = document.createElement("li");
    li.innerText = "Novo item";
    lista.appendChild(li);
}

// Atividade 6: Incrementar número
let contador = 0;
function incrementar() {
    contador++;
    document.getElementById("contador").innerText = contador;
}

// Atividade 7: Mostrar/Ocultar modal
function modal() {
    const m = document.getElementById("modal");
    if (m.style.display === "block") {
        m.style.display = "none";
    } else {
        m.style.display = "block";
    }
}

// Lista de Nomes (Extra: apenas para exemplo)
const nomes = ["Ana", "Carlos", "João", "Maria"];
const listaNomes = document.getElementById("greatings");
nomes.forEach(nome => {
    const li = document.createElement("li");
    li.innerText = `Olá, ${nome}!`;
    listaNomes.appendChild(li);
});

// Contar Pares (1, 4, 7, 10, 13, 16)
function par() {
    const numeros = [1, 4, 7, 10, 13, 16];
    const pares = numeros.filter(num => num % 2 === 0);
    document.getElementById("quantp").innerText = `Quantidade de pares: ${pares.length}`;
}
