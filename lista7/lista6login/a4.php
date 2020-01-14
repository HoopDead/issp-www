<?php
include "0begin.php";
?>
<h1>Moje zdjęcia</h1>
<ul>
<?php

  $obrazki=scandir('img');


  foreach($obrazki as $plik)

  {if($plik[0]!='.')
     echo "<img src='img/$plik' width='600'/>";
  }
?>
</ul>
<?php
include "0end.php";