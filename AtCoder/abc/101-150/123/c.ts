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
    for (let i = 0; i < 6; i += 1) {
      input.push(+(await sc.getLine()));
    }
    const N = input.shift();
    const Q = Array(6).fill(0);
    Q[0] = N;
    for (let i = 0; i < Math.pow(10, 100); i += 1) {
      for (let j = 5; j > 0; j -= 1) {
        const move = input[j - 1];
        const d = Q[j - 1] - move;
        if (d >= 0) {
          Q[j] += move;
          Q[j - 1] = d;
        } else {
          Q[j] += Q[j - 1];
          Q[j - 1] = 0;
        }
      }
      console.log(Q);
      if (Q[5] === N) {
        console.log(i + 1);
        break;
      }
    }

    sc.close();
  }

  slove();
}
