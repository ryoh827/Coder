<?php

ini_set('memory_limit', '1024M');

$sc = new Scanner();

$N = $sc->nextInt();
$K = $sc->nextInt();
$h = [];

for($i = 0; $i < $N; $i++) {
    $h[] = $sc->nextInt();
}

$dp = [];

for($i = 1; $i < $N; $i++) {
    $dp[$i] = pow(10,10);
    for($j = $i - 1; $j >= $i - $K && $j >= 0; $j--) {
        $dp[$i] = min($dp[$i], $dp[$j] + abs($h[$i] - $h[$j]));
    }
}

echo $dp[$N-1] . PHP_EOL;

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
