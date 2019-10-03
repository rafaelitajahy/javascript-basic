function add(x) {
  return x + 1 ;
};

add(4); //5

var square = function(x) {
  return x*x;
};

console.log(square(add(5)));

// Quando funções recebem as propriedades de um objeto, as
// chamamos de "métodos". Todos os objetos de JavaScript têm métodos:
var a = []; // Cria um array vazio
a.push(1,2,3); // O método push() adiciona elementos em um array
a.reverse(); // Outro método: inverte a ordem dos elementos

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao
// objeto no qual o método é definido: neste caso, o array de pontos anterior.

var points = [
  {x:0, y:2},
  {x:1, y:3},
];

points.dist = function() {
  var p1 = this[0];
  var p2 = this[1];
  var a = p2.x - p1.x;
  var b = p2.y - p1.y;
  return Math.sqrt(a*a + b*b);
};
console.log(points.dist());

