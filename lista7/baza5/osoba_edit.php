<?php
	include "baza.php";
	$id=intval($_GET['id']);
	$wynik=$baza->query("select * from osoby where id='$id'");
	$r=$wynik->fetchArray();
?>
<form method='post' action='osoba_zmiana.php'>
	<h2>Edycja osoby</h2>

	<input name='id' type=hidden value='<?=$id?>'>
	<input name='imie' placeholder='Imię' value='<?=htmlentities($r['imie'])?>'>
	<input name='nazwisko' placeholder='Nazwisko'  value='<?=htmlentities($r['nazwisko'])?>'>

	<input name='srednia' placeholder='srednia'  value='<?=htmlentities($r['srednia'])?>'>

	<input type=submit name=co value='Zapisz'>
	<input type=submit name=co value='Usun'>
	<input type=submit name=co value='Anuluj'>
</form>
