<?php
    include '0begin.php';
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Chat</title>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <style>
            ul
            {
                width: 600px;
                height: 500px;
                border: 1px solid #000;
                border-radius: 1em;
                list-style-type: none;
                overflow-y: scroll;
            }
            li
            {
                font-size: 17px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                margin-top: 5px;
            }
            li:first-child
            {
                margin-top: 25px;
            }
            li:last-child
            {
                margin-bottom: 25px;
            }
            input
            {
                text-align: center;
                margin-top: 10px;
                width: 400px;
                position: relative;
            }
            button
            {
                background: green;
                width: 250px;
                border: none;
                height: 22px;
                color: white;
                font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            }
        </style>
    </head>

<body>
    <div id=main>
        <h2>Chat</h2>
        <ul id='chat'></ul>
        <form method='post' class='ajax'>
                <input id='nick' name='nick' placeholder="Podaj imię" autocomplete="off">
                <input id='text' name='text' placeholder = "Treść" autocomplete="off">
                <button type=submit name='co'>Prześlij</button>
        </form>
    </div>

</body>

<script>

$("#nick").focus();


var start=0;

function reread(){
    $.get("wpisy.php",{start,start}).
    done(function(dane){
        if(dane!='')
        {
            $("#chat").append(dane);
            $("#chat script").remove();
            $("#nick").val(JSON.parse(localStorage.getItem('nickname')));
            const chatScroll = document.getElementById("chat");
            chatScroll.scrollTop = chatScroll.scrollHeight;
        }
    }); 
};

reread();

setInterval(reread,1000 );

$("form.ajax").on("submit",
    function(e)
    {
        if($('#nick').val()=="") 
            return false;
        $.post("wpisy.php?start="+start, $(this).serializeArray())
        .done(function(data){
            localStorage.setItem('nickname', JSON.stringify($("#nick").val()));
            $("#chat").append(data);
            $("#text").val('').focus();
            const chatScroll = document.getElementById("chat");
            chatScroll.scrollTop = chatScroll.scrollHeight;
          })
        .fail(function()
         {
            $("#chat").html("Błąd połączenia");
        });

        return false;
    }
);

</script>
</html>

<?php
    include '0end.php';
?>