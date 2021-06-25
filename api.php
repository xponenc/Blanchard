<?

	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$dbh = new PDO('mysql:host=localhost;dbname=cw30554_bd', 'cw30554_bd', 'L7y6QbJ9');
	$stmt = $dbh->prepare("INSERT INTO `order`(`time`, name, phone)
		VALUES (NOW(), :name, :phone)");
	$stmt->bindParam(':name', $name);
	$stmt->bindParam(':phone', $phone);
	$stmt->execute();

	echo '1';
