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
    const n = +(await sc.getLine());
    const L = (await sc.getLine()).split(' ').map((x) => +x);
    L.sort((a, b) => {
      if (a > b) return 1;
      else return -1;
    }).reverse();
    const sum = (array: any[]) => {
      return array.reduce((prev, current, i, arr) => {
        return prev + current;
      });
    };
    if (L[0] >= sum(L) - L[0]) {
      console.log('No');
    } else {
      console.log('Yes');
    }
    sc.close();
  }

  slove();
}
