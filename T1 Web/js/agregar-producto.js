function mostrarProductos() {
    var tipoProducto = document.getElementById("tipoProducto").value;
    var frutasSelect = document.getElementById("frutasSelect");
    var verdurasSelect = document.getElementById("verdurasSelect");

    // Ocultar ambos menús de selección
    frutasSelect.style.display = "none";
    verdurasSelect.style.display = "none";

    // Mostrar el menú de selección correspondiente al tipo de producto seleccionado
    if (tipoProducto === "fruta") {
        frutasSelect.style.display = "block";
    } else if (tipoProducto === "verdura") {
        verdurasSelect.style.display = "block";
    }
}
// ocupar disable para quitar los bloqueos