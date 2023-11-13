// Crear un array de datos para cada tarjeta
const datosTarjetas = [
    {
        imageUrl: '../assets/img/esmaltes1.jpg',
        title: 'Título de la Tarjeta 1',
        description: 'Descripción de la tarjeta 1.'
    },
    {
        imageUrl: '../assets/img/esmaltes2.jpg',
        title: 'Título de la Tarjeta 2',
        description: 'Descripción de la tarjeta 2.'
    },
    {
        imageUrl: '../assets/img/esmaltes3.jpg',
        title: 'Título de la Tarjeta 3',
        description: 'Descripción de la tarjeta 3.'
    }
];

// Obtener el contenedor de las tarjetas desde el DOM
const cardContainer = document.getElementById('cardContainer');

// Crear las tarjetas y agregarlas al contenedor
for (let i = 0; i < datosTarjetas.length; i++) {
    let cardData = datosTarjetas[i];

    // Crear la tarjeta
    let cardElement = document.createElement('div');
    cardElement.className = 'card';
    cardElement.innerHTML = `
        <img src="${cardData.imageUrl}" alt="Imagen de la tarjeta">
        <h2>${cardData.title}</h2>
        <p>${cardData.description}</p>
        <button class="cardButton">Agregar al carrito</button>
    `;

    // Agregar la tarjeta al contenedor
    cardContainer.appendChild(cardElement);

    // Agregar un evento de clic al botón de cada tarjeta
    let cardButton = cardElement.querySelector('.cardButton');
    cardButton.addEventListener('click', function() {
        // Agregar el objeto al array del carrito
        carrito.push({
            imageUrl: cardData.imageUrl,
            title: cardData.title,
            description: cardData.description
        });

        // Mostrar la notificación
        Toastify({
            text: "¡Producto agregado al carrito!",
            duration: 3000,
            gravity: "top",
            position: 'center',
        }).showToast();

        // Llamar a la función para actualizar el contenido del carrito
        actualizarCarrito();
    });
}


// Obtener el contenedor del carrito desde el DOM
const carritoContainer = document.getElementById('carritoContainer');

// Función para actualizar el contenido del contenedor del carrito
function actualizarCarrito() {
    // Limpiar el contenido actual del contenedor
    carritoContainer.innerHTML = '';

    // Crear elementos para cada producto en el carrito y agregarlos al contenedor
    carrito.forEach(function(item, index) {
        const productoElement = document.createElement('div');
        productoElement.innerHTML = `
            <img src="${item.imageUrl}" alt="Imagen del producto">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <button class="quitarProducto">Quitar del carrito</button>
        `;
        carritoContainer.appendChild(productoElement);

        // Agregar un evento de clic al botón de quitarProducto
        const quitarProductoButton = productoElement.querySelector('.quitarProducto');
        quitarProductoButton.addEventListener('click', function() {
            // Lógica para quitar el producto del carrito
            carrito.splice(index, 1);
            // Volver a actualizar el contenido del carrito después de quitar el producto
            actualizarCarrito();
            // Mostrar la notificación
            Toastify({
                text: "Producto quitado del carrito",
                duration: 3000,
                gravity: "top",
                position: 'center',
            }).showToast();
        });
    });
}


// export { carrito };

