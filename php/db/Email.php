<?php
require_once('Database.php');

class Email {
    private static $db;
    private static $conn;
    private static $test;

    private static function init(){
        self::$conn = Database::getConnection();
    }

    public static function getAllEmails(){
        self::init();
        return self::$conn->query('SELECT * FROM emails')->fetchAll();
    }

    public static function getMessage($id){
        self::init();
        return self::$conn->query("SELECT * FROM emails WHERE message_id=$id")->fetch();
    }
}
