import * as fs from 'fs';

const input = (fs.readFileSync('/dev/stdin', 'utf8') as string).split('\n');

const N = +input[0];

if (N < 1000) {
  console.log('ABC');
} else {
  console.log('ABD');
}
