var nome = 'Aldo';
let tipo = 'cliente'
const numero = 3.14;

document.getElementById('concatena').innerHTML = `${nome}, ${tipo}, ${numero}`;
var nome2 = nome + ', ' + tipo + ', '+ numero;
document.getElementById('concatena2').innerHTML = nome2;

var boh = 'Mario'
document.getElementById('var').innerHTML = boh;

var boh = 'Carla';
document.getElementById('let').innerHTML = boh;

var boh = 'Mario';
document.getElementById('final').innerHTML = boh;


var boh = 'Carla';

{
    let boh = 'Mario';
    document.getElementById('let2').innerHTML = boh;
}

document.getElementById('let3').innerHTML = boh;
document.getElementById('final2').innerHTML = boh;

var numeri = 15;
document.getElementById('iniziale').innerHTML += numeri;

var numeri2 = numeri+numeri;
document.getElementById('valore1').innerHTML += (numeri2) + ',' + (++numeri2);

var numero10 = numeri-10
document.getElementById('valore2').innerHTML += (numeri-10) + ', ' + (--numero10);


document.getElementById('valore3').innerHTML += (numeri*3);

document.getElementById('valore4').innerHTML += (numeri/3);

document.getElementById('valore5').innerHTML += (numeri) + ' è un numero' ;






