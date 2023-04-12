import * as fs from "fs";
import * as path from "path";

const fileName = process.argv.pop();
const filePath = path.join(__dirname, "../data/", fileName + ".txt");

const signal = fs.readFileSync(filePath, "utf-8");

for (let i = 4; i < signal.length; i++) {
  let isValid = true;
  let text = "";

  for (let j = i - 4; j <= i; j++) {
    if (text.includes(signal[j])) {
      isValid = false;
      break;
    }

    text += signal[j];
  }

  if (!isValid) {
    continue;
  }

  console.log(text);
  console.log(i);
  break;
}
