function f1() {
  console.log("f1")
}
function f2() {
  console.log("f2")
  f1();
}
function f3() {
  console.log("f3")
  f2();
}
f3();