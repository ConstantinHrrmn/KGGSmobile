<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include '../../pdo.php';

function GetAllFields(){
    $req = "SELECT `IdField` as 'id', `Name` as 'nom' FROM `Field`";
    $query = database()->prepare($req);
    $query->execute();
    $res = $query->fetchAll(PDO::FETCH_ASSOC);
    return $res;
}

echo json_encode(GetAllFields());