const Game = require('./Game');
const Player = require('./Player');

const Pablito = new Player('Pablito');
const Juan = new Player('Juan');

const COD = new Game();

COD.join(Pablito);
COD.join(Juan);

Pablito.wins(20);
Juan.wins(100);
Juan.wins(10);
Juan.wins(50);
Juan.wins(90);
Juan.wins(250);
Juan.wins(100);

Pablito.wins(2000);

console.log('Score: ', COD.scoreGame());
console.log('El ganador: ', COD.getWinner().name, ' Puntos: ', COD.getWinner().points);

