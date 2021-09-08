<?

	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$dbh = new PDO('mysql:host=localhost;dbname=cw30554_bd', 'cw30554_bd', 'L7y6QbJ9');
	$stmt = $dbh->prepare("INSERT INTO `order`(`time`, name, phone)
		VALUES (NOW(), :name, :phone)");
	$stmt->bindParam(':name', $name);
	$stmt->bindParam(':phone', $phone);
	$stmt->execute();

	// echo 'Форма - заявка принята';
	// Отправка почты Timeweb
	$message = "Blanchard: новая заявка\n{$name}\n$phone";
	$message = wordwrap($message, 70);
	$mail_sended = mail('boykov@mail.ru', 'Blanchard - Заявка с сайта', $message);

	if (!$mail_sended) {
		header('Location: error.html');
	}

	//  отправка сообщения в телеграм

	$token = "1951376079:AAEw-GH8yfAASYdhJK2XyRSk9dLKNZcEvV0";
	$chat_id = "-582185223";
	$arr = array(
	'Имя пользователя: ' => $name,
	'Телефон: ' => $phone,
	);

	foreach($arr as $key => $value) {
	$txt .= "<b>".$key."</b> ".$value."%0A";
	};

	$txt= "<b>Blanchard: новая заявка%0A</b>".$txt;
	$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

	if ($sendToTelegram) {
	header('Location: thanks.html');
	} else {
	header('Location: error.html');
	}
?>
