const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();

const sayHello1 = function (name) {
  console.log("Hello, " + name);
}

sayHello1("Lucy")

const sayHelloToConsole = function (name) {
  console.log("Hello, " + name);
}

sayHelloToConsole("John");

const returnSayhello = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayhello("John");
console.log(greeting)