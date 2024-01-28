const botao = document.querySelector(".btnPlataforma");
const elementoPlataformas = document.querySelector(".btnPlataforma .Plataformas");
botao.addEventListener("click",() => {
    elementoPlataformas.classList.toggle("Ativo")
} );