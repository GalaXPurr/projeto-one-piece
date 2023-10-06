const botoes = document.querySelectorAll('.botao')

// OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
// passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {

        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado")

        botao.classList.add("selecionado");

        DesselecionarBotao();
        desselecionarPersonagem(indice);
    })
})

function desselecionarPersonagem(indice) {
    personagens[indice].classList.add("selecionado");
}

function DesselecionarBotao() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");
    personagemSelecionado.classList.remove("selecionado");
}
