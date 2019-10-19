<?php
require ("db.php");
header("Content-Type: application/json");

$sql = "select * from contents";
$data = fetchAll($con, $sql, []);
echo json_encode(array("arr"=>$data));
