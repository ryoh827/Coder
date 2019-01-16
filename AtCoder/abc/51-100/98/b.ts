import * as fs from 'fs';

const input = (fs.readFileSync('/dev/stdin', 'utf8') as string).split('\n');

const N = +input[0];
const S = input[1];

const ans = {
  x: 0,
  y: 0,
  index: -1,
};
let maxCnt = 0;
for (let i = 0; i < N; i++) {
  const set = new Set();
  let cnt = 0;
  const x = S.substr(0, i);
  const y = S.substr(i);
  for (const c of x) {
    set.add(c);
  }
  for (const c of y) {
    if (set.has(c)) {
      set.delete(c);
      cnt += 1;
    }
  }
  maxCnt = Math.max(maxCnt, cnt);
}
console.log(maxCnt);
