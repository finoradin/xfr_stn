<?php

include_once('../resources/init.php');

$idno = $_GET["item"];

header('Content-Disposition: attachment; filename="'.$idno.'.xml"');


$foo =  mysql_query("SELECT * FROM items WHERE `id_number` = '$idno';") or die(mysql_error());
$row = mysql_fetch_assoc($foo);
echo html_entity_decode($row["xml_blob"]);




?>