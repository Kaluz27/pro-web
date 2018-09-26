
var tittle = document.querySelector('h1');
tittle.addEventListener('click', updateName);

function updateName(){
    var name= prompt('Nombre del jugador');
    tittle.textContent = 'Jugador 1: ' + name;
}
