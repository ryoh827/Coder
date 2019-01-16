<?php

$sc = new Scanner();

$n = $sc->nextInt();

echo dfs('') . PHP_EOL;

function dfs($str) {
    global $n;
    if ($str > $n) {
        return 0;
    }
    $ret = 0;
    if (strpos($str, '3') !== false && strpos($str, '5') !== false && strpos($str, '7') !== false) {
        $ret = 1;
    }
    foreach(['3', '5', '7'] as $v) {
        $ret += dfs($str . $v);
    }
    return $ret;
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
