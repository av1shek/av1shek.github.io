<?php
$room = $_POST['room'];
include 'db_connect.php';
$sql = "SELECT msg, stime, ip FROM msgs WHERE room= '$room'";
$html_content="";
$result = mysqli_query($conn, $sql);
if(mysqli_num_rows($result)>0)
{
    while($row = mysqli_fetch_assoc($result))
    {
        $html_content = $html_content . '<div class="container msg">';
        $html_content = $html_content . $row['ip'];
        $html_content = $html_content . " says <p>" . $row['msg'];
        $html_content = $html_content . '</p> <span class="time-right">' . $row["stime"] . '</span></div>';
    }
}
echo $html_content;

?>