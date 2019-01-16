class Scanner {
  private buffer = '';
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
  const x = +(await sc.getLine());
  const set = new Set<number>([1]);
  for (let b = 2; b <= x; b++) {
    for (let p = 2; p <= x; p++) {
      const t = Math.pow(b, p);
      if (t <= x) {
        set.add(t);
      }
      if (t >= x) {
        continue;
      }
    }
  }
  console.log(Math.max(...Array.from(set)));
  sc.close();
}

slove();
