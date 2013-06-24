<?php

include_once('../resources/init.php');

$idno = $_GET["item"];

$foo =  mysql_query("SELECT * FROM items WHERE `xfr_identifier` = '$idno';") or die(mysql_error());

$row = mysql_fetch_assoc($foo);


echo '<textarea id="output" rows="18" class="fullwidth"><?xml version="1.0" encoding="UTF-8"?>
			<metadata>
				<idnumber>'.$row["xfr_identifier"].'</idnumber>
				<title>'.$row["title"].'</title>
				<creator>'.$row["creator"].'</creator>
				<creationdate>'.$row["creationDate"].'</creationdate>
				<totalrunningtime>'.$row["trt"].'</totalrunningtime>
				<formattype>'.$row["formattype"].'</formattype>
				<collection>'.$row["collection"].'</collection>
				<description>'.$row["description"].'</description>
			</metadata></textarea>';

?>