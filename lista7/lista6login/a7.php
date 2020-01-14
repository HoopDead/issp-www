<?php
    include '0begin.php';
    
    function fib($number)
    {
    $x = 0;    
    $y = 1;
    for($i=0;$i<=$number;$i++)    
        {    
            $z = $x + $y;    
            echo $i+1 . " : " .  $z."<br />";         
            $x=$y;       
            $y=$z;     
        }
    } 
    fib(50);
    include '0end.php';
?>