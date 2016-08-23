<?php

class Database {
    
    // specify database credentials
    private static $username = 'root';
    private static $password = "root";
    private static $host = "localhost:8889";
    private static $db_name = 'first-ng-php';
    private static $conn;

    // makes the database connection 
    public function connect(){
        try 
        {  
            self::$conn = new PDO("mysql:host=" . self::$host . ";dbname=" . self::$db_name, self::$username, self::$password);
        } 
        catch(PDOException $exception)
        {
            echo "Connection Error: " . $exception->getMessage();
        }
        return self::$conn;
    }
}
