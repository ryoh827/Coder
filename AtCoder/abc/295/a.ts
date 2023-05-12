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

    const _: number = Number(await sc.getLine());
    const words: string[] = (await sc.getLine()).split(' ').map(String);
    let f: boolean = false;

    for (const w of words) {
      if (['and', 'not', 'that', 'the', 'you'].includes(w)) {
        f = true;
        break;
      }
    }

    if (f) {
      console.log('Yes');
    } else {
      console.log('No');
    }

    sc.close();
  }

  solve();
}
