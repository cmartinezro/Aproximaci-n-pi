'use strict'
let ymin = 0;
let ymax = 2;
let xmin = 0;
let xmax = 2;
//circulo
let cx = 0
let cy = 0
let ra = 0
//contadores
let c1 = 0
let c2 = 0
//iteraciones
let it = 3000
let td = 100
//valorpi
let pi = 0
let vlpi = [];
//arreglos
let cont1 = [];
let con2 = [];
let ite = [];
let numdar = [];
let acudra = 0;

function tirodedardo(_a, _b, r) {
    let y = (Math.random() * (ymax - ymin) + ymin).toFixed(8);
    let x = (Math.random() * (xmax - xmin) + xmin).toFixed(8);
    if ((x - _a) * (x - _a) + (y - _b) * (y - _b) <= r * r) {
        c2++;
    } else {
        c1++;
    }
}
function gtabla() {
    let tabla = "<table><thead><tr><th>Numero de iteracion</th><th>Cantidad de dardos</th><th>Numero de dardos en el circulo</th><th>Numero de dardos en el cuadrado</th><th>Valor aproximado de π</th></tr><t/head><tbody>";
    for (let i = 1; i < ite.length; i++) {
        tabla += "<tr>";
        tabla += "<td>" + ite[i] + "</td>";
        tabla += "<td>" + numdar[i] + "</td>";
        tabla += "<td>" + con2[i] + "</td>";
        tabla += "<td>" + cont1[i] + "</td>";
        tabla += "<td>" + vlpi[i] + "</td>";
        tabla += "</tr>";
    }
    tabla += "</tbody><table>";
    document.getElementById("tablad").innerHTML = tabla;

}

cx = xmax / 2;
cy = ymax / 2;
ra = cx;
acudra = (xmax * ymax);
for (let i = 1; i <= it; i++) {
    c1 = 0;
    c2 = 0;
    for (let j = 1; j <= td; j++) {
        tirodedardo(cx, cy, ra);
    }
    pi = (c2 / (c1 + c2) * acudra).toFixed(10);
    vlpi[i] = pi;
    cont1[i] = c1        ;
    con2[i] = c2;
    ite[i] = i;
    numdar[i] = td;
    td = td + 100;
}
gtabla();

const ctx = document.getElementById('graficopi').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({ length: vlpi.length }, (_, i) => i.toString()),
        datasets: [{
            label: 'Aproximacion de pi obtenida',
            data: vlpi,
            borderColor: 'blue',
            fill: false
        }, {
            label: 'Valor de pi',
            data: Array.from({ length: vlpi.length }, (_) => Math.PI.toFixed(10)),
            borderColor: 'red',
            fill: false
        }]
    },


    options: {
        responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    suggestedMax: 3000000,
                    suggestedMin: 100
                }
            }]
        }
    }



});
