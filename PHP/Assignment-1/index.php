<?php
// Your code here!
    $file = fopen("input.txt", "r");
    $calories = array();
    $sum = 0;
    while(! feof($file)) {
        $line = fgets($file);
        
        if ($line == "\n") {
            array_push($calories, $sum);
            $sum = 0;
            continue;
        }
        $sum += $line;
    }
    
    rsort($calories);
    echo "The monk with highest calories has food of $calories[0] calories";
    echo("<br/>");
    print($calories[0] + $calories[1] + $calories[3]);
?>
