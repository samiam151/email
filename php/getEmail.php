<?php
require_once('db/Database.php');

// Get the email ID to retrieve
$id = (integer)(json_decode(file_get_contents("php://input"))->id);

// Get the specific email
$results = Email::getEmail($id);

// Send the results back
echo json_encode(['message' => $results]);