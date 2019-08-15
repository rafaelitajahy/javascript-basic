function pessoa(nome) {
  this.nome = nome;
  this.greeting = function() {
    console.log("Hi! I'm" + this.nome + ".");
  };
}

var pessoa1 = new pessoa("Rafael Itajahy");

pessoa1.greeting();
console.log(pessoa1.nome);
