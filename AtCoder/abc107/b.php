<?php

$sc = new Scanner();

$H = $sc->nextInt();
$W = $sc->nextInt();

$map = [];

$delte_line = str_repeat('.', $W);

for($i = 0; $i < $H; $i++) {
    $line = $sc->next();
    if($line !== $delte_line) {
        $map[] = str_split($line);
    }
}
$delete_col = str_repeat('.', count($map));
$col_list = [];
for($i = 0; $i < $W; $i++) {
    $col[$i] = array_column($map, $i);
    if (implode($col[$i]) === $delete_col) {
        $col_list[] = $i;
    }
}
$print = '';
foreach($map as $k => $v) {
    foreach($col_list as $i) {
        unset($map[$k][$i]);
    }
    $print .= implode($map[$k]) . PHP_EOL;
}

echo $print . PHP_EOL;

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
