<?php

include "../../pdo.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function GetUser($id){
    static $query = null;
    if ($query == null) {
      $req = "SELECT `IdUser`, `First Name`, `Last Name`, `Password`, `Mail`, `SecurityLevel`.`Name` as 'SecurityName', `SecurityLevel`.`Level` as 'SecurityLevel' FROM `User` INNER JOIN `SecurityLevel` ON `User`.`IdSecurityLevel` = `SecurityLevel`.`IdSecurityLevel` WHERE `User`.`IdUser` = :id";
      $query = database()->prepare($req);
    }
    try {
      $query->bindParam(':id', $id, PDO::PARAM_STR);
      $query->execute();
      $res = $query->fetch(PDO::FETCH_ASSOC);
    }
    catch (Exception $e) {
      error_log($e->getMessage());
      $res = false;
    }
    return $res;
}

function GetAllUsers(){
    static $query = null;
    if ($query == null) {
      $req = "SELECT `User`.`IdUser`, `First Name` as 'prenom', `Last Name` as 'nom', `Mail` as 'mail', `Password` as 'date', SecurityLevel.Level as 'niveau privilege', SecurityLevel.Name as 'privileges', `Team`.`IdTeam` as 'idTeam', `Team`.`Name` as 'nomEquipe', `Team`.`Number` as 'numEquipe' FROM `User` LEFT OUTER JOIN `Team` ON `User`.`IdUser` = `Team`.`IdUser` INNER JOIN `SecurityLevel` ON `User`.`IdSecurityLevel` = `SecurityLevel`.`IdSecurityLevel`";
      $query = database()->prepare($req);
    }
    try {
      $query->execute();
      $res = $query->fetchAll(PDO::FETCH_ASSOC);
    }
    catch (Exception $e) {
      error_log($e->getMessage());
      $res = false;
    }
    return $res;
}

function LoginUser($name, $pwd){
    static $query = null;
    if ($query == null) {
      $req = "SELECT `IdUser` as 'id', `First Name` as 'prenom', `Last Name` as 'name', `Mail` as 'mail', `SecurityLevel`.`Name` as 'secname', `SecurityLevel`.`Level` as 'seclevel' FROM `User` INNER JOIN `SecurityLevel` ON `SecurityLevel`.`IdSecurityLevel` = `User`.`IdSecurityLevel` WHERE `First Name` = :name AND `Password` = :pwd";
      $query = database()->prepare($req);
    }
    try {
        $query->bindParam(':name', $name, PDO::PARAM_STR);
        $query->bindParam(':pwd', $pwd, PDO::PARAM_STR);
      $query->execute();
      $res = $query->fetch(PDO::FETCH_ASSOC);
    }
    catch (Exception $e) {
      error_log($e->getMessage());
      $res = false;
    }
    return $res;
    
}


if(isset($_GET['id'])){
    echo json_encode(GetUser($_GET['id']));
}else if(isset($_GET['all'])){
    echo json_encode(GetAllUsers());
}else if(isset($_GET['login']) && isset($_GET['name']) && isset($_GET['pwd'])){
    echo json_encode(LoginUser($_GET['name'], $_GET['pwd']));
}