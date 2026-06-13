function horaAtual() {
    const agora = new Date();
    document.getElementById("hora").innerText =
        "Hora atual: " + agora.toLocaleTimeString();
}

document.addEventListener("DOMContentLoaded", function () {
    document
        .getElementById("btnHora")
        .addEventListener("click", horaAtual);
});

console.log("Script externo carregado!");