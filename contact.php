<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" href="img/icons/hansenbw.ico" />
	<title>Hansen's Contact</title>
	
	<!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.8/jquery.fullPage.css"> -->
	<link rel="stylesheet" href="css/contact.css">
	<link rel="stylesheet" href="css/header_footer.css">
	<!-- <link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> -->
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"></link>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
	<!-- <link rel="stylesheet" href="css/materialize.min.css"> -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
	<script type="text/javascript" src="http://code.jquery.com/jquery-2.1.4.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"></script>
	<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.5/js/materialize.min.js"></script> -->
	<!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.7.6/jquery.fullPage.min.js"></script> -->
	<script type="text/javascript" src="js/contact.js"></script>
	<script type="text/javascript" src="js/header_footer.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js"></script>
</head>
<body>
	<header></header>
	<div class="mainBody">
		<div class="top">
			<img src="img/blogs/hello.png" style="padding-top: 180px;" alt="">		
			<!-- <img src="img/blogs/welcome.png" style="margin-top: 10px;" alt=""> -->
		</div>
		<div class="content">
			<div class="Container">
				<div class="contactInfo col-sm-8 col-xs-12">
					<h3>CONTACT INFORMATION</h3>
					<h4>Hansen Wang</h4>
					<a href="tel:647-918-4722">647-918-4722</a><br/>
					<a href="mailto:h473wang@uwaterloo.ca">h473wang@uwaterloo.ca</a>
					<p>303 Westcourt Place<br/>
					   Waterloo, ON, Canada</p>
				    <a href="https://www.facebook.com/HansenWang.Price"><img src="img/icons/facebook.png" alt="" href="asd.com"></a>
					<a href="https://ca.linkedin.com/in/wanghansen"><img src="img/icons/linkedin.png" alt=""></a>
					<a href="https://github.com/SpartanII"><img src="img/icons/github.png" alt=""></a><br/>
					<a href="files/Hansen Wang.pdf" class="download_resume">DOWNLOAD RESUME</a>
				</div>
				<div class="contactPhoto col-sm-4 col-xs-12">
					<img src="img/myPhoto.png" alt="">
				</div>
				<div class="line col-sm-12"></div>
				<div class="email col-sm-7 col-xs-12">
					<h2 style="margin-top: 0px !important;">SEND A FRIENDLY HELLO</h2>
				    <form method="POST">
						Name *:<br/>
						<input type="text" name="fname" placeholder="First Name" style="width: 49%" required="required">
						<input type="text" name="lname" placeholder="Last Name" style="width: 49%; float: right;"><br/>
						Email *:
						<input type="email" name="email" placeholder="Email" style="width: 100%" required="required"><br/>
						Subject:
						<input type="text" name="subject" placeholder="Title" style="width: 100%">
						Message *:
						<br/><textarea name="message" required="required"></textarea><p>
						<input type="submit" name="submit" value="SUBMIT" class="submit_email">
					</form>
					<?php
						$fname = $_POST['fname'];
						$lname = $_POST['lname'];
						$email = $_POST['email'];
						$message = $_POST['message'];

						$to = "agentwhs@gmail.com";
						$subject = "Email From Personal Website";
						$body = "\n $message \n\n From: $email by $fname $lname";

						if (isset($_POST['submit'])) {
							$sent = mail($to, $subject, $body);
							if($sent){
					?>
					<script type="text/javascript">
					  swal("Thank you!", "The email has been sent successfully!", "success");
					</script>
					<?php
							}else{
					?>
					<script type="text/javascript">
					  swal("Sent failed", "Please resent the email again!", "error");
					</script>
					<?php
							}}
					?>
				</div>
				<div class="map col-sm-5 col-xs-12">
					<div id="blockmap"><a style="width: 100%; height: 390px; display: block;" href="geo:43.471523,-80.535338"></a></div>
					<div id="map"></div>
				</div>
			</div>
		</div>
	</div>
	<footer class="footer"></footer>
</body>
</html>