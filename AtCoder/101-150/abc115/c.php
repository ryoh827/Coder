<?php

$sc = new Scanner();

$n = $sc->nextInt();
$k = $sc->nextInt();

$h = [];
for($i = 0; $i < $n; $i++) {
    $h[] = $sc->nextInt();
}
sort($h);

$min = pow(10, 10);
$index = -1;
for($i = $k - 1; $i < $n; $i++) {
    $min = min($min, $h[$i] - $h[$i - $k + 1]);
}
echo $min . PHP_EOL;

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
