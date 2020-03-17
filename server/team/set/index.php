<?php

include "../../pdo.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function NewTeam($name, $number){
    $req = "INSERT INTO `Team`(`Name`, `Number`) VALUES ('$name',$number)";
    $query = database()->prepare($req);
    $query->execute();
    $query->fetch();
}

function NewTeamWithCoach($name, $number, $idCoach){
    $req = "INSERT INTO `Team`(`IdUser`, `Name`, `Number`) VALUES ($idCoach, '$name', $number)";
    $query = database()->prepare($req);
    $query->execute();
    $query->fetch();
}

if(isset($_GET['name']) && isset($_GET['number'])){   
    if(isset($_GET['idCoach'])){
        if($_GET['idCoach'] == -1){
            NewTeam($_GET['name'], $_GET['number']);
        }else{
            NewTeamWithCoach($_GET['name'], $_GET['number'], $_GET['idCoach']);
        }
    }else{
        NewTeam($_GET['name'], $_GET['number']);
    }
}