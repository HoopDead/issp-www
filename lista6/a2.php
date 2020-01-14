<?php
include "0begin.php";
?>
<style>
    li
    {
        list-style-type: none;
    }
    i
    {
        font-size: 75px;
    }
</style>
<h1>Co potrafię robić?</h1>
<?php

$a=array("<i class='fab fa-html5'></i>","<i class='fab fa-css3-alt'></i>","<i class='fab fa-js'></i>","<i class='fab fa-php'></i>","<i class='fab fa-python'></i>");

foreach($a as $x)
    echo "<li>" . $x . "</li>";
?>
<?php
include "0end.php";