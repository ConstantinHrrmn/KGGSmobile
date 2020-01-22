<?php

function NewToken(){
    //Generate a random string.
    $token = openssl_random_pseudo_bytes(16);
    //Convert the binary data into hexadecimal representation.
    $token = bin2hex($token);
    return $token;
}

 