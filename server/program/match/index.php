<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "../../pdo.php";
    
function GetTeamsForMatchByMatchId($id){
    static $query = null;
    if ($query == null) {
      $req = "SELECT `Team`.`IdTeam` as 'id', `Team`.`Number`, `Team`.`Name`, `Play`.`Score` FROM `Play` INNER JOIN `Team` ON `Team`.`IdTeam` = Play.IdTeam WHERE `IdMatch` = :id";
      $query = database()->prepare($req);
    }
    try {
      $query->bindParam(':id', $id, PDO::PARAM_STR);
      $query->execute();
      $res = $query->fetchAll(PDO::FETCH_ASSOC);
    }
    catch (Exception $e) {
      error_log($e->getMessage());
      $res = false;
    }
    return $res;
}

function GetMatchInfosById($id){
    static $query = null;
    if ($query == null) {
      $req = "SELECT `IdMatch`, `Field`.`Name` as 'terrain', `User`.`First Name` as 'arbitre', `Day`.`Name` as 'jour', `Time`.`Begin` as 'debut', `Time`.`End` as 'fin', `Sport`.`Name` as 'dicipline', `Sport`.`TeamsAmount` as 'nombre equipes' FROM `Game` INNER JOIN User ON `User`.`IdUser` = `Game`.`IdUser` INNER JOIN Day ON Day.IdDay = Game.IdDay INNER JOIN Field ON Field.IdField = Game.IdField INNER JOIN Sport ON Sport.IdSport = Game.IdSport INNER JOIN `Time` ON`Time`.`IdTime` = Game.IdTime WHERE `IdMatch` = :id";
      $query = database()->prepare($req);
    }
    try {
      $query->bindParam(':id', $id, PDO::PARAM_STR);
      $query->execute();
      $res = $query->fetchAll(PDO::FETCH_ASSOC);
    }
    catch (Exception $e) {
      error_log($e->getMessage());
      $res = false;
    }
    return $res;
}

function GetAllMatchs(){
  static $query = null;
  if ($query == null) {
    $req = "SELECT `IdMatch`, `Field`.`Name` as 'terrain', `User`.`First Name` as 'arbitre', `Day`.`Name` as 'jour', `Time`.`Begin` as 'debut', `Time`.`End` as 'fin', `Sport`.`Name` as 'dicipline', `Sport`.`TeamsAmount` as 'nombre equipes' FROM `Game` INNER JOIN User ON `User`.`IdUser` = `Game`.`IdUser` INNER JOIN Day ON Day.IdDay = Game.IdDay INNER JOIN Field ON Field.IdField = Game.IdField INNER JOIN Sport ON Sport.IdSport = Game.IdSport INNER JOIN `Time` ON`Time`.`IdTime` = Game.IdTime ORDER BY `Day`.`IdDay`ASC, `Time`.`IdTime` ASC";
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


if(isset($_GET['needTeams']) and isset($_GET['id'])){
    echo json_encode(GetTeamsForMatchByMatchId($_GET['id']));
}
if(isset($_GET['needMatch']) and isset($_GET['id'])){
    echo json_encode(GetMatchInfosById($_GET['id']));
}
if(isset($_GET['needProgram'])){
  echo json_encode(GetAllMatchs());
}
