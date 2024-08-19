$(document).ready(function() {
    $('#form').on('submit', function(event) {
        event.preventDefault(); // Esto previene el comportamiento predeterminado de enviar el formulario
        var formData = $(this).serialize(); // Serializa los datos del formulario
  
        $.ajax({
            type: 'POST',
            url: '../contact.php', // Asegúrate de que esta URL sea correcta y permita el método POST
            data: formData,
            success: function(response) {
                alert('Mensaje enviado con éxito');
                console.log(response);
            },
            error: function(xhr, status, error) {
                console.log('Error: ' + error);
                alert('Hubo un problema al enviar el mensaje. Por favor intente de nuevo.');
            }
        });
    });
  });

  /* CARD WINES */
  document.addEventListener('DOMContentLoaded', function () {
    let container = document.querySelector(".wine-grid-container");
     // Añadimos la referencia a las flechas de navegación
  const leftArrow = document.querySelector(".nav-arrow.left");
  const rightArrow = document.querySelector(".nav-arrow.right");

 // Determinamos el ancho de una card
 const cardWidth = 300; // Incluye márgenes y padding

  // Función para desplazar las cards hacia la derecha
  function scrollRight() {
    container.scrollBy({
      top: 0,
      left: cardWidth,
      behavior: "smooth"
    });
  }

 // Función para desplazar las cards hacia la izquierda
 function scrollLeft() {
    container.scrollBy({
      top: 0,
      left: -cardWidth,
      behavior: "smooth"
    });
  }

   // Añadimos los eventos de clic a las flechas de navegación
   rightArrow.addEventListener("click", scrollRight);
   leftArrow.addEventListener("click", scrollLeft);
    
    const wines = [
        {
            name: "Fagus",
            reference: "16VIFA",
            region: "Aragón, Campo de Borja",
            brand: "Fagus",
            winerys: "Bodegas Aragonesas",
            alcohol: "14,5%",
            Grape: "Grenache",
            priceGlass: "$13",
            priceBottle: "$40",
            image: "../img/wines/fagus.webp"
        },
        {
            name: "Viña Temprana",
            reference: "18VITE",
            region: "Aragón, Campo de Borja",
            brand: "Viña Temprana",
            winerys: "Bodegas Aragonesas",
            alcohol: "14%",
            Grape: "Grenache",
            priceGlass: "$7",
            priceBottle: "$21",
            image: "../img/wines/Vina-Temprana.webp"
        },
        {
            name: "Neton",
            reference: "15VINE",
            region: "Castilla la Mancha, Albacete",
            brand: "Neton",
            winerys: "Bodegas Terramagna",
            alcohol: "14,5%",
            Grape:"Grenache Tintorera",
            priceGlass: "$10",
            priceBottle: "$30",
            image: "../img/wines/neton.webp"
        },
        {
            name: "Protos Verdejo",
            reference: "8VIPRVE",
            region: "Rueda",
            brand: "Protos Verdejo",
            winerys: "Bodegas Protos",
            alcohol: "13%",
            Grape:"Verdejo",
            priceGlass: "$8",
            priceBottle: "$25",
            image: "../img/wines/protos.webp"
        },
        
        {
            name: "Crianza Hermanos",
            reference: " 10VIFR",
            region: "Rioja Alavesa",
            brand: "Crianza Hermanos del Val",
            winerys: "Bodegas Hermanos Frías del Val",
            alcohol: "15%",
            Grape:"Tempranillo",
            priceGlass: "$10",
            priceBottle: "$30",
            image: "../img/wines/crianza-hermanos.webp"
        },
        {
            name: "Cigales",
            reference: " 9VIPRSI",
            region: "Cigales",
            brand: "Aire de Protos ",
            winerys: "Bodegas Protos",
            alcohol: "13%",
            Grape:"Tempranillo,Garnacha, Albillo",
            priceGlass: "$8",
            priceBottle: "$25",
            image: "../img/wines/cigales.webp"
        },
        
        {
            name: "Sangria",
            reference: " 23SANGRIA",
            region: "Andalucía",
            brand: "Care ",
            winerys: "Bodegas Añadas",
            alcohol: "13%",
            Grape:"Tempranillo, Garnacha",
            priceGlass: "$9",
            priceBottle: "$28",
            image: "../img/wines/sangria.webp"
        },
        {
            name: "Mimosa",
            reference: " 26MIMOSA",
            region: "Cataluña",
            brand: "Canals & Munné",
            winerys: "Bodegas Canals&Munne",
            alcohol: "13%",
            Grape:"Macabeo, Xarel·lo, Parellada",
            priceGlass: "$10",
            priceBottle: "$35",
            image: "../img/wines/mimosa.webp"
        },
        {
            name: "Garnacha Nativa",
            reference: "19VINATI",
            region: "Aragón, Cariñena ",
            brand: "Garnacha Nativa",
            winerys: " Bodegas Añadas Care",
            alcohol: "14%",
            Grape:"Grenache 100 red",
            priceGlass: "$8",
            priceBottle: "$24",
            image: "../img/wines/garnacha.webp"
        },
        {
            name: "Garnacha Blanca",
            reference: "20VINABC",
            region: "Aragón, Cariñena ",
            brand: "Garnacha Nativa",
            winerys: " Bodegas Añadas Care",
            alcohol: "14%",
            Grape:"Grenache 100 white",
            priceGlass: "$8",
            priceBottle: "$24",
            image: "../img/wines/garnacha-white.webp"
        },
        {
            name: "Tinto sobre Lías",
            reference: "21VILITI",
            region: "Aragón, Cariñena ",
            brand: "Tinto sobre Lías",
            winerys: " Bodegas Añadas Care",
            alcohol: "14,5%",
            Grape:"Grenache, Syrah",
            priceGlass: "$8",
            priceBottle: "$21",
            image: "../img/wines/tinto.webp"
        },
        
        {
            name: "Blanco sobre Lías",
            reference: "22VILIBC",
            region: "Aragón, Cariñena ",
            brand: " Blanco sobre Lías",
            winerys: " Bodegas Añadas Care",
            alcohol: "13,5%",
            Grape:"Grenache, Chardonnay",
            priceGlass: "$8",
            priceBottle: "$21",
            image: "../img/wines/blanco.webp"
        },
        {
            name: "El Alba",
            reference: "3VIAL",
            region: "Navarra  ",
            brand: " EL ALBA",
            winerys: "Finca Albret",
            alcohol: "14%",
            Grape:"Grenache",
            priceGlass: "$9",
            priceBottle: "$28",
            image: "../img/wines/alba.webp"
        },
        {
            name: "Oceanico",
            reference: "5VIOC",
            region: "Rías Baixas ",
            brand: " Oceanico",
            winerys: "Maior de Mendoza",
            alcohol: "12%",
            Grape:"Albariño",
            priceGlass: "$10",
            priceBottle: "$30",
            image: "../img/wines/oceanico.webp"
        },
        {
            name: "Wine Roots",
            reference: "11VIRO",
            region: "Rioja ",
            brand: " Wine Roots",
            winerys: "Bodegas Corral",
            alcohol: "13%",
            Grape:"White Grenache",
            priceGlass: "$12",
            priceBottle: "$38",
            image: "../img/wines/roots.webp"
        },
        {
            name: "Garbinada",
            reference: "4VISA",
            region: "Priorat",
            brand: "Garbinada",
            winerys: "Bodegas Sangenis I Vaque",
            alcohol: "14,5%",
            Grape:"Grenache, Carinyena",
            priceGlass: "$11",
            priceBottle: "$32",
            image: "../img/wines/garbinada.webp"
        },
        {
            name: "Linaje Garsea",
            reference: "7VIGA",
            region: "Ribera Duero",
            brand: "Linaje Garsea",
            winerys: "Bodegas y Viñedos Linaje",
            alcohol: "14,5%",
            Grape:"Tempranillo",
            priceGlass: "$13",
            priceBottle: "$40",
            image: "../img/wines/linaje.webp"
        },
        
        {
            name: "Frisante",
            reference: "13VIVA",
            region: "Castillo y Leon",
            brand: "Frisante",
            winerys: "Finca Valdemoya",
            alcohol: "8%",
            Grape:"Verdejo",
            priceGlass: "$6",
            priceBottle: "$19",
            image: "../img/wines/frisante.webp"
        },
        {
            name: "Comenge Biberius",
            reference: "6VICO",
            region: "Ribera Duero",
            brand: "Comenge Biberius",
            winerys: "Comenge Bodegas y Viñedos",
            alcohol: "14,5%",
            Grape:"Tempranillo",
            priceGlass: "$9",
            priceBottle: "$28",
            image: "../img/wines/comenge.webp"
        },
        {
            name: "Linaje Garsea",
            reference: "2CEC",
            region: " Ribera Duero",
            brand: "Linaje Garsea",
            winerys: "Bodegas y Viñedos de Linaje Garsea",
            alcohol: "5,6%",
            Grape:"Tempranillo",
            priceGlass: "",
            priceBottle: "$7",
            image: "../img/wines/garcea.webp"
        },
        {
            name: "Dionysus",
            reference: "1CACAN",
            region: " Cataluña",
            brand: "Dionysus",
            winerys: "Canals&Munne",
            alcohol: "12%",
            Grape:"Xarello, Chardonnay, Macabeo",
            priceGlass: "$9",
            priceBottle: "$28",
            image: "../img/wines/dyonisus.webp"
        },
        {
            name: "Hecula",
            reference: "29 VIHE",
            region: " Murcia, Yecla",
            brand: "Hecula",
            winerys: "Bodegas Castaño",
            alcohol: "14%",
            Grape:"Monastrell",
            priceGlass: "$11",
            priceBottle: "$32",
            image: "../img/wines/hecula.webp"
        },
        
        // Add more wines here
    ];

   


    wines.forEach(wine => {
        let card = document.createElement('div');
        card.className = 'wine-card';
        card.innerHTML = `
            <img src="${wine.image}" alt="${wine.name}" class="wine-img" loading="lazy" >
            <h3>${wine.name}</h3>
            <p><strong>Reference: <br></strong> ${wine.reference}</p>
            <p><strong>Region:<br></strong> ${wine.region}</p>
            <p><strong>Brand:<br></strong> ${wine.brand}</p>
            <p><strong>Winerys:<br></strong> ${wine.winerys}</p>
            <p><strong>Alcohol:</strong> ${wine.alcohol}</p>
            <p><strong>Grape:<br></strong> ${wine.Grape}</p>
            <p class="price"><strong>Price per glass:</strong> ${wine.priceGlass}</p>
            <p class="price"><strong>Price per bottle:</strong> ${wine.priceBottle}</p>
            <button class="buy" data-name="${wine.name}" data-reference="${wine.reference}" data-region="${wine.region}" data-brand="${wine.brand}" data-winerys="${wine.winerys}" data-alcohol="${wine.alcohol}" data-priceGlass="${wine.priceGlass}" data-priceBottle="${wine.priceBottle}">Buy</button>
        `;
        container.querySelector(".wine-grid").appendChild(card);
    });

  
   

   // Código existente para el modal de imagen
   let modal = document.getElementById("imageModal");
   let modalImg = document.getElementById("modalImage");
   let closeModal = document.querySelector(".wine-close");

   // Asegurarnos de que el modal esté oculto al cargar la página
  modal.style.display = "none";
 
   document.querySelectorAll(".wine-img").forEach(img => {
     img.addEventListener("click", function () {
       modal.style.display = "flex";
       modalImg.src = this.src;
     });
   });
 
   closeModal.addEventListener("click", function () {
     modal.style.display = "none";
   });
 
   window.addEventListener("click", function (e) {
     if (e.target == modal) {
       modal.style.display = "none";
     }
   });



    // WhatsApp functionality
     document.querySelectorAll('.buy').forEach(button => {
        button.addEventListener('click', function () {
            const name = encodeURIComponent(this.getAttribute('data-name'));
            const reference = encodeURIComponent(this.getAttribute('data-reference'));
            const region = encodeURIComponent(this.getAttribute('data-region'));
            const brand = encodeURIComponent(this.getAttribute('data-brand'));
            const winerys = encodeURIComponent(this.getAttribute('data-winerys'));
            const alcohol = encodeURIComponent(this.getAttribute('data-alcohol'));
            const priceGlass = encodeURIComponent(this.getAttribute('data-priceGlass'));
            const priceBottle = encodeURIComponent(this.getAttribute('data-priceBottle'));
            const userName = encodeURIComponent(prompt("Enter your name to continue shopping: "));
            const url = `https://api.whatsapp.com/send?phone=+14086090027&text=Hello,%20I%20am%20${userName}%20and%20I%20come%20from%20TheClandestino.com.%20I%20am%20interested%20in%20buying%20the%20wine%20${name}%20with%20reference%20${reference}.%20Region:%20${region},%20Brand:%20${brand},%20Winery:%20${winerys},%20Alcohol:%20${alcohol}.%20Price%20per%20glass:%20${priceGlass},%20Price%20per%20bottle:%20${priceBottle}.`;
            window.open(url, '_blank');
        });
    }); 

    // Intersection Observer para mostrar/ocultar las flechas
  const wineSection = document.querySelector('.wine-grid-container');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        leftArrow.style.display = 'block';
        rightArrow.style.display = 'block';
      } else {
        leftArrow.style.display = 'none';
        rightArrow.style.display = 'none';
      }
    });
  }, { threshold: 0.1 });

  observer.observe(wineSection);
    
});

//* Codigo BOTON de anchetas

// Selecciona todos los botones "Buy Now"
const buyButtons = document.querySelectorAll('.h-buttons button');

// Itera sobre cada botón
buyButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Solicitar el nombre del cliente
        let clientName = prompt("To continue with your purchase, please enter your name and we will get back to you shortly:");

        if (clientName) {
            // Encuentra el contenedor más cercano a este botón
            let card = button.closest('.h-card');
            
            // Captura los textos de las etiquetas span, p y el precio dentro de esta tarjeta específica
            let title = card.querySelector('#h-title').textContent;
            let description = card.querySelector('#h-text').textContent;
            let price = card.querySelector('.h-price').textContent;

            
            
            // Formatear el mensaje de WhatsApp
            let whatsappMessage = `Good morning, I'm ${clientName} and I'm coming from TheClandestino.com. I'm interested in purchasing the ${title} (${description}) basket for the price of ${price}, please.`;

            // Codificar el mensaje para la URL de WhatsApp
            let encodedMessage = encodeURIComponent(whatsappMessage);

            // Redirigir al chat de WhatsApp
            window.open(`https://wa.me/14086090027?text=${encodedMessage}`, '_blank');
        } else {
            alert("Please enter your name to continue shopping.");
        }
    });
});



function initSwiper() {
    var swiperPaginationType;
  
    // Detecta el tamaño de la pantalla y ajusta la paginación
    if (window.innerWidth <= 580) { // Móviles (hasta 580px)
        swiperPaginationType = 'progressbar';
    } else { // Tabletas y escritorio
        swiperPaginationType = 'fraction';
    }
  
    // Inicializa el Swiper con la configuración adecuada
    const swiper = new Swiper('.mySwiper', {
        loop: true,
        slidesPerView: 3,
        spaceBetween: 13,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: swiperPaginationType, // Pagina según el dispositivo
        },
        breakpoints: {
            580: {
                slidesPerView: 1,
            },
            770: {
                slidesPerView: 2,
            },
            1130: {
                slidesPerView: 3,
            },
        }
    });
  }
  
  // Ejecuta la función al cargar la página
  window.addEventListener('load', initSwiper);
  
  // Reejecuta la función cuando la ventana se redimensiona
  window.addEventListener('resize', initSwiper);







