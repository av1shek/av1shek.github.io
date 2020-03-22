<?php
session_start();
if(!isset($_SESSION['username'])){
    header('location:http://av1shek.epizy.com/loginsystem/login.php');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home</title>
</head>
<body>
    Home page
    <h2>Hello <?php echo $_SESSION['username'];?></h2>
    <br>Nice to see you<br>
    <a href="logout.php">Log out</a>
</body>
</html>