<?php

require_once "../IO.php";

use Coder\IO;

$io = new IO();

$k = $io->nextInt();
$n = $io->nextInt();
$f = $io->nextInt();
$list = [];
for ($i = 0; $i < $f; $i++) {
    $list[] = $io->nextInt();
}
$total = $k * $n;

foreach ($list as $v) {
    $total -= $v;
    if ($total < 0) {
        $total = -1;
        break;
    }
}
$io->out($total);