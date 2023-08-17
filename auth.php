<?php
session_start();

  if (!isset($_SERVER['REQUEST_METHOD'])) 
  {
    $_SERVER['REQUEST_METHOD'] ="Login to Access Dashbord";
    header("Location: login.php");
  }

?>