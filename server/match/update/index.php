<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include '../../pdo.php';

function UpdateScore($idGame, $IdTeam, $score){
    $req = "UPDATE `Play` SET `Score`= $score WHERE `IdMatch` = $idGame AND `IdTeam` = $IdTeam";
    $query = database()->prepare($req);
    $query->execute();
    $query->fetch();
    $id = database()->lastInsertId();
    return $id;
}

if(isset($_GET['game']) && isset($_GET['team']) && isset($_GET['score'])){
    UpdateScore($_GET['game'], $_GET['team'], $_GET['score']);
}