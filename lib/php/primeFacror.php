<?php

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

