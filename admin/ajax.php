<?php

include_once('resources/init.php');

if (isset($_POST)){
	print_r($_POST);

	$description = mysql_real_escape_string(htmlentities($_POST['description']));
	$xml = mysql_real_escape_string(htmlentities($_POST['xml_blob']));

	mysql_query("INSERT INTO `items` SET
					`id_number`	= '{$_POST['identifier']}',
					`title`				= '{$_POST['title']}',
					`creator`			= '{$_POST['creator']}',
					`creation_date`		= '{$_POST['date']}',
					`collection`		= '{$_POST['collection']}',
					`description`		= '{$description}',
					`operator`		= '{$_POST['operator']}',
					`format`		= '{$_POST['format']}',
					`xml_blob`		= '{$xml}'")

	or die(mysql_error());

}

?>