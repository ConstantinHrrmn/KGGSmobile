<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

include '../../pdo.php';

function CreateGame($day, $time, $field, $sport, $staff){
    $req = "INSERT INTO `Game`( `IdField`, `IdUser`, `IdDay`, `IdTime`, `IdSport`) VALUES ('$field','$staff','$day','$time','$sport')";
    $query = database()->prepare($req);
    $query->execute();
    $query->fetch();
    $id = database()->lastInsertId();
    return $id;
}

function CreatePlay($id, $t1, $t2, $t3){
    if($t1 != -1){
        InsertPlay($id, $t1);
    }
    if($t2 != -1){
        InsertPlay($id, $t2);
    }
    if($t3 != -1){
        InsertPlay($id, $t3);
    }
}

function InsertPlay($idMatch, $idTeam){
    $req = "INSERT INTO `Play`(`IdMatch`, `IdTeam`, `Score`) VALUES ($idMatch,$idTeam,0)";
    $query = database()->prepare($req);
    $query->execute();
    $query->fetch();
}

if(isset($_GET['day']) && isset($_GET['time']) && isset($_GET['field']) && isset($_GET['sport']) && isset($_GET['staff']) && isset($_GET['t1']) && isset($_GET['t2']) && isset($_GET['t3'])){
     $day = $_GET['day'];
     $time = $_GET['time'];
     $field = $_GET['field'];
     $sport = $_GET['sport'];
     $staff = $_GET['staff'];
     $t1 = $_GET['t1'];
     $t2 = $_GET['t2'];
     $t3 = $_GET['t3'];

     $id = CreateGame($day, $time, $field, $sport, $staff);
     CreatePlay($id, $t1, $t2, $t3);
}