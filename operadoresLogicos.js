// AND , OR, NOT

var sexo = "M";
var idade = 40;

var masculino;

if (sexo === "F" && idade > 35) {
  masculino = false;
  console.log("Chegando no limite para engravidar!");
}

if (sexo !== "F") {
  masculino = true;
  console.log("Você não é do sexo feminino, não pode engravidar!");
}

if (sexo !== "F" || sexo === "M") {
  masculino = true;
  console.log("Você é do sexo masculino");
}

console.log(`Masculino: ${masculino}`);
