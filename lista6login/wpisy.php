<?php
if((isset($_POST['nick'])) && (isset($_POST['text'])))
{
    $nick=htmlentities($_POST['nick']); 
    $text=htmlentities($_POST['text']);
}
$start=intval($_GET['start']);

$last=0;

foreach(scandir('wpisy') as $wpis)
    if($wpis>$last)
        $last=$wpis;

for($i=$start+1;$i<=$last;$i++)
{
    echo file_get_contents("wpisy/$i"); 
}

if(!empty($nick) && !empty($text))
{    
    $text="<li><b>$nick:</b> $text</li>\n";
    file_put_contents("wpisy/".(++$last),$text);
    echo $text;
}

if($last>$start)
echo "
<script>
    start=$last;
</script>
";
