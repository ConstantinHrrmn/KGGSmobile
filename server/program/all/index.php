<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include "../../pdo.php";
    
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

echo json_encode(GetAllMatchs());
