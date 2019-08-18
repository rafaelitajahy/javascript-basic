function skillsUsers(users) {
  var r = "";
  for (const user of users) {
    r += `O ${user.name} possui as habilidades: ${user.skills.join(", ")}`;
  }
  return r;
}

var users = [
  {
    name: "Diego",
    skills: ["Javascript", "ReactJS", "Redux"]
  },
  {
    name: "Gabriel",
    skills: ["VueJS", "Ruby on Rails", "Elixir"]
  }
];

console.log(skillsUsers(users));
