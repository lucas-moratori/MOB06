function estoque() {
    const totalEstoque = 3;
    let totalPedido = document.getElementById("qnt").value;
    let saida = document.getElementById("saida");

    if (totalPedido > totalEstoque) {
        saida.innerText = "❌ Estoque Insuficiente!";
        saida.className = "no";
    } else {
        saida.innerText = "✅ Quantidade OK";
        saida.className = "ok";
    }
}
estoque();


