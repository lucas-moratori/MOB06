function testar() {
    let n = document.getElementById("nome").value
    document.getElementById("resultado").textContent = n;
}

function limpar() {
    document.getElementById("resultado").textContent = "";
    document.getElementById("nome").value = "";
}