<?php
require_once '../classes/Usuario.php';
header('Content-Type: application/json');
$body = json_decode(file_get_contents("php://input"));
$nombre_usuario = $body->usuario;
$fruta = $body->fruta;
$usuario = new Usuario("", "", "");
$usuario->eliminarFruta($nombre_usuario, $fruta);