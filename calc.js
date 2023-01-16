"use strict";

var datos = [];
var periodo = [];

function calcular() {
    var valorInicial = document.getElementById("valorInicial").value;
    var interes = document.getElementById("interes").value;
    var tiempo = document.getElementById("tiempo").value;
    var interesCalculado = valorInicial * (interes / 100) ** tiempo;
    datos.add(interesCalculado);
}

function resultado() {
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = datos;
}