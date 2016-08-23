<?php
require_once('db/Email.php');

// Get the email ID to retrieve
$id = (integer)(json_decode(file_get_contents("php://input"))->id);

// Drop selected table
Email::deleteEmail($id);