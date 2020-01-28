<?php

function UpdateToken($token, $id){
    $req = "UPDATE `Staff` SET `token`= :token WHERE `id` = :id";
    $query = connecteur()->prepare($req);
    $query->bindParam(':token', $token, PDO::PARAM_STR);
    $query->bindParam(':id', $id, PDO::PARAM_STR);
    $query->execute();
    $matches = $query->fetchAll(PDO::FETCH_ASSOC);
    return $matches;
}