<?php

$sc = new Scanner();
$S = $sc->next();
$T = $sc->next();

$map = [];
$map2 = [];
$f = true;

for($i = 0; $i < strlen($S); $i++) {
    if (isset($map[$S[$i]]) && $map[$S[$i]] !== $T[$i]) {
        $f = false;
        break;
    }
    if (isset($map2[$T[$i]]) && $map2[$T[$i]] !== $S[$i]) {
        $f = false;
        break;
    }
    $map[$S[$i]] = $T[$i];
    $map2[$T[$i]] = $S[$i];
}
echo $f ? 'Yes' : 'No' . PHP_EOL;

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
