<?php

$sc = new Scanner();

$n = $sc->nextInt();
$m = $sc->nextInt();

$list = [];

for ($i = 0; $i < $m; $i++) {
    $p = $sc->nextInt();
    $y = $sc->nextInt();
    $list[$p][$y] = $i + 1;
}
$ans_list = [];
foreach($list as $k => $v) {
    ksort($v);
    $first_id = str_pad($k, 6, '0', STR_PAD_LEFT);
    $i = 1;
    foreach($v as $a) {
        $last_id = str_pad($i++, 6, '0', STR_PAD_LEFT);
        $ans_list[$a] = $first_id . $last_id;
    }
}
ksort($ans_list);

echo implode(PHP_EOL, $ans_list) . PHP_EOL;

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
