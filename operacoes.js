// Os operadores aritméticos são os mais comuns:
3 + 2 // => 5: adição
3 - 2 // => 1: subtração
3 * 2 // => 6: multiplicação
3 / 2 // => 1.5: divisão
var points = [
  {x:0},
  {x:1}
];
points[1].x - points[0].x // => 1: operandos mais complicados também funcionam
"3" + "2" // => "32": + soma números, ou concatena strings
console.log('3' - '2'); // 1

// JavaScript define alguns operadores aritméticos de forma abreviada
var count = 0; // Define uma variável
count++; // Incrementa a variável
count--; // Decrementa a variável
count += 2; // Soma 2: o mesmo que count = count + 2;
count *= 3; // Multiplica por 3: o mesmo que count = count * 3;
count // => 6: nomes de variáveis também são expressões.