<?php
require_once '../classes/Conexion.php';
class Usuario extends Conexion{
    private $correo;
    private $usuario;
    private $contra;

    public function __construct($correo, $usuario, $contra) {
        $this->correo = $correo;
        $this->usuario = $usuario;
        $this->contra = $contra;
    }

    private function verificarUsuario($correo, $usuario) {
        $consulta = $this->conectar()->prepare("call verificarUsuario(?, ?)");
        $consulta->bindParam(1, $correo);
        $consulta->bindParam(2, $usuario);
        $consulta->execute();
        return $consulta->fetch(PDO::FETCH_ASSOC);
    }

    public function crearUsuario() {
        $resultado = $this->verificarUsuario($this->correo, $this->usuario, '');
        if($resultado['total'] == 1) {
            echo "no";
        }
        else {
            $consulta = $this->conectar()->prepare("call crearUsuario(?, ?, ?)");
            $consulta->bindParam(1, $this->correo);
            $consulta->bindParam(2, $this->usuario);
            $consulta->bindParam(3, $this->contra);
            $consulta->execute();
        }
    }

    public function loguear() {
        $consulta = $this->conectar()->prepare("select * from usuarios where email = ?");
        $consulta->bindParam(1, $this->correo);
        $consulta->execute();
        $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        if(is_array($resultado)) {
            if(password_verify($this->contra, $resultado['contra']) && $this->correo == $resultado['email']) {
                echo $resultado['usuario'];
            }
            else {
                echo "no";
            }
        }
        else {
            echo "no";
        }
    }

    public function agregarAlCarrito($fruta, $precio) {
        $consulta = $this->conectar()->prepare("call agregarCarrito(?, ?, ?)");
        $consulta->bindParam(1, $this->usuario);
        $consulta->bindParam(2, $fruta);
        $consulta->bindParam(3, $precio);
        $consulta->execute();
    }

    public function obtenerCarrito() {
        $consulta = $this->conectar()->prepare("select * from carrito where usuario = ?");
        $consulta->bindParam(1, $this->usuario);
        $consulta->execute();
        $resultado = array();
        while($fila=$consulta->fetch(PDO::FETCH_ASSOC)) {
            $resultado[] = $fila;
        }
        echo json_encode($resultado);
    }
}