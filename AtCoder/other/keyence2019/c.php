<?php

$sc = new Scanner();

$a = [];
$b = [];
$d = [];

$N = $sc->nextInt();

for($i = 0; $i < $N; $i++) {
    $a[] = $sc->nextInt();
}

$all_plus = true;
for($i = 0; $i < $N; $i++) {
    $b[] = $sc->nextInt();
    $d[] = $a[$i] - $b[$i];
    if ($d[$i] < 0) {
        $all_plus = false;
    }
}

if (array_sum($a) < array_sum($b)) {
    echo '-1' . PHP_EOL;
    exit;
}
if ($all_plus) {
    echo 0 . PHP_EOL;
    exit;
}
sort($d);
$cnt = 0;
$total = 0;
foreach($d as $v) {
    if ($v < 0) {
        $cnt++;
        $total += $v;
    } else {
        break;
    }
}

for($i = $N-1; $i > 0; $i--) {
    $total += $d[$i];
    $cnt++;
    if ($total >= 0)  {
        break;
    }
}
echo $cnt . PHP_EOL;

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
