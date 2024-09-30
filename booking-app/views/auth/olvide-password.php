<h1 class="nombre-pagina"> Forgot my password</h1>
<p class="descripcion-pagina">Reset your password by typing your email below</p>

<?php include_once __DIR__ . '/../templates/alertas.php'; ?>


<form action="/olvide" method="POST" class="formulario">
    <div class="campo">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Type Your Email">
    </div>

    <input type="submit" value="Reset password" class="boton">

</form>

<div class="acciones">
    <a href="/">Already have an account? Sign in</a>
    <a href="/crear-cuenta">You still don't have an account? Create one</a>
</div>