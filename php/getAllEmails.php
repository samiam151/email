<?php
require_once('db/Email.php');

// Get all emails
$results = Email::getAllEmails();

// Send the results back
echo json_encode(['emails' => $results]);