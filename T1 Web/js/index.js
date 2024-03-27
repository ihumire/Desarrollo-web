const red_agregar_producto = () => {
    window.location.href = "../html/agregar-producto.html";
}

const red_ver_productos = () => {
    window.location.href = "../html/ver-productos.html";
}

const red_agregar_pedido = () => {
    window.location.href = "../html/agregar-pedido.html";
}

const red_ver_pedidos = () => {
    window.location.href = "../html/ver-pedidos.html";
}

// Obtener elementos de botón
const agregarProductoButton = document.getElementById("agregar-producto");
const verProductosButton = document.getElementById("ver-productos");
const agregarPedidoButton = document.getElementById("agregar-pedido");
const verPedidosButton = document.getElementById("ver-pedidos");

// Agregar listeners a los botones
agregarProductoButton.addEventListener("click", red_agregar_producto);
verProductosButton.addEventListener("click", red_ver_productos);
agregarPedidoButton.addEventListener("click", red_agregar_pedido);
verPedidosButton.addEventListener("click", red_ver_pedidos);