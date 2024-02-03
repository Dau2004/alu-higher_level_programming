#!/usr/bin/node
const anyArg = process.argv[2];
const newInt = parseInt(anyArg, 10);
const textInput = 'C is fun';
if (isNaN(newInt)) {
  console.log('Missing numver of occurrences');
} else {
  for (let i = 0; i < newInt; i++) {
    console.log(textInput);
  }
}
