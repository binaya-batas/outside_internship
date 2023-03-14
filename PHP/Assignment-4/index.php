<?php

include('./src/Database.php');
include('./src/ProductController.php');
include('./src/ErrorHandler.php');
include('./src/ProudctGateway.php');

set_exception_handler("ErrorHandler::handleException");

header("Content-type: application/json; charset=UTF-8");

$parts = explode("/", $_SERVER["REQUEST_URI"]);


// if ($parts[1] != "students") {
//     http_response_code(404);
//     exit;
// }

$id = $parts[2] ?? null;


$database = new Database("localhost", "local", "root", "root");


$gateway = new ProductGateway($database);
$controller = new ProductController($gateway);
$controller->processRequest($_SERVER["REQUEST_METHOD"], $id);

// if ($part[1] == '')