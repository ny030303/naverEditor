<?php

session_start();

$dsn = "mysql:host=localhost;dbname=blog;charset=utf8mb4";
$con = new PDO($dsn, "root");

function fetch($con, $sql, $param = []) {
    $q = $con->prepare($sql);
    $q->execute($param);

    return $q->fetch(PDO::FETCH_OBJ);
}

function fetchAll($con, $sql, $param = []) {
    $q = $con->prepare($sql);
    $q->execute($param);

    return $q->fetchAll(PDO::FETCH_OBJ);
}

function execSql($con, $sql, $param = []) {
    $q = $con->prepare($sql);
    $result = $q->execute($param);
    if( !$result ) var_dump($q->errorInfo());
    return ($result) ? 1: 0;
}