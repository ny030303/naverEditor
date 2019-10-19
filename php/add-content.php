<?php
require("db.php");
header("Content-Type: application/json");

$ir1 = $_POST["body"];

$sql = "insert into contents (body, created) values (?, now())";
$result = execSql($con, $sql, [$ir1]);
echo json_encode($result);