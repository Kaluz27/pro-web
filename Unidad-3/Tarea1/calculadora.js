var btnSumar = document.querySelector('#sumar');
btnSumar.addEventListener('click', sumar);

var btnRestar = document.querySelector('#restar');
btnRestar.addEventListener('click', restar);

var btnMultiplicar = document.querySelector('#multiplicar');
btnMultiplicar.addEventListener('click', multiplicar);

var btnDividir = document.querySelector('#dividir');
btnDividir.addEventListener('click', dividir);


function sumar(){
    var inputNumero1 = document.querySelector('#numero1');

    var imputNumero2 = document.querySelector('#numero2');

    var resultado = Number(inputNumero1.value) + Number(inputNumero2.value);
    
    var inputResultado = documento.querySelector('resultado');
    
    inputResultado.value=resultado;
}