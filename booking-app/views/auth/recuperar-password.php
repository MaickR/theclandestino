<h1 class="nombre-pagina">Recovery Password</h1>
<p class="descripcion-pagina">Enter your new password in the form below</p>

<?php 
    include_once __DIR__ . "/../templates/alertas.php";
?>

<?php if($error) return; ?>
<form class="formulario" method="POST">
    <div class="campo">
        <label for="password">Password</label>
        <input
            type="password"
            id="password"
            name="password"
            placeholder="Your New Password"
        />
    </div>
    <input type="submit" class="boton" value="Save New Password">

</form>

<div class="acciones">
    <a href="/">Already have an account? Log in</a>
    <a href="/crear-cuenta">Don't have an account yet? Get One</a>
</div>