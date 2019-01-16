<?php

$sc = new Scanner();

$S = $sc->next();
$N = strlen($S);

$ans = false;

for($i = 0; $i < $N; $i++) {
    for($j = $i; $j < $N; $j++) {
        $t = substr($S, 0, $i) . substr($S, $j);
        if ($t === 'keyence') {
            $ans = true;
            break;
        }
    }
}
echo $ans ? 'YES' : 'NO' . PHP_EOL;

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
