<?php 
define('DB_NAME', 'form1');
define('DB_USER', 'root');
define('DB_PASSWORD', 'tennis123');
define('DB_HOST', 'localhost');

$link = mysql_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$link) {
	die('could not connect: '.mysql_error());
}

$db_selected = mysql_select_db(DB_NAME, $link);

if(!$db_selected) {
	die('cant use '.DB_NAME. ': '.mysql_error());
}

echo 'connected';

$value = $_POST['emailIn'];

$sql = "INSERT INTO sentinel (emailIn) VALUES ('$value')";

if (!msql_query($sql)) {
	die('Error: '.mysql_error())
}
 mysql_close();
?>