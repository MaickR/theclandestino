<h1 class="nombre-pagina">Book a Reservation</h1>
<p class="descripcion-pagina">Select one of the options and register your information</p>

<?php 
    include_once __DIR__ . '/../templates/barra.php';
?>

<div id="app">
    <nav class="tabs">
        <button class="actual" type="button" data-paso="1">Services</button>
        <button type="button" data-paso="2">Booking Information</button>
        <button type="button" data-paso="3">Summary</button>
    </nav>

    <div id="paso-1" class="seccion">
        <h2>Services</h2>
        <p class="text-center">Select services</p>
        <div id="servicios" class="listado-servicios"></div>
    </div>
    <div id="paso-2" class="seccion">
        <h2>Booking Information</h2>
        <p class="text-center">Enter your details and date on which you wish to attend the reservation.</p>

        <form class="formulario">
            <div class="campo">
                <label for="nombre">Name</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Your Name"
                    value="<?php echo $nombre; ?>"
                    disabled
                />
            </div>

            <div class="campo">
                <label for="fecha">Date</label>
                <input
                    id="fecha"
                    type="date"
                    min="<?php echo date('Y-m-d', strtotime('+2 day') ); ?>"
                />
            </div>

            <div class="campo">
                <label for="hora">Time</label>
                <input
                    id="hora"
                    type="time"
                />
            </div>
            <input type="hidden" id="id" value="<?php echo $id; ?>" >

        </form>
    </div>
    <div id="paso-3" class="seccion contenido-resumen">
        <h2>Resumen</h2>
        <p class="text-center">Verify that the information is correct</p>
    </div>

    <div class="paginacion">
        <button 
            id="anterior"
            class="boton"
        >&laquo; Previous</button>

        <button 
            id="siguiente"
            class="boton"
        >Next &raquo;</button>
    </div>
</div>

<?php 
    $script = "
        <script src='//cdn.jsdelivr.net/npm/sweetalert2@11'></script>
        <script src='build/js/app.js'></script>
    ";
?>