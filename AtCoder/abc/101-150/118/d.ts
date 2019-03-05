import { INSPECT_MAX_BYTES } from 'buffer';

namespace Coder {
  class Scanner {
    private buffer: string = '';
    private stdinQueue: any = [];

    constructor() {
      process.stdin.resume();
      process.stdin.setEncoding('utf8');
      process.stdin.on(
        'data',
        (chunk): void => {
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
        },
      );
    }
    public getLine(): Promise<string> {
      return new Promise((resolve, reject) => {
        const i = this.buffer.indexOf('\n');
        if (i >= 0 && this.stdinQueue.length == 0) {
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

  async function slove() {
    const sc = new Scanner();
    const [N, M] = (await sc.getLine()).split(' ').map((x) => +x);
    const A = (await sc.getLine()).split(' ').map((x) => +x);

    const need = [2, 5, 5, 4, 5, 6, 3, 7, 6];
    A.sort((a, b) => need[a - 1] - need[b - 1]);

    dfs(N, A, []);

    let n = N;
    const ans = [];
    for (const v of A) {
      while (true) {
        const m = need[v - 1];
        const t = n - m;
        if (t !== 0 && t - m < 0) break;
        //console.log(v, t);
        ans.push(v);
        n = t;
      }
    }
    console.log(ans.join(''));
    sc.close();
  }

  slove();
}
