<?php
   $name = $_POST['name'];
   $visitor_email = $_POST['email'];
   $subject = $_POST['subject'];
   $message = $_POST['message'];
   
   $email_from = 'zmrshao@gmail.com';
   $email_subject = "New message: $subject";
   $email_body = "You have received a new message from $name.\n\n$message";
   
   $to = "zmrshao@gmail.com";
   $headers = "From: $email_from \r\n";
   $headers .= "Reply-To: $visitor_email \r\n";
   mail($to, $email_subject, $email_body, $headers);
   
   Thank you for contacting us. Your message has been received.
?>