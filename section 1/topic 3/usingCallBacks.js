function greetUser(name, callback) {
  console.log("Hi, " + name);
  callback();
}

function askQuestion() {
  console.log("How are you today?");
}

greetUser("Sarah", askQuestion);