// Array de objetos de productos de peluquería
const productosPeluqueria = [
    { id: 1, nombre: 'Cortadoradepelobabyliss', precio: 12000 },
    { id: 2, nombre: 'Secadordepelowahl', precio: 10200 },
    { id: 3, nombre: 'Planchadecabellogamma', precio: 11300 },
    { id: 4, nombre: 'Cortadoradepelowahl', precio: 13100 }
];

// Función asincrónica que obtiene los productos de peluquería
const obtenerProductosPeluqueria = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (productosPeluqueria.length > 0) {
                resolve(productosPeluqueria);
            } else {
                reject('No se encontraron productos de peluquería.');
            }
        }, 2000); // Simulamos un retardo de 2 segundos
    });
};

// Utilizar la función asincrónica para obtener los productos de peluquería
(async () => {
    try {
        const productos = await obtenerProductosPeluqueria();
        console.log('Productos de peluquería disponibles:');
        productos.forEach(({ id, nombre, precio }) => {
            console.log(`ID: ${id}, Nombre: ${nombre}, Precio: ${precio}`);
        });
    } catch (error) {
        console.error(`Error: ${error}`);
    }
})();