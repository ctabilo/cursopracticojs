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
    console.log(bd);
});

document.getElementById("datos").innerHTML = bd;

