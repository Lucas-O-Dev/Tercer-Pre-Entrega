const productosPeluqueria = [
    { id: 1, nombre: 'Cortadoradepelobabyliss', precio: 12000 },
    { id: 2, nombre: 'Secadordepelowahl', precio: 10200 },
    { id: 3, nombre: 'Planchadecabellogamma', precio: 11300 },
    { id: 4, nombre: 'Cortadoradepelowahl', precio: 13100 }
];

const verProductosButton = document.getElementById('verProductosButton');
const popupPeluqueria = document.getElementById('popup');
const productosListPeluqueria = document.getElementById('productosList');

verProductosButton.addEventListener('click', async () => {
    try {
        const productos = await obtenerProductosPeluqueria();
        const listItems = productos.map(producto => {
            const item = document.createElement('li');
            item.textContent = `ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`;
            return item;
        });
        productosListPeluqueria.innerHTML = '';
        listItems.forEach(item => productosListPeluqueria.appendChild(item));
        popupPeluqueria.style.display = 'block';
    } catch (error) {
        console.error(`Error: ${error}`);
    }
});

function obtenerProductosPeluqueria() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productosPeluqueria.length > 0) {
                resolve(productosPeluqueria);
            } else {
                reject('No se encontraron productos de peluquería.');
            }
        }, 2000); // Simulamos un retardo de 2 segundos
    });
}

const verJsonButton = document.getElementById('verJson');
const popupJson = document.getElementById('popupJson');
const productosListJson = document.getElementById('productosJson');

verJsonButton.addEventListener('click', async () => {
    try {
        const response = await fetch('../productosofertas.json');
        const data = await response.json();
        const productos = data.productos;
        const listItems = productos.map(producto => {
            const item = document.createElement('li');
            item.textContent = `Nombre: ${producto.nombre}, Precio: $${producto.precio}, Categoría: ${producto.categoria}`;
            return item;
        });
        productosListJson.innerHTML = '';
        listItems.forEach(item => productosListJson.appendChild(item));
        popupJson.style.display = 'block';
    } catch (error) {
        console.error(`Error al cargar el archivo JSON: ${error}`);
    }
});