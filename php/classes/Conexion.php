<?php 
class Conexion {
    private $host = 'localhost';
    private $usuario = 'root';
    private $contra = '';
    private $bd = 'Fruteria';

    protected function conectar() {
        try {
            $pdo = new PDO("mysql:host=$this->host;dbname=$this->bd", $this->usuario, $this->contra);
            return $pdo;
        }
        catch(PDOException $e) {
            echo "Error en la conexion " . $e->getMessage();
        }
    }
}