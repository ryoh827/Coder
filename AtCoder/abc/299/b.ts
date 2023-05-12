namespace AtCoder.abc.abc299.b {
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

    const [N, T] = (await sc.getLine()).split(' ').map(Number);

    const C: number[] = (await sc.getLine()).split(' ').map(Number);
    const R: number[] = (await sc.getLine()).split(' ').map(Number);

    const table: { [n: string]: { player: number; value: number }[] } = {};

    C.map((e, i) => {
      table[e] = table[e] || [];
      table[e].push({ player: i + 1, value: R[i] });
    });

    Object.keys(table).map((k) => {
      table[k].sort((a, b) => b.value - a.value);
    });

    if (table[T] != undefined && table[T].length != 0) {
      console.log(table[T][0].player);
    } else {
      const t = C[0];
      console.log(table[t][0].player);
    }
    sc.close();
  };

  void fn();
}
