<?php 
session_start();
// $username'] = $_POST['user'];
// $password'] = $_POST['user_pass'];
// $mail'] = $_POST['mail'];
// $gender'] = $_POST['gender'];
// $mobile'] = $_POST['mobile'];

$username = $_POST['user'];
$password = $_POST['user_pass'];
$mail = $_POST['mail'];
$gender = $_POST['gender'];
$mobile = $_POST['mobile'];

$db_host = "sql313.epizy.com";
$db_user = "epiz_25143161";      
$db_password = "your_password";     // My password is saved in orginal copy of this folder in my device.
$db_name = "epiz_25143161_loginsystem";
$con = mysqli_connect($db_host,$db_user,$db_password,$db_name);

$q = "select * from users where username='$username'";
mysqli_query($con,$q);
$result = mysqli_query($con,$q);
$num = mysqli_num_rows($result);
if($num>0){
   echo "User already registered";
}
else{
   $q = "insert into users(username,password,email,gender,phone) values('$username','$password','$mail','$gender','$mobile')";
   mysqli_query($con,$q);
   
   echo "Hello ",$username, "<br>You are registered as ",$gender, "canditate <br> Your details are:<br> Name = ",$username, "<br> E-mail id = ",$mail, "<br>Mobile No. = ",$mobile;
   echo "<br>Now you can log in.";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login page</title>
</head>
   <body background="coffe.jpeg" style="background-size: cover; background-repeat: no-repeat;">
     <a href="login.php">Login</a>
   </body>
   <script src="tut2.js"></script>
</html>
