<?php
$roomname = $_GET['roomname'];

// Connecting to database
include 'db_connect.php';

// Execute sql to check whether room exists
$sql = "SELECT * FROM `rooms` WHERE roomname ='$roomname'";

$result = mysqli_query($conn, $sql);
if($result)
{
    // Check if room exists
    if(mysqli_num_rows($result) ==0 )
    {
        $message = "This room doesn't exist. Try creating new room";
        echo '<script language="javascript">';
        echo 'alert("' .$message. '");';
        echo 'window.location="http://av1shek.epizy.com/chatroom/";';    /////////////////////////////////////////////////////////////////////////////////
        echo '</script>';
    }
}
else
{
    echo "Error: ". mysqli_error($conn);
}
?>

<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link href="css/product.css" rel="stylesheet">
<link href="css/mycss2.css" rel="stylesheet">
<link rel="icon" href="img/icon.png">

</head>
<body>
<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal"><strong>AnonymousChat.com</strong></h5>
  <nav class="my-2 my-md-0 mr-md-3">
    <a class="p-2 text-dark" href="#">Home</a>
    <a class="p-2 text-dark" href="#">About</a>
    <a class="p-2 text-dark" href="#">Contact</a>
  </nav>
</div>
<h2>Chat Messages - <?php echo $roomname; ?></h2>


<div class="container" id="container">
    <div class="anyClass" id="anyClass">
  
</div>
</div>

<input type="text" class = "form-control" name="usermsg" id="usermsg" placeholder="Add message"><br>
<button class="btn btn-secondary" name="submitmsg" id="submitmsg">Send</button>


<!-- jquery and bootstrap scripts -->
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous">
</script>


<script type="text/javascript">
let scrolled = false;

// Check for new messages every 1 second
setInterval(() => {

// Make a post req to htcont.php where it will return all the data fetched from database
  $.post("htcont.php", {room:'<?php echo $roomname ?>'},
  function(data, status)
  {  // Change the dom only when there is new message
     if(document.getElementsByClassName('anyClass')[0].innerHTML != data)
      {document.getElementsByClassName('anyClass')[0].innerHTML = data;
      // To make the list always at the bottom
        scroll();
      }
  }
  )


}, 1000);
    
// Using enter key trigger submit button
var input = document.getElementById("usermsg");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("submitmsg").click();
  }
});


// Event listener at send button only submit the message to database
$("#submitmsg").click(function(){
  let clientmsg = $("#usermsg").val();
  $.post("postmsg.php", {text: clientmsg, room:'<?php echo $roomname ?>', ip:'<?php echo $_SERVER['REMOTE_ADDR'] ?>' });
         $("#usermsg").val("");
         return false;
    });

// To keep chat at the bottom
function scroll()
{
  if(!scrolled)
      {$('#anyClass').scrollTop($('#anyClass').prop("scrollHeight"));}
}

//To check whether user is scrolling or not
$("#anyClass").on('scroll', function(){
  scrolled = true;
  setTimeout(function(){
    scrolled = false;
  console.log("done");
}, 1000);

});


</script>
</body>

</html>
