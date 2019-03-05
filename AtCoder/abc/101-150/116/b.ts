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
  const f: (n: number) => number = (n: number) => {
    return n % 2 === 0 ? n / 2 : 3 * n + 1;
  };

  async function slove() {
    const sc = new Scanner();
    const s: number = +(await sc.getLine());
    const prog: number[] = [];
    let ans = -1;
    prog.push(s);
    let a = s;
    for (let i = 1; i <= 1000000; i++) {
      let b: number = f(a);
      if (prog.filter((x) => b === x).length > 0) {
        ans = i + 1;
        break;
      }
      prog.push(b);
      a = b;
    }
    console.log(ans);
    sc.close();
  }
  slove();
}
