"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
if (process.argv.slice(2).length !== 2) {
    console.log("ERR: expected 2 arguments");
    console.log("usage: npm run start {amount} {fileName}");
    process.exit(1);
}
const fileName = process.argv.pop();
const filePath = path.join(__dirname, "../data/", fileName + ".txt");
const amount = parseInt(process.argv.pop());
if (isNaN(amount)) {
    console.log("ERR: invalid amount of distinct characters inputted");
    console.log("usage: npm run start {amount} {fileName}");
    process.exit(1);
}
const signal = fs.readFileSync(filePath, "utf-8");
for (let i = amount; i < signal.length; i++) {
    let isValid = true;
    let text = "";
    for (let j = i - amount; j < i; j++) {
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
