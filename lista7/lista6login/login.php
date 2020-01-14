<?php
include "0begin.php";
?>

<style>
    form
    {
        margin-top: 100px;
    }
</style>

<form method=post action='login_commit.php'>
<input name="login" placeholder = "Nick">
<input name="password" type=password placeholder = "Hasło">
<input type=submit>
</form>

<?php

include '0end.php';
?>
