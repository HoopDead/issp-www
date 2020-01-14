<?php
include "0begin.php";
?>
<h1>Filmiki</h1>
<ul>
<?php

  $film=scandir('movies');


  foreach($film as $plik)
  {
      if(($plik != '.') && ($plik != '..'))
      {
        echo "<video id='sampleMovie' src='movies/$plik' autoplay muted loop width = '600' height = '600'></video>";
      }
  }

?>
</ul>
<?php
include "0end.php";