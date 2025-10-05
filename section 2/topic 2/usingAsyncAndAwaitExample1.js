function resolveAfterTwoSeconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}
async function asyncCall() {
  console.log("calling");
  const result = await resolveAfterTwoSeconds();
  console.log(result);
  // Expected output: "resolved"
}
asyncCall();