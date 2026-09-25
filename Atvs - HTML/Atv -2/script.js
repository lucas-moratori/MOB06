function mudarPreço() {
    let qnt = document.getElementById("qntd").value;
    let preço = 29.00;
    let final = (qnt * preço);
    document.getElementById("total").innerText = "Total: " + "R$ " + final.toFixed(2).replace('.', ',');
}
mudarPreço();