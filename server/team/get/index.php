<?php

include "../../pdo.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
    
function GetTeam($id){
    static $query = null;
    if ($query == null) {
      $req = "SELECT `Team`.`IdTeam`, `Team`.`Name`, `Team`.`Number`, case when `User`.`First Name` is null then 'Pas de Coach' else `User`.`First Name` end as 'Coach' FROM `Team` LEFT JOIN `User` ON `Team`.`IdUser` = `User`.`IdUser`";
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

function GetAllTeams(){
  static $query = null;
    if ($query == null) {
      $req = "SELECT `Team`.`IdTeam`, `Team`.`Name`, `Team`.`Number`, `User`.`First Name` as 'Coach' FROM `Team` LEFT JOIN `User` ON `Team`.`IdUser` = `User`.`IdUser`";
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

if(isset($_POST['id'])){
    echo json_encode(GetTeam($_POST['id']));
}if(isset($_GET['all'])){
    echo json_encode(GetAllTeams());
}
