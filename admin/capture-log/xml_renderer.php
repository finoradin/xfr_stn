<?php

include_once('../resources/init.php');

$idno = $_GET["item"];

$foo =  mysql_query("SELECT * FROM items WHERE `id_number` = '$idno';") or die(mysql_error());

$row = mysql_fetch_assoc($foo);


echo '<textarea id="output" rows="18" class="fullwidth">'.$row["xml_blob"].'</textarea>';


?>