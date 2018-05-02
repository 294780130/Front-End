<?php 
$username = $_GET['username'];
$password = $_GET['password'];

// $username = $_POST['username'];
// $password = $_POST['password'];

header("Content-Type:text/html;charset=utf-8");

echo "用户名".$username;
/*
header('location:./test.html?flag=1');
exit;
*/

?>
