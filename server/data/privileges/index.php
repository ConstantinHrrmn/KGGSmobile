<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include '../../pdo.php';

function GetAllPrivileges(){
    static $query = null;
    if ($query == null) {
      $req = "SELECT `IdSecurityLevel` as 'id', `Name` as 'nom', `Level` as 'level' FROM `SecurityLevel`";
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

  if(isset($_GET['get']) and isset($_GET['all'])){
    echo json_encode(GetAllPrivileges());
}