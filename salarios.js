var sueldoschile =[];
sueldoschile.push({
    nombre:"Cristian",
    sueldo: 800000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Jaqueline",
    sueldo: 350000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"David",
    sueldo: 500000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Pedro",
    sueldo: 200000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Maria",
    sueldo: 900000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"Julieta",
    sueldo: 100000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"Rodrigo",
    sueldo: 1000000,
    Genero: "Masculino",
});
sueldoschile.push({
    nombre:"Javier",
    sueldo: 950000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Claudio",
    sueldo: 1200000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Jose",
    sueldo: 700000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Raul",
    sueldo: 1500000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Pamela",
    sueldo: 1500000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"Veronica",
    sueldo: 1400000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"Soledad",
    sueldo: 1300000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"Gabriela",
    sueldo: 400000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"Karina",
    sueldo: 400000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"Carlos",
    sueldo: 850000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Alvaro",
    sueldo: 850000,
    Genero: "Masculino",
});

sueldoschile.push({
    nombre:"Lily",
    sueldo: 1000000,
    Genero: "Femenino",
});

sueldoschile.push({
    nombre:"Carolina",
    sueldo: 350000,
    Genero: "Femenino",
});

var bd ="";

sueldoschile.forEach(function(dato){
       
    bd= bd + "<br>" + dato.nombre + ", " + dato.Genero + ", " + dato.sueldo + "</br>";
});

document.getElementById("datos").innerHTML = bd;

var sueldos = sueldoschile.map(({sueldo}) => sueldo).sort(function (a , b) { return a - b});

function esPar(numero) {
    if (numero % 2 == 0) {
        return true
    } else {
        return false
    }
}

function calcularPromedio(){
    document.getElementById("promedio").innerText = sueldos.reduce((acumulador , salario) => acumulador + salario, 0) / sueldoschile.length;
}

function calcularMediana(){
    var mitad = parseInt((sueldos.length) / 2);
    
    if (esPar(sueldos.length)) {
        var numero1 = sueldos[mitad];
        var numero2 = sueldos[mitad - 1];

        document.getElementById("mediana").innerText = parseInt((numero1 + numero2)/2);

    } else {    
        document.getElementById("mediana").innerText = sueldos[mitad-1];
    }

}

function calcularModa() {
    var contador ={};

    sueldos.map(
        function(valor) {
            
        }
    )
}
