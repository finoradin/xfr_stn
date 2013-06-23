<?php

include_once('resources/init.php');

if (isset($_POST)){
	print_r($_POST);

	mysql_query("INSERT INTO `items` SET
					`xfr_identifier`	= '{$_POST['xfr_identifier']}',
					`title`				= '{$_POST['title']}',
					`creator`			= '{$_POST['creator']}',
					`creation_date`		= '{$_POST['creationDate']}',
					`extent`			= '{$_POST['trt']}',
					`format_type`		= '{$_POST['formattype']}',
					`collection`		= '{$_POST['collection']}',
					`description`		= '{$_POST['description']}',
					`captured_by`		= '{$_POST['captured_by']}'");

}

?>