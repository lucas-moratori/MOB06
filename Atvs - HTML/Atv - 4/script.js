function processar() {
    const total = 100;
    let opcao = document.getElementById("pagamento").value;
    let saida = document.getElementById("saida");

    if (opcao === "pix") {
        let valor = total * 0.95;
        saida.innerText = "⚡ PIX: R$ " + valor.toFixed(2).replace(".", ",");
        saida.className = "pix";
    } else if (opcao === "cartão") {
        let valor = total * 0.95;
        saida.innerText = "💳 Cartão: R$ " + valor.toFixed(2).replace(".",",");
        saida.className = "cartão";
    } else {
        let valor = total * 0.90;
        saida.innerText = "💵 Dinheiro: R$" + valor.toFixed(2).replace(".",",");
        saida.className = "din";
    }
}
processar();
