
<?php

    if(isset($_POST['form-submit'])){
        $businessName = $_POST['user-business'];
        $userName = $_POST['user-name'];
        $userEmail = $_POST['user-email'];
        $userPhone = $_POST['user-phone'];
        $message = $_POST['user-message'];


        $to = "nuralam.hstu.930@gmail.com";
        $subject = "email from your website";

        $text = "Business Name : ". $businessName ."\nName : ". $userName ."\nEmail : ". $userEmail ."\nMobile : ". $userPhone . "\nMessage : ". $message;

        $headers = "Form : noreplay@webdevnur.000webhostapp.com";


        if(isset($_POST['h-captcha-response'])){
            $recaptcha = $_POST['h-captcha-response'];

            if(!$recaptcha){
                echo 'Failed captcha';
                exit;
            }
            else{
                $secretKey = "0x170DeAA06f84C793aDd755DC52ebea0eEedfA950";
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