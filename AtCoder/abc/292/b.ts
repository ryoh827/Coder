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

    const [N, Q]: number[] = (await sc.getLine()).split(' ').map(Number);

    const t: number[] = Array(N).fill(0);

    for (let i = 0; i < Q; i++) {
      const [a, b]: number[] = (await sc.getLine()).split(' ').map(Number);
      if (a === 1) {
        t[b - 1]++;
      } else if (a === 2) {
        t[b - 1] += 2;
      } else if (a === 3) {
        if (t[b - 1] >= 2) {
          console.log('Yes');
        } else {
          console.log('No');
        }
      }
    }

    sc.close();
  }

  solve();
}
