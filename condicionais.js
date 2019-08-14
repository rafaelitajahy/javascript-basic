//if
function retornaSexo(sexo) {
  if (sexo === "M") {
    return "Masculino";
  } else if (sexo === "F") {
    return "Feminino";
  } else {
    return "Não identificado...";
  }
}
var r = retornaSexo("M");
console.log(r);

//switch

function retornaSexo2(sexo) {
  switch (sexo) {
    case "M":
      return "Masculino";
    case "F":
      return "Feminino";
    default:
      return "Outro";
  }
}

var r = retornaSexo2("F");
console.log(r);
