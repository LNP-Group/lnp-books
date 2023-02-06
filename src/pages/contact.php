<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to_email = 'cioarecstelian@gmail.com';

    mail(
        $to_email,
        $subject,
        $message,
        "From: $name <$email>"
    );

?>
    