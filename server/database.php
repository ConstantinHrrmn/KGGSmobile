<?php

// Singleton to connect db.
class database
{
    // Hold the class instance.
    private static $instance = null;
    private $conn;

    private $host = 'localhost';
    private $user = 'root';
    private $pass = '';
    private $name = 'fe_charts';
    private $port = '';

    // The db connection is established in the private constructor.
    private function __construct()
    {
        try {
            $this->conn = new PDO(
                "mysql:host={$this->host};dbname={$this->name};port={$this->port}",
                $this->user,
                $this->pass
            );
        } catch (PDOException $e) {
            die('Connection failed: ' . $e->getMessage());
        }
    }

    public static function getInstance()
    {
        if (!self::$instance) {
            self::$instance = new database();
        }

        return self::$instance;
    }

    public function getConnection()
    {
        return $this-> conn;
    }
}
