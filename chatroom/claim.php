<?php
// Getting value of post parameters
$room = $_POST['room'];

// Checking whether room name is alphanumeric
if(strlen($room)>20 or strlen($room)<2)
{
    $message = "Please choose a name between 2 to 20 characters.";
    echo '<script language="javascript">';
    echo 'alert("' .$message. '");';
    echo 'window.location="http://av1shek.epizy.com/chatroom/";';            /////////////////////////////////////////////////////////////////////
    echo '</script>';
}

else if(!ctype_alnum($room))
{
    $message = "Please choose an alphanumeric room name.";
    echo '<script language="javascript">';
    echo 'alert("' .$message. '");';
    echo 'window.location="http://av1shek.epizy.com/chatroom/";';        ////////////////////////////////////////////////////////////////////////
    echo '</script>';
}

else
{
    // Connect to database
    include 'db_connect.php';

}

// Checking if room already exists

$sql = "SELECT * FROM `rooms` WHERE roomname = '$room'";
$result = mysqli_query($conn, $sql);
if($result)
{
    if(mysqli_num_rows($result)>0)
    {
        $message = "Please choose a different room name. This room is already claimed";
        echo '<script language="javascript">';
        echo 'alert("' .$message. '");';
        echo 'window.location="http://av1shek.epizy.com/chatroom/";';        //////////////////////////////////////////////////////////////////////////
        echo '</script>';
    }

    else
    {
        
        $sql = "INSERT INTO `rooms` ( `roomname`, `stime`) VALUES ( '$room', CURRENT_TIMESTAMP );";
        if(mysqli_query($conn, $sql) )
        {
            $message = "Your room is ready and you can chat now!";
            echo '<script language="javascript">';
            echo 'alert("' .$message. '");';
            echo 'window.location="http://av1shek.epizy.com/chatroom/rooms.php?roomname=' . $room. '";';    //////////////////////////////////////////////
            echo '</script>';
        }
        else{
            echo "Error: ".mysqli_error($conn);
        }
    }
}
else
{
    echo 'Error: '. mysqli_error($conn) ;
}


?>