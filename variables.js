selectedWoman = null;
objectPeople = undefined;

var nome = "Rafael";
var idade = 32;
var peso = 80.5;
var humano = true;

var book = {
  topic: 'JavaScript',
  fat: true
};

// Acesse as propriedades de um objeto com . ou []:
console.log(book.topic);
console.log(book['fat']);
book.author = 'Rafael';
book.contents = {};
console.log(book);

// JavaScript também aceita arrays (listas indexadas numericamente) de valores.
var primes = [2, 3, 5, 7];
console.log(primes[0]);
console.log(primes.length);
primes[4] = 9;

// Os arrays e objetos podem conter outros arrays e objetos:

var points = [
  {x:0, y:0},
  {x:1, y:1}
];

var data = {
  trial1: [[1,2],[3,4]],
  trial2: [[2,3],[4,5]],
};


