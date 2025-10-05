// Incorrect:

// setTimeout(() => {
//   console.log("This will run after 2 seconds");
// }, 2000);

// Correct:

async function runTimer() {
  console.log("Start");
  await new Promise(resolve => setTimeout(resolve, 2000));
  console.log("This will run after 2 seconds");
}
runTimer();
