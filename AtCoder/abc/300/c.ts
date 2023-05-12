namespace AtCoder.abc.abc300.b {
  class Scanner {
    private buffer = '';
    private stdinQueue: any = [];

    constructor() {
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      process.stdin.on('data', (chunk): void => {
        this.buffer += chunk;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        while (this.stdinQueue.length > 0) {
          const i = this.buffer.indexOf('\n');
          if (i < 0) {
            break;
          }
          let line = this.buffer.substr(0, i);
          if (line.endsWith('\r')) {
            line = line.slice(0, -1);
          }
          this.buffer = this.buffer.substr(i + 1);

          // eslint-disable-next-line @typescript-eslint/no-unsafe-call , @typescript-eslint/no-unsafe-member-access
          this.stdinQueue.shift()(line);
        }
      });
    }
    public getLine(): Promise<string> {
      return new Promise((resolve, reject) => {
        const i = this.buffer.indexOf('\n');
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (i >= 0 && this.stdinQueue.length === 0) {
          let line = this.buffer.substr(0, i);
          if (line.endsWith('\r')) {
            line = line.slice(0, -1);
          }
          this.buffer = this.buffer.substr(i + 1);
          resolve(line);
        } else {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          this.stdinQueue.push(resolve);
        }
      });
    }

    public close(): void {
      process.stdin.pause();
    }
  }

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

  const fn: () => Promise<void> = async function solve() {
    const sc = new Scanner();

    const [H, W]: number[] = (await sc.getLine()).split(' ').map(Number);
    const N = Math.min(H, W);
    const C: string[][] = [];
    for (let i = 0; i < H; i++) {
      C[i] = (await sc.getLine()).split('');
    }

    const ans = Array(N).fill(0);
    for (let i = 1; i < H - 1; i++) {
      for (let j = 1; j < W - 1; j++) {
        // center is '.'
        if (C[i][j] === '.') {
          continue;
        }
        // 4 corners are '#'
        if (
          C[i + 1][j + 1] == '#' &&
          C[i + 1][j - 1] == '#' &&
          C[i - 1][j + 1] == '#' &&
          C[i - 1][j - 1] == '#'
        ) {
          for (let d = 2; d <= N; d++) {
            // over the edge
            if (i - d < 0 || j - d < 0 || i + d >= H || j + d >= W) {
              ans[d - 1 - 1]++;
              break;
            }
            // 4 corners are '#'
            if (
              C[i - d][j - d] == '#' &&
              C[i - d][j + d] == '#' &&
              C[i + d][j - d] == '#' &&
              C[i + d][j + d] == '#'
            ) {
              continue;
            } else {
              ans[d - 1 - 1]++;
              break;
            }
          }
        }
      }
    }
    console.log(ans.join(' '));

    sc.close();
  };

  void fn();
}
