// Define uma função construtora para inicializar um novo objeto Point
function Point(x, y) {
  this.x = x;
  this.y = y;
}
// Usa uma função construtora com a palavra-chave "new" para criar instâncias
var p = new Point(1,1);

// Define métodos para objetos Point atribuindo-os ao objeto
// prototype associado à função construtora.
Point.prototype.r = function(){
  return Math.sqrt(
    this.x * this.x + this.y * this.y
  );
};

p.r();