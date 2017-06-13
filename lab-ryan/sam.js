let strings = ['Sam', 'Ryan', 'Natalie', 'Rylee', 'Lenny', 'Mikey'];

let shortNames = strings.filter(function(name){
  if(name.length < 5) {
    return true;
  } else {
    return false;
  }
});

shortNames = strings.filter((name) => name.length < 5);
console.log(shortNames);
