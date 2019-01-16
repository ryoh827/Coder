<?php

$sc = new Scanner();

$n = $sc->nextInt();
$T = $sc->nextInt();
$A = $sc->nextInt();
$h = [];
$index = 0;
$d = 1000000000000000;
for ($i = 0; $i < $n; $i++) {
    $tmp = $T - $sc->nextInt() * 0.006;
    if ($d > ($t = abs($tmp - $A))) {
        $d = $t;
        $index = $i+1;
    }
}

echo $index . PHP_EOL;



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
