<?php
require('fecharts.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$fecharts = new fecharts();

// Explode the URI
$request_uri = explode('/', $_SERVER['REQUEST_URI']);

// Define the router from the last element of the URI
switch (end($request_uri)) {
    case '':
        echo 'Hello world!';
        break;
    case 'all':
        // Get all data
        header('Content-Type: application/json; charset=UTF-8');
        $data = json_encode($fecharts->getAllData());
        echo $data;
        break;
    case 'update':
        if (isset($_POST['version'])) {
            $clientVersion = $_POST['version'];
            header('Content-Type: application/json; charset=UTF-8');
            $data = json_encode($fecharts->getUpdatedData($clientVersion));
            echo $data; 
        } else {
            echo 'Missing or invalid \'version\' parameter';
        }
       
        break;
    case 'version':
        // Get the current version of the catalogue
        header('Content-Type: application/json; charset=UTF-8');
        $version = json_encode($fecharts->getCurrentVersion());
        echo $version;
        break;
    default:
        header('HTTP/1.0 404 Not Found');
        echo 'Unknown request';
        break;
}
