function sayHello() {
    console.log('Hello after 3 seconds!');
}
setTimeout(sayHello, 3000);  // Executes sayHello after 3 seconds
console.log("This message runs immediately while waiting for the 3 seconds.");