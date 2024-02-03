#!/usr/bin/node
const anyArg = process.argv[2];
const newInt = parseInt(anyArg, 10);
if (isNaN(newInt)) {
  console.log('Not a number');
} else {
  console.log('My number:', newInt);
}
