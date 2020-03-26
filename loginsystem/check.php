<!-- <?php
$db_host = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "test";
$conn = mysqli_connect($db_host,$db_user,$db_password,$db_name);
if(!$conn){ echo "failed"; }
echo "success";
$dbconn = mysqli_select_db ( $conn,$db_name);
echo $dbconn;
$sql = "SELECT * FROM `user`";
$result = mysqli_query($conn,$sql);

$a = var_dump($conn);
$b = var_dump($result);
echo $a;
echo $b;

if(mysqli_num_rows($result)>0){
    echo "data fetched";
}
else{
    echo "data access failed.";
}
?>

<?php
$db_host = "sql313.epizy.com";
$db_user = "epiz_25143161";
$db_password = "fMZ1XvdZ5Q";        // the password has been changed.
$db_name = "epiz_25143161_loginsystem";
$conn = mysqli_connect($db_host,$db_user,$db_password,$db_name);
if(!$conn){ echo "failed"; }
echo "success";
$dbconn = mysqli_select_db ( $conn,$db_name);
echo $dbconn;
$sql = "SELECT * FROM `user`";
$result = mysqli_query($conn,$sql);

$a = var_dump($conn);
$b = var_dump($result);
echo $a;
echo $b;

if(mysqli_num_rows($result)>0){
    echo "data fetched";
}
else{
    echo "data access failed.";
}
?> -->



<?php

$db_host = "sql313.epizy.com";
$db_user = "epiz_25143161";
$db_password = "fMZ1XvdZ5Q";
$db_name = "epiz_25143161_loginsystem";
$conn = mysqli_connect($db_host,$db_user,$db_password,$db_name);
if(!$conn)
{ echo "failed"; die(); }
echo "<br>success<br>";
$sql = "SELECT * FROM users"; 
$result = mysqli_query($conn,$sql);
echo '<br>Conn:<br>'; 
var_dump($conn); 
echo '<br><br>Result:<br>';
var_dump($result);
$row = mysqli_fetch_assoc($result); 

if(mysqli_num_rows($result)>0){ echo "data fetched"; } 
else{ echo "data access failed."; }
?>