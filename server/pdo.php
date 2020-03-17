<?php
//session_start();

//Constantes
define("DB_HOST", "myviewvision.ch.mysql");
define("DB_NAME", "myviewvision_ch_kggs_mobile_app");
define("DB_USER", "myviewvision_ch_kggs_mobile_app");
define("DB_PASSWORD", "Kggs2019");

function database(){
    static $dbc = null;
    
    if ($dbc == null) {
        try{
            $dbc = new PDO('mysql:host=' . DB_HOST . ';dbname=' . DB_NAME, DB_USER, DB_PASSWORD,
                    array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8", PDO::ATTR_PERSISTENT => TRUE));
        } catch (Exception $e) {
            echo 'Erreur : ' . $e->getMessage() . '<br/>';
            echo 'N° : ' . $e->getCode();
            die('Could not connect to MySQL');
        }
    }
    return $dbc;
}