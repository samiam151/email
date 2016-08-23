<?php
require_once('Database.php');

class Email {
    
    private static $conn;

    private static function init(){
        self::$conn = Database::connect();
    }

    public static function getAllEmails(){
        self::init();
        return self::$conn->query('SELECT * FROM emails')->fetchAll();
    }

    public static function getEmail($id){
        self::init();
        return self::$conn->query("SELECT * FROM emails WHERE message_id=$id")->fetch();
    }

    public static function createEmail(){
        
    }

    public static function deleteEmail($id){
        self::init();
        self::$conn->exec("DELETE FROM emails WHERE message_id=$id");
    }
}