<?php

$sc = new Scanner();

$N = $sc->next();
$h = [];
for($i = 0; $i < $N; $i++) {
    $h[] = $sc->nextInt();
}

$dp[pow(10,5) - 1][2];
for($i = 0; $i < pow(10,5) - 1; $i++) {
    $dp[$i][0] = -1;
    $dp[$i][1] = -1;
}

$a = dfs(0);

echo $a . PHP_EOL;

function dfs($i) {
    global $N, $h, $dp;
    if ($i >= $N - 1) {
        return 0;
    } 
    if ($i == $N - 2) {
        if ($dp[$i][0] >= 0) {
            return $dp[$i][0];
        }
        $d = abs($h[$i] - $h[$i+1]);
        $dp[$i][0] = $d;
        return $d;
    }
    if ($i < $N - 2) {
        $d1 = abs($h[$i] - $h[$i+1]);
        $d2 = abs($h[$i] - $h[$i+2]);
        if ($dp[$i][0] < 0) {
            $dp[$i][0] = $d1 + dfs($i + 1);
            $dp[$i][1] = $d2 + dfs($i + 2);
        }
        return min($dp[$i][0], $dp[$i][1]);
    }
    return 0;
}

class Scanner {
    private $arr = [];
    private $count = 0;
    private $pointer = 0;
    public function next() {
        if($this->pointer >= $this->count) {
            $str = trim(fgets(STDIN));
            $this->arr = explode(' ', $str);
            $this->count = count($this->arr);
            $this->pointer = 0;
        }
        $result = $this->arr[$this->pointer];
        $this->pointer++;
        return $result;
    }
    public function hasNext() {
        return $this->pointer < $this->count;
    }
    public function nextInt() {
        return (int)$this->next();
    }
    public function nextDouble() {
        return (double)$this->next();
    }
}
