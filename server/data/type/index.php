<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include '../../pdo.php';

function GetAllSports(){
    $req = "SELECT `IdSport` as 'id', `Name` as 'name', `TeamsAmount` as 'equipes' FROM `Sport`";
    $query = database()->prepare($req);
    $query->execute();
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
    return $res;
}

echo json_encode(GetAllSports());