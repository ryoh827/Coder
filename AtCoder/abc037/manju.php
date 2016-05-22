<?php

namespace Coder;

class IO
{
    private $raw = [];
    private $count = 0;
    private $pointer = 0;

    /*
     * デリミタで区切った文字列を取得する
     * @param string
     * @return string
     */
    public function next($del = ' ') {
        if ($this->pointer >= $this->count) {
            $this->raw = explode("{$del}", trim(fgets(STDIN)));
            $this->count = count($this->raw);
            $this->pointer = 0;
        }
        $result = $this->raw[$this->pointer];
        $this->pointer++;
        return $result;
    }
    /*
     * 次にまだ文字列があるかを調べる
     * @return bool
     */
    public function hasNext() {
        return $this->pointer < $this->count;
    }
    /*
     * int型で文字列を取り出す
     * @return int
     */
    public function nextInt($del = ' ') {
        return (int)$this->next($del);
    }
    /*
     * double型で文字列を取り出す
     * @return double
     */
    public function nextDouble($del = ' ') {
        return (double)$this->next($del);
    }
    /*
     * 改行を末尾に追加して出力する
     * @param string
     */
    public static function out ($str = '') {
        echo $str . PHP_EOL;
    }
}

$io = new IO();
$inputs = [];
for ($i = 0; $i < 3; $i++) {
    $inputs[] = $io->nextInt();
}
//小さい方を取得
$use = $inputs[0] < $inputs[1] ? $inputs[0] : $inputs[1];
$cnt = 0;
while (true) {
    if ($inputs[2] - $use >= 0) {
        $inputs[2] -= $use;
        $cnt++;
    } else {
        break;
    }
}

$io->out($cnt);
