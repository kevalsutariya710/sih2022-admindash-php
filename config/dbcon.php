<?php

$sname = "localhost";
$db_name = "aadhaar_2022";
$uname = "root";
$password = "";

$conn = mysqli_connect($sname, $uname, $password, $db_name);

if (!$conn) {
    echo "Connection Failed!";
    exit();
}
