<?php

$sc = new Scanner();

$f = [
    '1' => false,
    '9' => false,
    '7' => false,
    '4' => false,
];

for($i = 0; $i < 4; $i++) {
    $t = $sc->nextInt();
    if ($f[$t]) {
        echo 'NO' . PHP_EOL;
        exit;
    }
    $f[$t] = true;
}
foreach($f as $v) {
    if (!$v) {
        echo 'NO' . PHP_EOL;
        exit;
    }
}
echo 'YES' . PHP_EOL;
exit;


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
