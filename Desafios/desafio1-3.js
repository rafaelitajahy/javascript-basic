function temHabilidade(skills) {
  var skill = skills.indexOf("Javascript");

  return skill >= 0;
}

var skills = ["Javascript", "ReactJS", "React Native"];
console.log(temHabilidade(skills));
