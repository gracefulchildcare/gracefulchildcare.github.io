<?php
   if (isset($_POST['submit'])) {
      $name = safe($_POST['name']);
      $visitorEmail = safe($_POST['email']);
      $subject = safe($_POST['subject']);
      $message = safe($_POST['message']);
      
      $gccEmail = "zmrshao@gmail.com";
      $headers = "From: ".$visitorEmail;
      $headers .= "Reply-To: ".$visitorEmail;
      $txt = "You have received a new message from ".$name.".\n\n".$message;
      
      mail($gccEmail, $subject, $txt, $headers);
      header("Location: https://gracefulchildcare.com/contact");
      exit;
   }
   
   function safe($data) {
      $data = trim($data);
      $data = stripslashes($data);
      $data = htmlspecialchars($data);
      return $data;
   }
?>