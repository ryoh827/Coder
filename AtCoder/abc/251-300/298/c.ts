import * as readline from 'readline';

/**
 * Rotate a 2D array 90 degrees clockwise.
 *
 * @param {T[][]}
 * @returns {T[][]}
 */
const rotate = function <T>(array: T[][]): T[][] {
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

/**
 * Sort numbers in ascending order.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const asc = (a: number, b: number) => a - b;

/**
 * Sort numbers in descending order.
 *
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
const desc = (a: number, b: number) => b - a;

const lines: string[][] = [];
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.on('line', function (line) {
  lines.push(line.split(' '));
});

reader.on('close', function () {
  const N = +lines[0][0];
  const Q = +lines[1][0];
  const queries: number[][] = [];

  for (let i = 2; i < Q + 2; i++) {
    queries[i - 2] = lines[i].map((v) => +v) as [number, number, number];
  }

  const box: number[][] = Array.from<unknown, number[]>(
    { length: N },
    (_, _i) => []
  );

  const boxHasNumbers: {
    [n: number]: Map<number, number>;
  } = {};

  for (const q of queries) {
    if (q[0] === 1) {
      box[q[2] - 1].push(q[1]);
      boxHasNumbers[q[1] - 1] =
        boxHasNumbers[q[1] - 1] || new Map<number, number>();
      const bhn = boxHasNumbers[q[1] - 1];
      bhn.set(q[2], q[1]);
    } else if (q[0] === 2) {
      console.log(box[q[1] - 1].sort(asc).join(' '));
    } else if (q[0] === 3) {
      console.log([...boxHasNumbers[q[1] - 1].keys()].sort(asc).join(' '));
    }
  }
});
