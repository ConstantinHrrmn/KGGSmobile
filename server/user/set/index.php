<?php

include "../../pdo.php";

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

function UpdateUser($name, $lastname, $password, $mail, $security, $id){
    $req = "UPDATE `User` SET `First Name`= '$name',`Last Name`= '$lastname',`Password`= '$password',`Mail`= '$mail',`IdSecurityLevel`= $security WHERE `IdUser` = $id";
    $query = database()->prepare($req);
    $query->execute();
    $query->fetch();
}

if(isset($_GET['id']) && isset($_GET['name']) && isset($_GET['lastname']) && isset($_GET['date']) && isset($_GET['mail']) && isset($_GET['security'])){
    UpdateUser($_GET['name'], $_GET['lastname'], $_GET['date'], $_GET['mail'], $_GET['security'], $_GET['id']);
}
