<?php

ini_set('memory_limit', '1024M');

$sc = new Scanner();

$N = $sc->nextInt();
for($i = 0; $i < $N; $i++) {
    $a[] = $sc->nextInt();
    $b[] = $sc->nextInt();
    $c[] = $sc->nextInt();
}
$h = [$a, $b, $c];

function dfs($day, $yesterday_do) {
    if ($day == $N) {
        return 0;
    }
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
