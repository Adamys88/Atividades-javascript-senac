function verificarMeta() {

    let bolosVendidos = 35;
    let meta = 30;
    let resultado = "";

    if (bolosVendidos >= meta) {
        resultado += "A meta foi atingida! <br>";
    }

    if (bolosVendidos > meta) {
        resultado += "A meta foi superada!";
    }

    document.getElementById("resultado").innerHTML = resultado;
}    