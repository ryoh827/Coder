import * as fs from 'fs';

const input = (fs.readFileSync('/dev/stdin', 'utf8') as string).split('\n');

const [a, b] = input[0].split(' ').map((x) => +x);
const t = Math.max(a - b, a + b, a * b);

console.log(t === -0 ? 0 : t);
