<style>
     form
     {
         margin-top: 50px;
     }
</style>

<script>
    const deleteNews = () =>
    {
        console.log(document.querySelector('select').value);
    }
</script>

<?php
    $a = $_POST['pliki'];
    rename("newsy/{$a}", "newsy/.{$a}");
?>

<script>
function submitResult() {
   if ( confirm("Czy na pewno?") == false ) {
      return false ;
   } else {
      return true ;
   }
}
</script>

<?php
    include '0begin.php';

    $last = 1;
    
    foreach(scandir('newsy') as $wpis)
    if($wpis>$last)
        $last=$wpis;

    echo "<form method = 'post' onsubmit='return submitResult();'>";
    echo "<select name = 'pliki' onchange = 'deleteNews()'>";
    for($i=0;$i<=$last;$i++)
    {
        $a = file_get_contents("newsy/$i");
        echo "<option value = '{$i}'>{$a}</option>";
    }
    echo "</select>";
    echo "<button>Usun</button>";
    echo "</form>";
?>


<?php
    include '0end.php';
?>