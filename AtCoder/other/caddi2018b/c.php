<?php
ini_set('memory_limit', '1024M');
$sc = new Scanner();
$N = $sc->nextInt();
$P = $sc->nextInt();
 
if ($N == 1) {
    echo $P . PHP_EOL;
    exit;
}
if ($P == 1) {
    echo 1 . PHP_EOL;
    exit;
}
 
$result = getPrimeFactors($P);
$ans = 1;

foreach($result as $k => $v) {
    $ans *= pow($k, (int)($v/$N));
}
 
echo $ans . PHP_EOL;
 
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

function getPrimeFactors($N) {
    $result = [];
    
    for($i = 2; $i * $i <= $N; $i++) {
        if ($N % $i == 0) {
            while($N % $i == 0) {
                $result[$i]++;
                $N /= $i;
            }
        }
    }
    if ($N > 1) {
        $result[$N]++;
        $N /= $N;
    }
    return $result;
}
