$(function() {
    // contact form animations
    $('#contact').click(function() {
        $('#contactForm').fadeToggle();
    });
  
    // Cerrar el formulario al hacer clic en el botón "formBtn"
    $('.formBtn').click(function() {
        $('#contactForm').fadeOut();
        $('#contactForm').find('input, textarea').val(''); // Restablecer los valores de los campos de entrada
    });
  
    // Cerrar el formulario al hacer clic fuera de él
    $(document).mouseup(function (e) {
        var container = $("#contactForm");
  
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container.fadeOut();
            container.find('input, textarea').val(''); // Restablecer los valores de los campos de entrada
        }
    });
  
    // Evitar que el formulario se envíe y retener el valor del botón de envío
    $('#contactForm').submit(function(e) {
        var nombre = $('#nombre').val();
        var email = $('#email').val();
        var fecha = $('#fecha').val();
        var horario = $('#horario').val();
  
        if (!nombre || !email || !fecha || !horario) {
            e.preventDefault(); // Evitar que el formulario se envíe si los campos están vacíos
            // Agrega aquí el código de Toastify para mostrar un mensaje de error
        } else {
            var valor = $('#reservarTurno').val(); // Obtener el valor del botón
            console.log(valor); // Asegurarse de que el valor se está capturando
            // Agrega aquí el código de Toastify para mostrar un mensaje de éxito
            $('#contactForm').fadeOut();
            $('#contactForm').find('input, textarea').val(''); // Restablecer los valores de los campos de entrada
        }
    });
  });
  
    // Selecciona el botón por su ID
  const reservarTurnoButton = document.getElementById("reservarTurno");
  
  // Agrega un event listener al botón
  reservarTurnoButton.addEventListener("click", () => {
      // Lógica para reservar el turno (puedes agregar tu lógica aquí)
  
      // Mostrar una notificación con Toastify
        Toastify({
        text: "¡Turno reservado con éxito!",
        duration: 950, // Duración de la notificación en milisegundos
        close: true, // Mostrar botón de cierre
        gravity: "top", // Posición de la notificación en la pantalla
        position: 'center', // Alineación horizontal de la notificación
        style: {
            background: "linear-gradient(to right, #d2f2ea, #99ffcc)", // Color de fondo de la notificación
            color: "#000000", // Color de texto de la notificación
            fontWeight: "bold", // Aplicar negrita al texto de la notificación
            display: "flex", // Habilitar flexbox
            justifyContent: "center", // Centrar horizontalmente
            alignItems: "center", // Centrar verticalmente
            textAlign: "center" // Alinear el texto al centro
        }
    }).showToast();
    });