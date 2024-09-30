<h1 class="nombre-pagina">Create account</h1>
<p class="descripcion-pagina">Complete the following form to create an account</p>

<?php 
    include_once __DIR__ . "/../templates/alertas.php";
?>

<form action="/crear-cuenta" method="POST" class="formulario" >

    <div class="campo">
        <label for="nombre">Name</label>
        <input type="text" id="nombre" name="nombre" placeholder="Type Your Name" value="<?php echo s($usuario -> nombre) ;?>">
    </div>

    <div class="campo">
        <label for="apellido">Lastname</label>
        <input type="text" id="apellido" name="apellido" placeholder="Type Your Lastname" value="<?php echo s($usuario -> apellido) ;?>">
    </div>

    <div class="campo">
        <label for="telefono">Phone</label>
        <input type="tel" id="telefono" name="telefono" placeholder="Type Your Phone Number" value="<?php echo s($usuario -> telefono) ;?>">
    </div>

    <div class="campo">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Type Your Email" value="<?php echo s($usuario -> email) ;?>">
    </div>

    <div class="campo">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Type a Password">
    </div>

    <input type="submit" value="Create account" class="boton">

</form>

<div class="acciones">
    <a href="/">Already have an account? Sign in</a>
    <a href="/olvide">Password recovery</a>
</div>