import { COPYFILE_FICLONE_FORCE } from 'constants';

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

  const checkFlag = (f: any) => {
    return f['A'] && f['B'] && f['C'];
  };

  async function slove() {
    const sc = new Scanner();
    const input = [];
    for (let i = 0; i < 5; i += 1) {
      input.push(+(await sc.getLine()));
    }
    let ans = 0;
    let max = 10000;
    const ary = [];
    for (let i = 0; i < 5; i += 1) {
      const val = input[i];
      if (val % 10 === 0) {
        ans += val;
      } else {
        const d = val % 10;
        max = Math.min(d, max);
        ary.push(val);
      }
    }
    let f = false;
    for (const v of ary) {
      if (!f && v % 10 === max) {
        ans += v;
        f = true;
      } else {
        ans += Math.ceil(v / 10) * 10;
      }
    }
    console.log(ans);
    sc.close();
  }

  slove();
}
