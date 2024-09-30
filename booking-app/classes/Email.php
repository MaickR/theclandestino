<?php

namespace Classes;

use PHPMailer\PHPMailer\PHPMailer;

class Email
{
   
    public $nombre;
    public $email;
    public $token;

    public function __construct( $nombre, $email, $token)
    {
       
        $this->nombre = $nombre;
        $this->email =  $email;
        $this->token = $token;
    }

    public function enviarConfirmacion()
    {

        //* Crear objeto de email
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = 'e24a0846323b38';
        $mail->Password = 'aaae077c52ef40';

        $mail->setFrom('info@theclandestino.com');
        $mail->addAddress('info@theclandestino.com', 'theclandestino.com');
        $mail->Subject = 'Confirm your account';

        //*set HTML
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';

        $contenido = "<html>";
        $contenido .= "<p><strong> Hi  " . $this -> nombre .  "</strong> You have created your account to make a reservation 
        at The Clandestino USA, to finish you must click the following link</p>";
        $contenido .= "<p>Press Here: <a href='http://localhost:3001/confirmar-cuenta?token=". $this->token . "'>Confirm account</a></p>";
        /* $contenido .= "<p>Press Here: <a href='https://theclandestino.com/confirmar-cuenta?token=". $this -> token. "'></a>Confirm account</p>"; */
        $contenido .= "<p>If you did no request this account, you can ignore the message</p>";
        $contenido.= "</html>";

        $mail->Body =$contenido;

        //*Enviar el mail
        $mail -> send();
    }

    public function enviarInstrucciones() {
        
        
        //* Crear objeto de email
        $mail = new PHPMailer();
        $mail->isSMTP();
        $mail->Host = 'sandbox.smtp.mailtrap.io';
        $mail->SMTPAuth = true;
        $mail->Port = 2525;
        $mail->Username = 'e24a0846323b38';
        $mail->Password = 'aaae077c52ef40';

        $mail->setFrom('info@theclandestino.com');
        $mail->addAddress('info@theclandestino.com', 'theclandestino.com');
        $mail->Subject = 'Reset your password';

        //*set HTML
        $mail->isHTML(true);
        $mail->CharSet = 'UTF-8';

        $contenido = "<html>";
        $contenido .= "<p><strong> Hi  " . $this -> nombre .  "</strong> Continue to the following link to reset your password</p>";
        $contenido .= "<p>Press Here: <a href='http://localhost:3001/recuperar?token=". $this->token . "'>Reset password</a></p>";
        /* $contenido .= "<p>Press Here: <a href='https://theclandestino.com/confirmar-cuenta?token=". $this -> token. "'></a>Confirm account</p>"; */
        $contenido .= "<p>If you did no request this account, you can ignore the message</p>";
        $contenido.= "</html>";

        $mail->Body =$contenido;

        //*Enviar el mail
        $mail -> send();
    }
}
