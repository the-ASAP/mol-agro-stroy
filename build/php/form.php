<?php

function clean($value = "") {
    $value = trim($value);
    $value = stripslashes($value);
    $value = strip_tags($value);
    $value = htmlspecialchars($value);
    
    return $value;
}

$name = clean($_POST['name']);
$tell = clean($_POST['phone']);
$email = clean($_POST['email']);
$doit = clean($_POST['text']);

if(empty($name) || $name == "") {
    $data = array('type' => 'name', 'message' => 'Укажите Ваше имя!');
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data);
} 
else if(empty($tell) || $tell == "") {
    $data = array('type' => 'tell', 'message' => 'Укажите ваш телефон!');
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data);
}
else if(empty($email) || $email == "") {
    $data = array('type' => 'email', 'message' => 'Укажите email');
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data);
}
else if(empty($doit) || $doit == "") {
    $data = array('type' => 'texts', 'message' => 'Укажите род деятельности');
    header('HTTP/1.1 400 Bad Request');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data);
}
else {
    $data = array('type' => 'success', 'message' => 'Сообщение успешно отправлено!');
    
    $mail="pavel.pronchatov155@gmail.com";
    $subject ="Новая заявка";
    $text= "Имя: ".$name."\nТелефон: ".$tell."\nВид котельной: ".$email."\nВид котельной: ".$doit."\nВид котельной: ".$doit;
    mail($mail, $subject, $text);

    echo json_encode($data);
}
