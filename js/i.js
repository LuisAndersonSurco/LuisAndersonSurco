const carrito = [];

function agregarAlCarrito(id) {
    carrito.push(id);
    mostrarBoleto(id);
}

function mostrarBoleto(id) {
    const producto = obtenerProductoPorId(id);
    const boletoVendido = document.getElementById('boletovendido');
    boletoVendido.innerHTML = `
        <strong>Producto:</strong> ${producto.nombre} <br>
        <strong>Precio:</strong> $${producto.precio} <br>
        <strong>Total:</strong> $${producto.precio} <br>
        ¡Gracias por su compra!
    `;
    abrirModal();
}

function obtenerProductoPorId(id) {
    // Aquí podrías tener un objeto con la información de los productos
    // o bien hacer una petición a una API para obtener los detalles del producto
    // En este ejemplo, usaremos un objeto de productos ficticios:

    const productos = {
        1: { nombre: 'Carrito de Juego 1', precio: 50 },
        2: { nombre: 'Carrito de Juego 2', precio: 60 },
        // Añadir más productos aquí
    };

    return productos[id];
}

function abrirModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
