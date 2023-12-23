function generarNumeros() {
    var numeros = [];
    for (var i = 0; i < 6; i++) {
        var numero = Math.floor(Math.random() * 46);
        while (numeros.includes(numero)) {
            numero = Math.floor(Math.random() * 46);
        }
        numeros.push(numero);
    }
    document.getElementById("numeros").innerHTML = numeros.join(", ");
}

document.getElementById("generar").addEventListener("click", generarNumeros);
