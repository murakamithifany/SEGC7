function horaAtual() {
    alert("Clique detectado!");
    const agora = new Date();
    document.getElementById("hora").innerText =
        "Hora atual: " + agora.toLocaleTimeString();
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM carregado");

    const btn = document.getElementById("btnHora");
    console.log(btn);

    btn.addEventListener("click", horaAtual);
});

console.log("Script externo carregado!");