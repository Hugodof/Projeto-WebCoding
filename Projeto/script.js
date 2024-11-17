// Abrir ou fechar o card
function abrirCard(card) {
    card.classList.toggle("open");
}

// Filtrar receitas por texto digitado no input
function filtrarReceitas() {
    const input = document.getElementById("pesquisa");
    const filtro = input.value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const titulo = card.querySelector("h3").textContent.toLowerCase();
        if (titulo.includes(filtro)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// Expandir ou recolher todos os cards
function toggleTodos(acao) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
        if (acao === "abrir") {
            card.classList.add("open");
        } else if (acao === "fechar") {
            card.classList.remove("open");
        }
    });
}

// Alterar tema claro/escuro
function alternarTema() {
    const body = document.body;
    body.classList.toggle("tema-escuro");
}

// Exibir detalhes ao passar o mouse (tooltip)
function mostrarDetalhes(card, mensagem) {
    const tooltip = document.createElement("div");
    tooltip.classList.add("tooltip");
    tooltip.textContent = mensagem;
    document.body.appendChild(tooltip);

    // Posicionar o tooltip
    const rect = card.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight}px`;

    card.addEventListener("mouseleave", () => {
        tooltip.remove();
    });
}

const avaliacoes = {};

function avaliarReceita(select) {
    const card = select.closest(".card");
    const titulo = card.querySelector("h3").textContent;
    const nota = parseInt(select.value);

    if (!avaliacoes[titulo]) {
        avaliacoes[titulo] = [];
    }

    if (nota > 0) {
        avaliacoes[titulo].push(nota);

        const soma = avaliacoes[titulo].reduce((acc, curr) => acc + curr, 0);
        const media = (soma / avaliacoes[titulo].length).toFixed(1);

        const mediaNota = card.querySelector(".media-nota");
        mediaNota.textContent = `Média: ${media}`;
    }
}
