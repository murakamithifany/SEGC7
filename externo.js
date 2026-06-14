document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("btnGithub");
    const resultado = document.getElementById("resultado");

    botao.addEventListener("click", () => {
        const agora = new Date();

        resultado.textContent =
            "Script carregado do GitHub! Hora atual: " +
            agora.toLocaleTimeString("pt-BR");
    });
});