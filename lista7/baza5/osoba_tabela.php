<?php
include "baza.php";

$wynik=$baza->query("select * from uczniowie");

echo "<center><table>";
echo "<h2>Liczba osób z największa średnią</h2>";
echo "<tr><th>Id<th>Imię</th><th>Nazwisko</th><th>Płeć</th>";
while($r= $wynik->fetchArray())
{   
	echo "<tr onclick=\"location='?id=$r[id]'\">
			<td>$r[id]</td>
			<td>$r[imie]</td>
			<td>$r[nazwisko]</td>
			<td>$r[srednia]</td>";
}
if($_SESSION['admin'])
	echo "<tr onclick=\"location='?id=dodaj'\">
		<td colspan=5>Dodaj nową osobę</td></tr>";
else
	echo "<tr onclick=\"location='?id=login'\">
		<td colspan=5>Zaloguj sie by edytować tabelę</td></tr>";

echo "</table></center>";
if($_SESSION['admin'])
   echo "<a href=?id=logout>Wyloguj się</a>";
