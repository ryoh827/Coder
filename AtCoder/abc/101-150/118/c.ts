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
    const N = +(await sc.getLine());
    const A = (await sc.getLine()).split(' ').map((x) => +x);

    while (true) {
      if (A.filter((x) => x > 0).length === 1) {
        break;
      }
      A.sort((a, b) => a - b);
      let min = 10000000000;
      let index = -1;
      for (let i = 0; i < A.length; i++) {
        if (A[i] > 0 && min > A[i]) {
          min = A[i];
          index = i;
        }
      }
      for (let i = index + 1; i < A.length; i++) {
        A[i] = A[i] % min;
      }
    }
    console.log(A.sort((a, b) => b - a)[0]);
    sc.close();
  }

  slove();
}
