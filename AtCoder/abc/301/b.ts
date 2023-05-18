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

/**
 * Sort keys of numbers in ascending order
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
const keyAsc = (a: [number, number], b: [number, number]) => a[0] - b[0];

/**
 * Sort keys of numbers in descending order.
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
const keyDesc = (a: [number, number], b: [number, number]) => b[0] - a[0];

/**
 * Sort values of numbers in ascending order.
 *
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
const valueAsc = (a: [number, number], b: [number, number]) => a[0] - b[0];

/**
 * Sort values of numbers in descending order.
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number}
 */
const valueDesc = (a: [number, number], b: [number, number]) => b[0] - a[0];

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
  const A = lines[1].map(Number);
  const ans: number[] = [];

  for (let i = 0; i < N - 1; i++) {
    ans.push(A[i]);
    const d = A[i + 1] - A[i];
    if (Math.abs(d) === 1) {
      continue;
    }
    if (d > 0) {
      // 間を埋める数を挿入する
      for (let j = A[i] + 1; j < A[i + 1]; j++) {
        ans.push(j);
      }
    } else {
      // 間を埋める数を挿入する
      for (let j = A[i] - 1; j > A[i + 1]; j--) {
        ans.push(j);
      }
    }
  }
  ans.push(A[N - 1]);
  console.log(ans.join(' '));
});
