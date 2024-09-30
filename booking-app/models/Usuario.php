<?php

namespace Model;

class Usuario extends ActiveRecord
{
   //* Base de datos

   protected static $tabla = 'usuarios';
   protected static $columnasDB = [
      'id',
      'nombre',
      'apellido',
      'email',
      'password',
      'telefono',
      'admin',
      'confirmado',
      'token'
   ];

   public $id;
   public $nombre;
   public $apellido;
   public $email;
   public $password;
   public $telefono;
   public $admin;
   public $confirmado;
   public $token;

   public function __construct($args = [])
   {
      $this->id = $args['id'] ?? null;
      $this->nombre = $args['nombre'] ?? '';
      $this->apellido = $args['apellido'] ?? '';
      $this->email = $args['email'] ?? '';
      $this->password = $args['password'] ?? '';
      $this->telefono = $args['telefono'] ?? '';
      $this->admin = $args['admin'] ?? 0;
      $this->confirmado = $args['confirmado'] ?? 0;
      $this->token = $args['token'] ?? '';
   }

   //* Mnesaje de alidaicon para la creacion de una cuenta

   public function validarNuevaCuenta()
   {
      if (!$this->nombre) {
         self::$alertas['error'][] = 'Your name is required';
      }

      if (!$this->apellido) {
         self::$alertas['error'][] = 'Your last name is required';
      }

      if (!$this->email) {
         self::$alertas['error'][] = 'Your email is required';
      }

      if (!$this->password) {
         self::$alertas['error'][] = 'Password is required';
      }

      if (strlen($this->password) < 6) {
         self::$alertas['error'][] = 'Password must be at least 6 characters';
      }



      return self::$alertas;
   }

   public function validarLogin(){
      if(!$this->email){
         self::$alertas['error'][] = 'Email is required';
      }

      if(!$this->password){
         self::$alertas['error'][] = 'Password is required';
      }

      return self::$alertas;
   }

   public function validarEmail() {
      if(!$this->email) {
          self::$alertas['error'][] = 'Email is required';
      }
      return self::$alertas;
  }

  public function validarPassword() {
   if(!$this->password) {
       self::$alertas['error'][] = 'Password is required';
   }
   if(strlen($this->password) < 6) {
       self::$alertas['error'][] = 'Password must be at least 6 characters';
   }

   return self::$alertas;
}

   //* Revisa si el usuario existe
   public function existeUsuario()
   {
      $query = "SELECT * FROM " . self::$tabla . " WHERE email = '" . $this->email . "' LIMIT 1";

      $resultado = self::$db->query($query);

      if ($resultado -> num_rows) {
         self::$alertas['error'][] = 'The user is already registered';
      }

      return $resultado;
   }

   public function hashPassword(){
      $this -> password = password_hash($this -> password, PASSWORD_BCRYPT);
   }

   public function crearToken(){
      $this->token = uniqid(); 
   }

   public function comprobarPasswordAndVerificado($password){
      
      $resultado = password_verify($password, $this->password);

      if (!$resultado || !$this->confirmado) {
         self::$alertas['error'][] = "Incorrect password or your account has not been confirmed";
      } else {
         return true;
      }
   }
}
