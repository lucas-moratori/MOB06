function estoque() {
    const totalEstoque = 3;
    let totalPedido = document.getElementById("qnt").value;
    let saidaPedido = document.getElementById("saida");

    if (totalPedido > totalEstoque) {
        saidaPedido.innerText = "❌ Estoque Insuficiente!";
       // saidaPedido.className = "não";
    } else 
        saidaPedido.innerText = "✅ Quantidade OK";
    //   saidaPedido.className = "sim";
}

