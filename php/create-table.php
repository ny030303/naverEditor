<?php

require("db.php");
header("Content-Type: application/json");

$sql = "CREATE TABLE IF NOT EXISTS `contents` (
            `id` int(11) NOT NULL AUTO_INCREMENT,
            `body` mediumtext,
            `created` datetime DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (`id`)
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4";

$result = execSql($con, $sql, []);
echo json_encode($result);
