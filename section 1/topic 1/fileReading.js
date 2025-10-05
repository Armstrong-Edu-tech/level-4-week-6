// Incorrect:
// const fs = require('fs');
// fs.readFileSync('file.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// Correct:
const fs = require('fs').promises;
async function readFile() {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
readFile();
