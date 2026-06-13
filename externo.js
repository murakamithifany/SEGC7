function horaAtual() {
    const agora = new Date();
    document.getElementById("hora").innerText = "Hora atual: " + agora.toLocaleTimeString();
}
console.log("Script externo carregado!");