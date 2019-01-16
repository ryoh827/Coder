<?php

$sc = new Scanner();

$s = $sc->next();

$len = strlen($s) - 2;
$list = [];
for($i = 0; $i < $len; $i++) {
    $n = $s[$i] . $s[$i+1] . $s[$i+2];
    $list[] = (int)$n;
}
$min = 10 << 10;
foreach($list as $n) {
    $min = min($min, abs($n - 753));
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
