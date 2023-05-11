import * as readline from 'readline';

const rotate = function (array: number[][]): number[][] {
  const ROW = array.length;
  const COL = array[0].length;
  const col = COL - 1;
  const a = [];
  for (let c = 0; c < COL; c++) {
    a[c] = [];
    for (let r = 0; r < ROW; r++) {
      a[c][r] = array[r][col - c];
    }
  }
  return a;
};

const lines: string[][] = [];
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', function (line) {
  lines.push(line.split(' '));
});

reader.on('close', function () {
  const N = parseInt(lines[0][0]);
  const S = lines[1][0];

  let ans = -1;
  if (S.indexOf('-') !== -1 && S.indexOf('o') !== -1 && N != 1) {
    const max = Math.max(
      ...S.split('-')
        .map((s) => s.length)
        .filter((c) => c > 0)
    );
    ans = max;
  }

  console.log(ans);
});
