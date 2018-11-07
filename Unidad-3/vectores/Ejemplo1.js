var InputNumero = document.querySelector('#Numero');
var btnUno=document.querySelector('#uno');
var tabla=document.querySelector('#tabla');


btnUno.addEventListener('click', uno);

function uno() {
    var t = Number(InputNumero.value);
    var v1= [];

    for(var i=0; i < t; i++){
        var n= prompt('Escribe un nùmero: ');
        v1[i] = n;

    }
    for(i = 0; i<v1.length; i++){
        var row= tabla.insertRow(-1);
        var cell = row.insertCell(0);
        var cell1=row.insertCell(1)
        cell.innerHTML = i;
        cell1.innerHTML = v1[i]
    }

    row=tabla.insertRow(-1)
    
    v1.forEach(function(valor){
        row=tabla.insertRow(-1);
        cell1=row.insertCell(0)
        cell1.innerHTML = valor
    })
}