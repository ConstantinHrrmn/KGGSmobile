<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include '../../pdo.php';

function GetAllDays(){
    $req = "SELECT `IdDay` as 'id', `Name` as 'nom' FROM `Day`";
    $query = database()->prepare($req);
    $query->execute();
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
    return $res;
}

echo json_encode(GetAllDays());