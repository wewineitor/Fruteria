create database Fruteria;
use Fruteria;
create table Usuarios(
	email varchar(40),
    usuario varchar(40),
    contra varchar(255)
);
create table Frutas(
	nombre_fruta varchar(40),
    precio int
);
create table carrito (
    usuario varchar(40),
    nombre_fruta varchar(40),
    cantidad int,
    precio int
)
/*Procedimientos almacenados*/
delimiter $
create procedure crearUsuario(in email_parametro varchar(40), in usuario_parametro varchar(40), in contra_parametro varchar(255))
begin
	insert into usuarios(email, usuario, contra) values(email_parametro, usuario_parametro, contra_parametro);
end $

delimiter $
create procedure verificarUsuario(in correo varchar(40), in usuario_parametro varchar(40))
begin
	select count(*) as total from usuarios where email = correo or usuario = usuario_parametro;
end $

delimiter $
create procedure loguear(in email_parametro varchar(40), in contra_parametro varchar(255))
begin
	select usuario from usuarios where email = email_parametro and contra = contra_paramtro;
end $