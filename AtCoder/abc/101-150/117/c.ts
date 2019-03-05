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
    const [n, m] = (await sc.getLine()).split(' ').map((x) => +x);
    const X = (await sc.getLine()).split(' ').map((x) => +x);
    X.sort((a, b) => {
      if (a > b) return 1;
      else return -1;
    });
    if (m === 1) {
      console.log('0');
    } else {
      const d = [];
      for (let i = 0; i < m - 1; i++) {
        d.push(X[i + 1] - X[i]);
      }
      d.sort((a, b) => {
        if (a > b) return 1;
        else return -1;
      }).reverse();
      const sum = (array: any[]) => {
        return array.reduce((prev, current, i, arr) => {
          return prev + current;
        });
      };
      let ans = sum(d);
      for (let i = 0; i < n - 1; i++) {
        ans -= d[i];
      }
      console.log(ans);
    }

    sc.close();
  }

  slove();
}
