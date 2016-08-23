<?php
require_once('db/Database.php');

// Get the email ID to retrieve
$id = (integer)(json_decode(file_get_contents("php://input"))->id);

// Get the specific email
$db = new Database();
$conn = $db->getConnection();
$results = $conn->query("SELECT * FROM emails WHERE message_id=$id")->fetch();

// Send the results back
echo json_encode(['message' => $results]);

