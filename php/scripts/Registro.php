<?php
require_once '../classes/Usuario.php';
$usuario = $_POST['usuario'];
$email = $_POST['email'];
$contra = $_POST['contra'];
$contraEcriptada = password_hash($contra, PASSWORD_DEFAULT, array("cost" => 12));
$usuario = new Usuario($email, $usuario, $contraEcriptada);
$usuario->crearUsuario();