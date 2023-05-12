namespace Coder {
  class Scanner {
    private buffer: string = '';
    private stdinQueue: any = [];

    constructor() {
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      process.stdin.on('data', (chunk): void => {
        this.buffer += chunk;
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
          this.stdinQueue.shift()(line);
        }
      });
    }
    public getLine(): Promise<string> {
      return new Promise((resolve, reject) => {
        const i = this.buffer.indexOf('\n');
        if (i >= 0 && this.stdinQueue.length === 0) {
          let line = this.buffer.substr(0, i);
          if (line.endsWith('\r')) {
            line = line.slice(0, -1);
          }
          this.buffer = this.buffer.substr(i + 1);
          resolve(line);
        } else {
          this.stdinQueue.push(resolve);
        }
      });
    }

    public close(): void {
      process.stdin.pause();
    }
  }

  async function solve() {
    const sc = new Scanner();

    const [r, c]: number[] = (await sc.getLine()).split(' ').map(Number);
    const stage: string[][] = [];

    for (let i = 0; i < r; i++) {
      stage[i] = (await sc.getLine()).split('');
    }

    for (let i: number = 0; i < r; i++) {
      for (let j: number = 0; j < c; j++) {
        if (['.', '#'].includes(stage[i][j])) {
          continue;
        }
        const potency: number = Number(stage[i][j]);
        stage[i][j] = '.';
        for (let k = 0; k <= potency; k++) {
          const l = potency - k;

          const y1 = Math.min(i + k, r - 1);
          const y2 = Math.max(i - k, 0);

          const x1 = Math.min(j + l, c - 1);
          const x2 = Math.max(j - l, 0);

          for (let x = x1; x >= x2; x--) {
            for (let y = y1; y >= y2; y--) {
              if (stage[y][x] === '#') {
                stage[y][x] = '.';
              }
            }
          }
        }
      }
    }

    stage.map(row => console.log(row.join('')));

    sc.close();
  }

  solve();
}
