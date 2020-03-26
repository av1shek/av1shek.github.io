<?php 
session_start();
$username = $_POST['username'];
$password = $_POST['password'];

$db_host = "your host";
$db_user = "your username";
$db_password = "your password";
$db_name = "your databasename";

$con = mysqli_connect($db_host,$db_user,$db_password,$db_name);
$q = "select * from users where username='$username' and password='$password'";
mysqli_query($con,$q);
$result = mysqli_query($con,$q);
$num = mysqli_num_rows($result);
 
if($num==1)
{
    $_SESSION['username'] = $_POST['username'];
    $_SESSION['password'] = $_POST['password'];
   echo "Hello $username, you are successfully logged in.<br>Happy to see you here.";
   /////////////////////////////////////////////////////////////////////////////////
    header('location: http://av1shek.epizy.com/loginsystem/home.php');
    ///////////////////////////////////////////////////////////////////////////////
}
else{
    
    echo "Please enter valid username or password.";
    // echo "not correct";
    //  echo $num;
    //  var_dump($con);
    //  var_dump($result);
    // echo $q;
    // echo "check 1";
  
    // echo "check 2";
   
    // echo "check 3";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Invalid</title>
</head>
<body>
    <a href="login.php">click here to try again.</a>
</body>
</html>

<!-- <?php

$db_host = "localhost"; 
$db_user = "root";
$db_password = "";
$db_name = "test";
$conn = mysqli_connect($db_host,$db_user,$db_password,$db_name);
if(!$conn)
{ echo "failed"; die(); }
echo "<br>success<br>";
$sql = "SELECT * FROM user"; 
$result = mysqli_query($conn,$sql);
echo '<br>Conn:<br>'; 
var_dump($conn); 
echo '<br><br>Result:<br>';
var_dump($result);
$row = mysqli_fetch_assoc($result); 

if(mysqli_num_rows($result)>0){ echo "data fetched"; } 
else{ echo "data access failed."; }
?> -->