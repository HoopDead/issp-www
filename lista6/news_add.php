<style>
    form
    {
        margin-top: 50px;
    }
    input
    {
        width: 200px;
        text-align: center;
    }
    button
    {
        position: relative;
        width: 200px;
        background-color: pink;
        border: none;
        margin-top: 30px;
        height: 26px;
    }
    textarea
    {
        min-width: 395px;
        max-width: 600px;
        margin-top: 40px;
    }
</style>

<?php
    include '0begin.php';
?>
    <form method='post' action = ''>
        <input id='title' name='title' placeholder="Podaj tytuł" autocomplete="off">
        <textarea rows = '2' cols = '47' id='content' name='content' placeholder = "Podaj treść" autocomplete="off"></textarea>
        <button type=submit>Prześlij</button>
    </form>
<?php
    $title = $_POST['title'];
    $content = $_POST['content'];

    $last=0;

    foreach(scandir('newsy') as $wpis)
        if($wpis>$last)
            $last=$wpis;
    
    for($i=1;$i<=$last;$i++)
    {
        echo file_get_contents("newsy/$i"); 
    }
    
    if(!empty($title) && !empty($content))
    {    
        $text="<h4>$title:</h4> $content\n";
        file_put_contents("newsy/".(++$last),$text);
        echo $text;
    }
    include '0end.php';
?>