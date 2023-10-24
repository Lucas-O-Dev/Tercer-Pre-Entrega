let palabracorrecta = "si";


function turno(){
    let intentos = 3;
    for(let i = intentos;i>0;i--){
        let confirmacion = prompt('Confirma el turno con un "si". Tenés '+i+' intentos. ');
if(confirmacion === palabracorrecta){
alert("Gracias por reservar un turno. Estaremos en contacto con usted.")
break;
}else{
    alert("Te podes comunicar con nosotros en venecia-staff@gmail.com o entrando a nuestra pagina web www.venecia-estética.com.ar")
    
}
    }

console.log("Gracias por utilizar mi función.")
}


// Definición de la clase Ofertas que representa un producto en oferta
class Ofertas {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Array de productos en oferta
const saleItems = [
    new Ofertas("Rimel Maybelline Blue", 120),
    new Ofertas("Rimel Maybelline Black", 105),
    new Ofertas("Rimel Maybelline Pink", 110),
];

//Productos en oferta sin descuento

console.log(saleItems);

// Función para aplicar un descuento a los precios de los productos
function aplicarDescuento(productos, porcentajeDescuento) {
    for (const producto of productos) {
        const precioOriginal = producto.precio;
        const descuento = precioOriginal * (porcentajeDescuento / 100);
        const precioConDescuento = precioOriginal - descuento;
        producto.precio = precioConDescuento;
    }
}

// Función para mostrar los productos con descuento en la consola
function mostrarProductosConDescuento() {
    // Aplicar un descuento del 10% a los productos
    aplicarDescuento(saleItems, 10);

    // Mostrar los productos con descuento en la consola
    console.log("Productos con descuento:");
    saleItems.forEach(producto => {
        console.log(`- ${producto.nombre} - Precio con descuento: $${producto.precio}`);
    });
}

//boton con funcion clientepide

function clientePide(){
    const arrayA = ['Labiales liquidos', 'Barras labiales', 'Mascara para pestañas', 'Esmaltes', 'Quitaesmaltes', 'Maquillaje Compacto'];

    
    let producto = prompt("Hola, te podemos ofrecer estos productos al mejor precio del mercado.\n 0-Labiales Liquidos \n 1-Barras Labiales\n 2-Máscara para pestañas\n 3-Esmaltes\n 4-Quitaesmaltes\n 5-Maquillaje Compacto")
    
    alert( arrayA [producto] )

}

//boton con funcion find 

class ProductoPeluqueria {
    constructor(nombre, tipo, marca) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.marca = marca;
    }
}

const producto = [
    new ProductoPeluqueria("Barras Labiales", "Labiales", "Velvet"),
    new ProductoPeluqueria("Mascara Para Pestañas", "Mascara", "Maybelline"),
    new ProductoPeluqueria("Esmaltes", "Esmaltes", "Vogue"),
    new ProductoPeluqueria("Quita Esmaltes", "Esmaltes", "Vogue"),
    new ProductoPeluqueria("Maquillaje Compacto", "Maquillaje", "Loreal"),
];

function buscarProductoPorNombre(nombre) {
    return producto.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}

function buscarProducto() {
    const nombreProducto = prompt("Ingrese el nombre del producto:");
    const productoBuscado = buscarProductoPorNombre(nombreProducto.toLowerCase());

    if (productoBuscado) {
        console.log("Producto encontrado:", productoBuscado);
    } else {
        console.log("Producto no encontrado");
    }
}

