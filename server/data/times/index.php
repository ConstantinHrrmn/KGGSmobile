<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include '../../pdo.php';

function GetAllTimes(){
    $req = "SELECT `IdTime` as 'id', `Begin` as 'debut', `End` as 'fin' FROM `Time`";
    $query = database()->prepare($req);
    $query->execute();
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
    return $res;
}

echo json_encode(GetAllTimes());