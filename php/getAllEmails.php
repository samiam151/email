<?php
require_once('db/Database.php');
header('Content-type: application/json');


$db = new Database();
$conn = $db->getConnection();
$results = $conn->query('SELECT * FROM emails');
$forJSON = $results->fetchAll();


echo json_encode(['emails' => $forJSON]);