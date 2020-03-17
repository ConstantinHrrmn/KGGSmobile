<?php

include "../../pdo.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function CreateStaff($prenom, $nom, $email, $date, $idPrivilege){
    $req = "INSERT INTO `User`(`First Name`, `Last Name`, `Password`, `Mail`, `IdSecurityLevel`) VALUES ('$prenom', '$nom', '$date', '$email', $idPrivilege)";
    $query = database()->prepare($req);
    $query->execute();
    $query->fetch();
}

if(isset($_GET['prenom']) && isset($_GET['nom']) && isset($_GET['date']) && isset($_GET['mail']) && isset($_GET['sec'])){
    CreateStaff($_GET['prenom'], $_GET['nom'], $_GET['mail'], $_GET['date'],$_GET['sec']);
}

