import * as fs from "fs";
import * as path from "path";

if (process.argv.slice(2).length !== 2) {
  console.log("ERR: expected 2 arguments");
  console.log("usage: npm run start {amount} {fileName}");
  process.exit(1);
}

const fileName = process.argv.pop();
const filePath = path.join(__dirname, "../data/", fileName + ".txt");

const amount = parseInt(process.argv.pop() as string);
if (isNaN(amount)) {
  console.log("ERR: invalid amount of distinct characters inputted");
  console.log("usage: npm run start {amount} {fileName}");
  process.exit(1);
}

const signal = fs.readFileSync(filePath, "utf-8");

// skip the minimum amount of distinct characters
for (let i = amount; i < signal.length; i++) {
  let isValid = true;
  let text = "";

  // move from the start in sequence to the last character unless invalid
  for (let j = i - amount; j < i; j++) {
    // when text combination is not distinct
    if (text.includes(signal[j])) {
      isValid = false;
      break;
    }

    text += signal[j];
  }

  if (!isValid) {
    continue;
  }

  console.log("distinct characters:", text);
  console.log("first marker after character:", i);
  break;
}
