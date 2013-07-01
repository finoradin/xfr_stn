<?php

$config['db_host'] = 'localhost';
$config['db_user'] = 'root';
$config['db_pass'] = '';
$config['db_name'] = 'xfr_stn';

foreach ($config as $k => $v) {
	define(strtoupper($k), $v);
}

?>
