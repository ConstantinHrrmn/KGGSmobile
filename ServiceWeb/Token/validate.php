<?php

function GetStaffByToken($token){
    $req = "SELECT * FROM `Staff` WHERE `token` = :token LIMIT 1";
    $query = connecteur()->prepare($req);
    $query->bindParam(':token', $token, PDO::PARAM_STR);
    $query->execute();
    $matches = $query->fetchAll(PDO::FETCH_ASSOC);
    return $matches;
}

function ValidateToken($token){
    $result = GetStaffByToken($token);
    return count($result) == 1;
}