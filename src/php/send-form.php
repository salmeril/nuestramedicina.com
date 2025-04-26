<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "salmerilucas@gmail.com"; // <-- acá ponés tu email real
    $subject = "Nueva solicitud de formulario de seguro";
    
    $fullName = $_POST['full-name'];
    $dob = $_POST['dob'];
    $insuranceName = $_POST['insurance-name'];
    $insuranceId = $_POST['insurance-id'];
    $groupNumber = $_POST['group-number'];
    $policyholderName = $_POST['policyholder-name'];

    $message = "Información Personal:\n";
    $message .= "Nombre: $fullName\n";
    $message .= "Fecha de nacimiento: $dob\n\n";
    $message .= "Información del seguro:\n";
    $message .= "Nombre del seguro: $insuranceName\n";
    $message .= "ID del seguro: $insuranceId\n";
    $message .= "Número de grupo: $groupNumber\n";
    $message .= "Titular de la póliza: $policyholderName\n";

    $headers = "From: no-reply@tudominio.com\r\n";
    $headers .= "Reply-To: no-reply@tudominio.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo
    mail($to, $subject, $message, $headers);

    // Redirigir a página de gracias o volver
    header("Location: gracias.html");
    exit;
}
?>
