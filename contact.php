<?php
session_start();

// Definir el límite de tasa para evitar abuso del formulario
define('RATE_LIMIT', 5); // Máximo de 5 solicitudes
define('RATE_LIMIT_TIME', 60 * 5); // En un intervalo de 5 minutos

// Función para verificar si el usuario ha superado el límite de solicitudes
function isRateLimited($ip) {
    $file = sys_get_temp_dir() . "/rate_limit_" . md5($ip);
    if (file_exists($file)) {
        $data = json_decode(file_get_contents($file), true);
        if (time() - $data['timestamp'] < RATE_LIMIT_TIME) {
            if ($data['count'] >= RATE_LIMIT) {
                return true; // Límite superado
            }
            $data['count']++;
        } else {
            $data = ['count' => 1, 'timestamp' => time()];
        }
    } else {
        $data = ['count' => 1, 'timestamp' => time()];
    }
    file_put_contents($file, json_encode($data));
    return false;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $ip = $_SERVER['REMOTE_ADDR'];

    if (isRateLimited($ip)) {
        echo 'You have exceeded the request limit. Please try again later.';
        exit;
    }

    // Configuración del reCAPTCHA
    $recaptcha_secret = '6Lc06BAqAAAAAPYAZDnGdIlfjLcEmaRwKhAAZxHI'; // Reemplaza con tu clave secreta
    $recaptcha_response = $_POST['g-recaptcha-response'];

    // Verificar el reCAPTCHA
    $recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
    $recaptcha_data = array(
        'secret' => $recaptcha_secret,
        'response' => $recaptcha_response,
        'remoteip' => $ip
    );

    $options = array(
        'http' => array(
            'method' => 'POST',
            'header' => 'Content-type: application/x-www-form-urlencoded',
            'content' => http_build_query($recaptcha_data),
        ),
    );

    $context = stream_context_create($options);
    $recaptcha_verify = file_get_contents($recaptcha_url, false, $context);
    $recaptcha_result = json_decode($recaptcha_verify);

    // Verificar si el reCAPTCHA fue exitoso y tiene un puntaje aceptable
    if (!$recaptcha_result->success || $recaptcha_result->score < 0.5) {
        echo 'The reCAPTCHA verification failed. Please try again.';
        exit;
    }

    // Sanitizar y validar los datos del formulario
    $name = htmlspecialchars($_POST['name'], ENT_QUOTES, 'UTF-8');
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8');
    $message = htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8');

    // Validar campos obligatorios
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo 'Please complete all fields.';
        exit;
    }

    // Validar el formato del correo electrónico
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo 'The email is not valid.';
        exit;
    }

    // Protección contra inyección de encabezados
    function isValidHeader($str) {
        return (strpos($str, "\n") === false && strpos($str, "\r") === false);
    }

    if (!isValidHeader($name) || !isValidHeader($email) || !isValidHeader($subject)) {
        echo 'Invalid entry.';
        exit;
    }

    // Configuración del correo
    $to = 'info@theclandestino.com'; // Reemplaza con la dirección de destino real
    $headers = "From: " . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . " <" . filter_var($email, FILTER_VALIDATE_EMAIL) . ">\r\n";
    $headers .= "Reply-To: " . filter_var($email, FILTER_VALIDATE_EMAIL) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    if (mail($to, $subject, $message, $headers)) {
        echo 'The message has been sent successfully.';
    } else {
        echo 'There was a problem sending the message. Please try again.';
    }
} else {
    echo 'Disallowed method';
}
?>
