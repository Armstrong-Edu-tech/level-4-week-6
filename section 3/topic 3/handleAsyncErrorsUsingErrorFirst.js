// Simulated API function using error-first callback
function fakeApiCallCb(callback) {
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback(null, "Success: Data received.");
    } else {
      callback(new Error("API Error: Something went wrong."), null);
    }
  }, 1000);
}

// Using the callback function to handle result or error
fakeApiCallCb(function (err, data) {
  if (err) {
    console.error("Caught using callback:", err.message);
    return;
  }
  console.log(data);
});
