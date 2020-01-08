<?php

include 'table_connection.php';

$query = $connection->query("select * from uczniowie");

echo "<center><table>";
    echo "<h2>Lista uczniów z największa średnią</h2>";
    echo "<tr><th>Id</th><th>Imię</th><th>Nazwisko</th><th>Średnia</th></tr>";
while($r = $query->fetchArray())
{
	echo "<tr onclick=\"location='?id=$r[id]'\">
        <td>$r[id]</td>
        <td>$r[imie]</td>
        <td>$r[nazwisko]</td>
        <td>$r[srednia]</td>
    </tr>";
}

echo "</table></center>";

?>