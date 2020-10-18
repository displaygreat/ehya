<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];


// Формирование самого письма
$title = "Новое обращение Ehya";
$body = "
<h2>Новое обращение</h2>
<b>Эл.почта:</b> $email<br><br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.hostinger.co.il'; // SMTP сервера вашей почты
    $mail->Username   = 'oxana'; // Логин на почте
    $mail->Password   = 'Shva9301264#'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 587;
    $mail->setFrom('oxana@heydayweb.site', 'oxana'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('oxana@heydayweb.site');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location:thankyou.html');