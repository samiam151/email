<?php

class Database
{
    // specify database credentials
    private $username = 'root';
    private $password = "root";
    private $host = "localhost:8889";
    private $db_name = 'first-ng-php';
    public $conn;

    // retrieve the database connection 
    public function getConnection()
    {
        try 
        {  
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        } 
        catch(PDOException $exception)
        {
            echo "Connection Error: " . $exception->getMessage();
        }
        return $this->conn;
    }
}
