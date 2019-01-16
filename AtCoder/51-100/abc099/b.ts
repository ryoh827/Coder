import * as fs from 'fs';

const input = (fs.readFileSync('/dev/stdin', 'utf8') as string).split('\n');

const [a, b] = input[0].split(' ').map((x) => +x);

const d = b - a;

console.log((d * (d + 1)) / 2 - b);
