<?php

	$fname = $_POST['fname'];
	$lname = $_POST['lname'];
	$email = $_POST['email'];
	$message = $_POST['message'];
	
	$to = "agentwhs@gmail.com";
	$subject = "Email From Personal Website";
	$body = "\n $message \n\n From: $email by $fname $lname";

	mail($to, $subject, $body);
	//header("location: new.html");
	echo "<h1 style='display: block; text-align: center; font-weight: 200; font-family: \"Microsoft Yahei\"; margin-top: 50px; background-color: #f1c40f; color: white; padding: 30px 0'>Message sent successfully! <br/>Thank you for contacting me. <br/>I will get back to you very soon</h1><br/><h2 style='display: block; text-align: center; font-weight: 200; font-family: 'Microsoft Yahei'><a src='' href='new.html'>Click Here</a> To Get Back To Home Page</h2>";
?>