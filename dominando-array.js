//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

function properties(caption, property) {
  console.log(`${caption}: ${property}`);
}

//SintaxeSeção
var names = [
  'Rafael',
  'Mariane',
  'Elisa',
  'Gabriel',
  'Cleusa',
  'Janer',
  'Flávio',
  'Alinne',
  'Thaiane',
  'Tom'
];

var fruits = new Array('Maçã', 'Laranja');
properties('Array', fruits);

var cars = new Array(5);
properties('Array', cars);

//array size
properties('Length', names.length);

//Acessar um item (index) do Array
var name = names[0];
var lasName = names[names.length - 1];

//Iterar um Array

names.forEach(function(item, indice, array) {
  console.log(item, indice);
});

//Adicionar um item ao final do Array
names.push('Adair');
properties('Array', names);

//Remover um item do final do Array
names.pop();
properties('Array', names);

//Remover do início do Array
names.shift();
properties('Array', names);

//Adicionar ao início do Array
names.unshift('Adair');
properties('Array', names);

//Procurar o índice de um item na Array
properties('IndexOf', names.indexOf('Mariane'));

//Remover um item pela posição do índice
properties('Splice', names.splice(0, 1));

//Copiar um Array
var copyNames = names.slice();
properties('Slice', copyNames);

//Exibir elementos
properties('Object.keys', Object.keys(names));

//object

var people = {
  name: 'Rafael',
  array: [1, 2, 3, 4]
};
properties('Object', people['name']);
properties('Object', people['array']);

//RegExp
var minhaRegex = /d(b+)(d)/i;
var meuArray = minhaRegex.exec('cbdBdbsbz');
properties('Arry RegExp', meuArray);

//buscando propriedade objeto em array

var smartphones = [
  {
    id: '1',
    marca: 'Samsung',
    modelo: 'S10'
  },
  {
    id: '2',
    marca: 'Motorola',
    modelo: 'Moto X4'
  }
];

var smartphone = smartphones.find(s => s.id == '1');
console.log(smartphone);
