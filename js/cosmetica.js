const productos = [
    { nombre: 'Labiales Liquidos', categoria: 'Labios' },
    { nombre: 'Barras Labiales', categoria: 'Labios' },
    { nombre: 'Mascara Pestañas', categoria: 'Ojos' },
    { nombre: 'Esmaltes', categoria: 'Uñas' },
    { nombre: 'Quitaesmaltes', categoria: 'uñas' },
    { nombre: 'Maquillaje Compacto', categoria: 'Maquillaje' },
    // Agrega más objetos de productos si es necesario
];

const buscarProducto = () => {
    const productoInput = document.getElementById('productoInput').value.toLowerCase();
    const resultadoDiv = document.getElementById('resultado');

    const productoEncontrado = productos.find(producto => producto.nombre.toLowerCase() === productoInput);

    if (productoEncontrado) {
        const mensajeEncontrado = document.createElement('p');
        mensajeEncontrado.textContent = 'La categoría se encuentra disponible.';
        resultadoDiv.innerHTML = '';
        resultadoDiv.appendChild(mensajeEncontrado);
    } else {
        const mensajeNoEncontrado = document.createElement('p');
        mensajeNoEncontrado.textContent = 'Todavía no vendemos ese producto.';
        resultadoDiv.innerHTML = '';
        resultadoDiv.appendChild(mensajeNoEncontrado);
    }
};

// Datos para las tarjetas
const data = [
    {
        imgSrc: '/assets/img/kisspng-maybelline-volum-express-mascara-eyelash-cosmetic-maybelline-5b8738420462d2.408553081535588418018.png',
        imgAlt: 'Rimel',
        title: 'Rimel Maybelline Blue',
        price: '120$'
    },
    {
        imgSrc: '/assets/img/kisspng-maybelline-volum-express-the-colossal-mascara-gem-5b1a2fbb20ca73.7238057715284428111343.png',
        imgAlt: 'Rimel',
        title: 'Rimel Maybelline Black',
        price: '105$'
    },
    {
        imgSrc: '/assets/img/kisspng-maybelline-volum-express-the-falsies-washable-mas-maybelline-5b2bbaae79b548.0745492415295924944985.png',
        imgAlt: 'Rimel',
        title: 'Rimel Maybelline Pink',
        price: '110$'
    },
];

// Obtener el contenedor
const buttonContainer = document.getElementById('buttonContainer');

// Crear tarjetas para cada objeto de datos
data.forEach(item => {
    // Crear elementos
    const button = document.createElement('button');
    const a = document.createElement('a');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');

    // Añadir clases y atributos
    button.classList.add('end');
    a.href = '#';
    div.classList.add('conteinerimg');
    img.src = item.imgSrc;
    img.alt = item.imgAlt;
    img.classList.add('imgoferta');
    h3.classList.add('h3c2');
    h3.textContent = item.title;
    p.classList.add('parrafoc2');
    p.textContent = item.price;

    // Construir la estructura
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(p);
    a.appendChild(div);
    button.appendChild(a);

    // Agregar al contenedor
    buttonContainer.appendChild(button);
});

document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btnsubmit');
    const input = document.getElementById('inputText');

    btn.addEventListener('click', function() {
        const email = input.value;

        if (typeof(Storage) !== "undefined") {
            // Almacenar el correo electrónico en el localStorage
            localStorage.setItem("email", email);
            console.log("Correo electrónico almacenado en el localStorage.");

            // Verificar si el correo electrónico se ha guardado correctamente
            const emailGuardado = localStorage.getItem("email");
            if (email === emailGuardado) {
                console.log("El correo electrónico se ha guardado correctamente en el localStorage.");
            } else {
                console.log("Ha ocurrido un error al guardar el correo electrónico en el localStorage.");
            }
        } else {
            console.log("Lo siento, tu navegador no soporta almacenamiento local.");
        }
    });
});
