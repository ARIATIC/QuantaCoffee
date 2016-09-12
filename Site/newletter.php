<?php

  $to='info@quantacoffee.com';
  $subject='this is our test email';
  $message='<h1>hi there.</h1><p>thanks for testing</p>';
  $headers="From: the sender name <sales@quantacoffee.com>\r\n"; 
  $headers.="Reply-To:jugiraldo1@gmail.com\r\n";
  $headers.="Content-type: text/html\r\n";
  mail($to,$subject,$message,$headers);

?>