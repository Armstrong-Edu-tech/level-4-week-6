function calculateTask(input, callback) {
  setTimeout(() => {
    const result = input * 2;
    console.log("Step 1: Calculating...");
    callback(result);
  }, 1000);
}
function addTask(result, callback) {
  setTimeout(() => {
    const newResult = result + 5;
    console.log("Step 2: Adding...");
    callback(newResult);
  }, 1000);
}
function multiplyTask(result, callback) {
  setTimeout(() => {
    const newResult = result * 3;
    console.log("Step 3: Multiplying...");
    callback(newResult);
  }, 1000);
}
//  Nested callbacks — Callback Hell structure
calculateTask(5, function (result1) {
  addTask(result1, function (result2) {
    multiplyTask(result2, function (finalResult) {
      console.log("Final Result:", finalResult);
    });
  });
});
