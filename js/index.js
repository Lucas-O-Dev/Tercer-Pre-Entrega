document.getElementById('loadDataBtn').addEventListener('click', loadData);

function loadData() {
    // Ruta del archivo JSON local
    const jsonFilePath = '../productosofertasindex.json';

    // Crear una instancia de XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // Configurar la solicitud
    xhr.open('GET', jsonFilePath, true);

    // Manejar el evento de carga
    xhr.onload = function () {
        if (xhr.status === 200) {
            // La solicitud fue exitosa
            const data = JSON.parse(xhr.responseText);
            mostrarProductos(data);
        } else {
            // La solicitud falló
            console.error('Error en la solicitud:', xhr.status, xhr.statusText);
        }
    };

    // Manejar errores de red
    xhr.onerror = function () {
        console.error('Error de red');
    };

    // Enviar la solicitud
    xhr.send();
}

function mostrarProductos(productos) {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = '';

    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.innerHTML = `
            <h2>${producto.nombre}</h2>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <hr>
        `;
        dataContainer.appendChild(productoElement);
    });
}