"use strict";

var datos = [];
var periodo = [];

function calcular() {
    var valorInicial = document.getElementById("valorInicial").value;
    var interes = document.getElementById("interes").value;
    var tiempo = document.getElementById("tiempo").value;
    var interesCalculado = valorInicial * (interes / 100) ** tiempo;
    document.getElementById("txtresult").innerHTML = interesCalculado;
}

function resultado() {
    var resultado = document.getElementById("resultado");
    document.getElementById("txtresult").innerHTML = resultado;
}

// generar uuid
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}