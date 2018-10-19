var btnUno = document.querySelector('#btnUno');
btnUno.addEventListener('click',ejemplo1);

var resultado = document.querySelector('#resultado');
var inputNumero = document.querySelector('#numero');

var btnDos = document.querySelector('#btnDos');
btnDos.addEventListener('click',ejemplo2);

var btnTres = document.querySelector('#btnTres');
btnTres.addEventListener('click',ejemplo3);

var btnCuatro = document.querySelector('#btnCuatro')
btnCuatro.addEventListener('click',ejemplo4);

var opciones = document.querySelector('#opciones');

function ejemplo4() {
    var fin = Number(inputNumero.value);

    var i = fin;
    while (i>0) {
        var opc = document.createElement('option');
        opc.text = i;
        opciones.add(opc);

        i--;
        
    }
    
}

function ejemplo3() {
    var fin= Number(inputNumero.value);

    var i = 0;
    while(i < fin) {
        var row = resultado.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = i;

        i++;
    }
}


function ejemplo2() {
    var fin = Number(inputNumero.value);

    for(var i = 0; i < fin; i++){
        var valor = prompt("Ingresa un numero:" + i + "/" + fin+ ":");
        var row = resultado.insertRow(-1);
        var cell= row.insertCell(0);
        cell.innerHTML = valor;
    } 
    
}
function ejemplo1() {

    var fin = Number(inputNumero.value);
    for(var i = 0; i <= fin; i++){
        var row = resultado.insertRow(-1);
        var cell= row.insertCell(0);
        cell.innerHTML = i;
    }
    
}
