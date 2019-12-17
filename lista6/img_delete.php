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
    rename("img/{$a}", "img/.{$a}");
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
    

    echo "<form method = 'post' onsubmit='return submitResult();'>";
    echo "<select name = 'pliki' onchange = 'deleteNews()'>";
    $obrazki=scandir('img');
    foreach(  $obrazki as $x)
    if($x[0]!='.')
       echo "<option> $x </option>";
    echo "</select>";
    echo "<button>Usun</button>";
    echo "</form>";
?>


<?php
    include '0end.php';
?>