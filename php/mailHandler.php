
<?php

if(isset($_POST['form-submit'])){
    $businessName = $_POST['user-business'];
    $userName = $_POST['user-name'];
    $userEmail = $_POST['user-email'];
    $userWorking = $_POST['user-working'];
    $message = $_POST['user-message'];
    $contactMethod = $_POST['contact-method'];


    $to = "Goodgek@outlook.com";
    $subject = "email from your website";

    $text = "Business Name : ". $businessName ."\nName : ". $userName ."\nEmail : ". $userEmail ."\nWorking : ". $userWorking . "\nMessage : ". $message . "\nContact Method : ". $contactMethod;

    $headers = "Form : noreplay@yourDomainName.com";


    if(isset($_POST['h-captcha-response'])){
        $recaptcha = $_POST['h-captcha-response'];

        if(!$recaptcha){
            echo 'Failed captcha';
            exit;
        }
        else{
            $secretKey = "0x44cA691adC844f5b93D7ba6e97B8C69BB037d521";
            $url = 'https://hcaptcha.com/siteverify?secret='.$secretKey.'&response='.$recaptcha;

            $response = file_get_contents($url);
            $responseKeys = json_decode($response, true);
            
            if($responseKeys['success']){
                mail($to, $subject, $text, $headers);
                echo "<script> alert('Thanks for your response') </script>";
            }
            else{
                echo "<p> captcha error occured. </p>";
            }
        }
    }

}


?>