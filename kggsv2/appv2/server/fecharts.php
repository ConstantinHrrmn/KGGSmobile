<?php
require('database.php');

class fecharts {

    private $conn;

    public function __construct()
    {
        $this->conn = database::getInstance()->getConnection();
    }

    private function getAllCharacters() {
        $stmt = $this->conn->prepare("
            SELECT 
                Id_Character as id, 
                Nm_First as firstName, 
                Nm_Last as lastName, 
                Nm_File_Img as imgFileName, 
                Id_House as idHouse, 
                Id_Gender as idGender
            FROM Tbl_Character
        ");
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    private function getAllCharactersGrowthRates() {
        $stmt = $this->conn->prepare("
            SELECT 
                Nb_Value as value, 
                Id_Character as idCharacter, 
                Id_Stat as idStat
            FROM Tbl_Character_Growth_Rate
        ");

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    private function getAllClassesGrowthRates() {
        $stmt = $this->conn->prepare("
            SELECT 
                Nb_Value as value, 
                Id_Class as idClass, 
                Id_Stat as idStat
            FROM Tbl_Class_Growth_Rate
        ");

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    private function getAllClasses() {
        $stmt = $this->conn->prepare("
            SELECT  
                Id_Class as id, 
                Nm_Class as name, 
                Is_Available_For_All as isAvailableForAll, 
                Id_Gender as idGender
            FROM Tbl_Class
        ");

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    private function getAllGenders() {
        $stmt = $this->conn->prepare("
            SELECT  
                Id_Gender as id, 
                Nm_Gender as name 
            FROM Tbl_Gender 
            ORDER BY id ASC
        ");

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    private function getAllHouses() {
        $stmt = $this->conn->prepare("
            SELECT  
                Id_House as id, 
                Nm_House as name 
            FROM Tbl_House 
            ORDER BY id ASC
        ");        

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    public function getAllRestrictedClasses() {
        $stmt = $this->conn->prepare("
            SELECT  
                Id_Class as idClass, 
                Id_Character as idCharacter 
            FROM Tbl_Character_Class
        ");        

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    private function getAllStats() {
        $stmt = $this->conn->prepare("
            SELECT  
                Id_Stat as id, 
                Nm_Stat as name, 
                Nm_Short as shortName 
            FROM Tbl_Stat
        ");        

        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        return $result;
    }

    private function getCatalogueLastVersion() {
        $stmt = $this->conn->prepare("
            SELECT 
                No_Version as version, 
                Dttm_Last_Update as lastUpdate 
            FROM Tbl_Catalogue 
            ORDER BY lastUpdate DESC 
            LIMIT 1
        ");        

        $stmt->execute();
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        return array_values($result)[0];
    }

    public function getAllData() {
        $data = new stdClass();

        $data->version = $this->getCatalogueLastVersion();
        $data->characters = $this->getAllCharacters();
        $data->charGrowthRates  = $this->getAllCharactersGrowthRates();
        $data->classGrowthRates  = $this->getAllClassesGrowthRates();
        $data->classes = $this->getAllClasses();
        $data->genders = $this->getAllGenders();
        $data->houses = $this->getAllHouses();
        $data->restrictedClasses = $this->getAllRestrictedClasses();
        $data->stats = $this->getAllStats();

        return $data;
    }

    public function getUpdatedData($clientVersion) {
        $serverVersion = $this->getCatalogueLastVersion();
        if (version_compare($clientVersion, $serverVersion, '<')) {
            return $this->getAllData();
        } else {
            return null;
        }
    }

    public function getCurrentVersion() {
        $version = new stdClass();
        $version->version = $this->getCatalogueLastVersion();
        return $version;
    }
}