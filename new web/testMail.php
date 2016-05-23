<?php
	//send email
	$Email = $_REQUEST['email']; 
	var_dump($Email);
	$FirstName = $_POST['firstname'];
	var_dump($_POST['firstname']);
	$LastName = $_REQUEST['lastname'];
	$Message = $_REQUEST['message'];
	// mail( "agentwhs@gmail.com", "Message from your website: +$FirstName+$LastName","$Message Message", "From: someone $Email" );
	echo $_REQUEST['message'];
?>