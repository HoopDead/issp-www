<?php

$chat=file_get_contents('chat.txt');
if(isset($_POST['nick']) && isset($_POST['text'])) //Linijka dodana, ponieważ kod w niektórych przypdadkach na serwerze wyrzucał błąd. https://i.imgur.com/Q2A70w6.png
{
    $nick=htmlentities($_POST['nick']); 
    if($text=htmlentities($_POST['text']))
    {    
        $chat="<li><b>$nick:</b> $text</li>\n".$chat;
        file_put_contents('chat.txt',$chat);
    }
}
echo $chat;
