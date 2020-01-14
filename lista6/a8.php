<?php
    include '0begin.php';
?>
<h2>Tabliczka Mnożenia</h2>
<a href = "?n=10">do 10</a>
<a href = "?n=20">do 20</a>
<a href = "?n=30">do 30</a>
<br>
<hr>
<?php
    $n = $_GET['n'];
    if(!isset($n))
    {
        $n = 20;
    }

    function mnozenie($a)
    {
        for($i = 1; $i <= $a; $i++)
        {
            for($j = 1; $j <= 10; $j++)
            {
                echo "{$i}" . "*" . "{$j}" . "=" . $i * $j . '<br>';
            }
            echo "<hr>";
        }
    }
    mnozenie($n);
    include '0end.php';
?>