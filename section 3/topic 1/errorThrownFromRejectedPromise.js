async function getNumber() {
  try {
    let result = await Promise.reject("Something went wrong");
    console.log(result);
  } catch (error) {
    console.error("Caught error:", error);
  }
}
getNumber();
