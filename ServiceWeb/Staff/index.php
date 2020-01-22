<?php

include "../pdo.php";
include "../Token/validate.php";

function GetById($id){
    $req = "SELECT `id`,`nom`,`prenom`,`age`,`idRole`,`phone`, `token` as 'access' FROM `Staff` WHERE `id` = :id LIMIT 1";
    $query = connecteur()->prepare($req);
    $query->bindParam(':id', $id, PDO::PARAM_STR);
    $query->execute();
    $matches = $query->fetchAll(PDO::FETCH_ASSOC);
    return $matches;
}

function GetByIdNoToken($id){
    $req = "SELECT `id`,`nom`,`prenom` FROM `Staff` WHERE `id` = :id LIMIT 1";
    $query = connecteur()->prepare($req);
    $query->bindParam(':id', $id, PDO::PARAM_STR);
    $query->execute();
    $matches = $query->fetchAll(PDO::FETCH_ASSOC);
    return $matches;
}

if(isset($_GET['token'])){
    if(ValidateToken($_GET['token'])){
        if (isset($_GET['id'])) {
            echo json_encode(GetById($_GET['id']));
        }
    }
} else{
    if (isset($_GET['id'])) {
        echo json_encode(GetByIdNoToken($_GET['id']));
    } 
}
