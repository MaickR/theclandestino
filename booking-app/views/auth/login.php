<h1 class="nombre-pagina">Login</h1>
<p class="descripcion-pagina">Log in with your details</p>

<?php 
    include_once __DIR__ . "/../templates/alertas.php";
?>

<form class="fomrulario" method="POST" action="/">
    <div class="campo">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Type your Email" name="email" value="<?php echo s($auth->email) ;?>">
    </div>

    <div class="campo">
        <label for="password">Password</label>
        <input type="password" name="password" id="password" placeholder="Type your Password">
    </div>

    <input type="submit" class="boton" value="Login">
</form>

<div class="acciones">
    <a href="/crear-cuenta">Don't have an account yet? Create one</a>
    <a href="/olvide">Password recovery</a>
</div>