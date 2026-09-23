function mostrarVolume() {
    let volume = document.getElementById("volume").value;
    document.getElementById("saida").innerText =
        "🔊 Volume: " + volume + "%";
}