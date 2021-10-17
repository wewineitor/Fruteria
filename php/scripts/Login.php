<?php
require_once '../classes/Usuario.php';
$email = $_POST['email'];
$contra = $_POST['contra'];
$usuario = new Usuario($email, "", $contra);
$usuario->loguear();