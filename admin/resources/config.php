<?php

$config['db_host'] = '127.0.0.1';
$config['db_user'] = 'root';
$config['db_pass'] = '';
$config['db_name'] = 'xfr_stn';

foreach ($config as $k => $v) {
	define(strtoupper($k), $v);
}

?>