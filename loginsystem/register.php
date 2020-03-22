<!DOCTPYE html>
	<html>

	<head>
		<title>Register form</title>
		<style type="text/css">
			input[type="submit"] {
				cursor: pointer;
			}
		</style>


	</head>

	<body background="coffe.jpeg" style="text-align: center; background-size: cover; background-repeat: no-repeat;">

		<h3>Register Here</h3>

		<form action="loginsign.php" method="POST">
<center>
			<table style="border:1px solid black;padding:10px;"> 
				<tr>
					<td>Username:</td>
					<td>
						<input type="text" name="user" placeholder="enter name here">
					</td>
				</tr>

				<tr>
					<td>Password:</td>
					<td>
						<input type="password" name="user_pass" placeholder="enter password here">
					</td>

				</tr>

				<tr>
					<td>Email:</td>
					<td>
						<input type="email" name="mail" placeholder="enter email here">
					</td>
				</tr>

				<tr>
					<td>Gender:</td>
					<td>
					<input type="radio" name="gender" value="Female">Female
						<input type="radio" name="gender" value="Male">Male
						<input type="radio" name="gender" value="Others">Others
					</td>
				</tr>

				<tr>
					<td>Phone:</td>
					<td>
						<select>
							<option>+91</option>
							<option>+254</option>
							<option>+255</option>
							<option>+256</option>
						</select>
						<input type="phone" name="mobile" placeholder="74********" maxlenth="10">
					</td>

				<tr>
					<td>
						<input type="submit" name="submit" value="Submit">
					</td>
					<td>
						Already a user?<a href="login.php">
							Login here</a>
					</td>
				</tr>
				</tr>
			</table>
			</center>
		</form>
		</body>
		</html>