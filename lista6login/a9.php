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
        width: 100px;
        background-color: pink;
        border: none;
        height: 26px;
    }
</style>

<?php
    session_start();
    if($_SESSION['admin'] == false)
    {
        header("location:.");
    }
    include '0begin.php';
?>
    <form method='post' action = ''>
        <input id='title' name='title' placeholder="Podaj tytuł" autocomplete="off">
        <input id='content' name='content' placeholder = "Podaj treść" autocomplete="off">
        <button type=submit>Prześlij</button>
    </form>
<?php
    $title = $_POST['title'];
    $content = $_POST['content'];
    if(!isset($a))
    {
    }
    echo "<b>" . $title . "</b>: " . $content;
    include '0end.php'
?>