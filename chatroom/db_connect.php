<?php
$servername = "hosting server name";
$username = "username";
$password = "your password";
$database = "your database name";

// Creating database connection
$conn = mysqli_connect($servername, $username, $password, $database);

// Check Connection
if(!$conn)
{
    die("Failed to connect". mysqli_connect_error());
}


?>