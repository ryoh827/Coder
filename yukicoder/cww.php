<?php

require_once "../IO.php";
use Coder\IO;

$io = new IO();

$str = $io->next();
$count_c = 0;
$count_w = 0;
$index = [];
$min = strlen($str);

for($i = 0; $i < strlen($str); $i++) {
    if ($str[$i] == 'c') {
        if ($count_c == 0) {
            $count_w = 0;
        }
        $count_c = 1;
        $index[] = $i;
    }
    if ($str[$i] == 'w') {
        $count_w++;
        if ($count_c == 1 && $count_w == 2) {
            foreach ($index as $v) {
                $tmp = $i - $v + 1;
                if ($min > $tmp && $tmp > 2) {
                    $min = $tmp;
                }
            }
            $io->out($min);
            exit;
        }
    }
}
$io->out('-1');