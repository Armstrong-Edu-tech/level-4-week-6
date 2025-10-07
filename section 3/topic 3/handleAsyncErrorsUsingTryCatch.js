// Simulated API function using Promises
function fakeApiCall() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Success: Data received.");
      } else {
        reject(new Error(" API Error: Something went wrong."));
      }
    }, 1000);
  });
}
// Async function using try/catch to handle errors
async function callApi() {
  try {
    const result = await fakeApiCall();
    console.log(result);
  } catch (error) {
    console.error("Caught using try/catch:", error.message);
  }
}
callApi();

