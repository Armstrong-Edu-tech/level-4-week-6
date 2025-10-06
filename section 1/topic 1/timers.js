function A() {
  setTimeout(function() {
    console.log("A1");
  }, 5000);
  console.log("A2");
}

function B() {
  setTimeout(function() {
    console.log("B1");
  }, 3000);
  console.log("B2");
}

function C() {
  setTimeout(function() {
    console.log("C1");
  }, 1000);
  console.log("C2");
}

A();
B();
C();