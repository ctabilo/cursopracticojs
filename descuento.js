function calcularDescuento() {

    var precioinicial = document.getElementById("precio");
    var porcentaje = document.getElementById("descuento");
    var cupondesc = document.getElementById("cupon").value;

    if (estaVacio(precioinicial.value) || estaVacio(porcentaje.value)) {
        alert("Debes ingresar los datos para hacer el cálculo");
    } else {
        var valordescuento = (parseInt(precioinicial.value) * parseInt(porcentaje.value)) / 100;
        var preciofinal = parseInt(precioinicial.value) - valordescuento;

        if ( ! estaVacio(cupondesc)) {
            var descuento_adicional = (preciofinal * descuentoCupon(cupondesc)) / 100;
            preciofinal = preciofinal - descuento_adicional;
        }

        document.getElementById("porc_desc").innerText = valordescuento;
        document.getElementById("precio_final").innerText = preciofinal;
        document.getElementById("descuento_cupon").innerText = descuento_adicional;
    }
}

function estaVacio(contenido){
    return (contenido == "");
}

function descuentoCupon(texto) {
    if (texto == "10PORCIENTO") {
        return 10;
    }
    else if (texto == "20PORCIENTO") {
        return 20;
    }
    else if (texto == "30PORCIENTO") {
        return 30;
    }
    else {
        alert("El cupón ingresado no es válido");
        document.getElementById("cupon").value = "NO VALIDO";
        return 0;
    } 

}