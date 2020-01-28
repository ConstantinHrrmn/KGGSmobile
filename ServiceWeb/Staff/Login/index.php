<?php

function Login($nom, $prenom){
    $req = "SELECT * FROM `Staff` WHERE `nom` = :nom AND `prenom` = :prenom LIMIT 1";
    $query = connecteur()->prepare($req);
    $query->bindParam(':nom', $nom, PDO::PARAM_STR);
    $query->bindParam(':prenom', $prenom, PDO::PARAM_STR);
    $query->execute();
    $matches = $query->fetchAll(PDO::FETCH_ASSOC);
    return $matches;
}