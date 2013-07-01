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


		// make a new text file with the unique ID of the item
		$myFile = "{$_POST['xfr_identifier']}.txt";

		// opens / creates a file for writing into
		$fh = fopen($myFile, 'w');

		// write the markup and metadata
		$xml = '<?xml version="1.0" encoding="UTF-8"?>
					<metadata>
						<idnumber>'.$_POST["xfr_identifier"].'</idnumber>
						<title>'.$_POST["title"].'</title>
						<creator>'.$_POST["creator"].'</creator>
						<creationdate>'.$_POST["creationDate"].'</creationdate>
						<totalrunningtime>'.$_POST["trt"].'</totalrunningtime>
						<formattype>'.$_POST["formattype"].'</formattype>
						<collection>'.$_POST["collection"].'</collection>
						<description>'.$_POST["description"].'</description>
					</metadata>';

		// Write to the file
		fwrite($fh,$xml);

		// close the file
		fclose($fh);
     
    
     // Read the file from disk
     readfile($myFile);

}

?>