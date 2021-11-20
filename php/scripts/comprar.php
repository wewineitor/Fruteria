<?php
require_once '../classes/Usuario.php';
header('Content-Type: application/json');
$body = json_decode(file_get_contents("php://input"));

$nombre_usuario = $body->usuario;

$usuario = new Usuario("", $nombre_usuario, "");
$usuario->generarTicket();