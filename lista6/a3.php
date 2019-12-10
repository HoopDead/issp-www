<?php
include "0begin.php";
?>
<h1>Moje projekty</h1>
Jakie pliki są w folderze projekty:

<ul>
<?php
  
  $obrazki=scandir('projekty');
  
  foreach(  $obrazki as $x)
  if($x[0]!='.')
     echo "<li> $x </li>";
?>

</ul>
<?php
include "0end.php";