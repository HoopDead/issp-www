<?php

if((isset($_POST['nick'])) && (isset($_POST['text'])))
{
   $nick=htmlentities($_POST['nick']); 
   $text=htmlentities($_POST['text']);
}
$last=0;

foreach(scandir('wpisy') as $wpis)
   if($wpis>$last)
      $last=$wpis;

if(!empty($nick) && !empty($text))
{    
    $text="<li><b>$nick:</b> $text</li>\n";
    file_put_contents("wpisy/".($last+1),$text);
    echo $text;
}

while($last>0)
{
   echo file_get_contents("wpisy/$last"); 
   $last--;
}

?>