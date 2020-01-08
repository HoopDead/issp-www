<?php
session_start();
if($_POST and $_SESSION['admin'])
{
	
	include "baza.php";
	$id = $_POST['id'];
	foreach($_POST as $x=>$y)
		$r[$x]=$baza->escapeString($y);
	switch($_POST['co'])
	{
		case 'Usun':   
			$baza->query("delete from uczniowie where id='$r[id]'");
			break;
		case 'Zapisz':
			$baza->query("update uczniowie 
						 set imie='$r[imie]', 
						 nazwisko='$r[nazwisko]', 
						 srednia='$r[srednia]'
						 where id='$r[id]'");
		break;
		case 'Dodaj': 
			$baza->query("insert into uczniowie (imie,nazwisko,srednia)
                          values('$r[imie]', '$r[nazwisko]', '$r[srednia]')
						 ");
			break;
									 
	}
//	echo $baza->lastErrorMsg();
	header("location:.");
}