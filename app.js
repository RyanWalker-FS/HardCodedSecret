// app.js
const SECRET_KEY = "myHardCodedSecret123";

function greetUser(name) {
  return `Hello ${name}, your secret is ${SECRET_KEY}`;
}

console.log(greetUser("Walker"));
