const productos0 = ["--Seleccione un producto--"];
const productosFrutas = ["--Seleccione un producto--", "Arándano", "Frambuesa", "Frutilla", "Grosella", "Mora", "Limón", "Mandarina", "Naranja", "Pomelo", 
"Melón", "Sandía", "Palta", "Chirimoya", "Coco", "Dátil", "Kiwi", "Mango", "Papaya", "Piña", "Plátano", 
"Damasco", "Cereza", "Ciruela", "Higo", "Kaki", "Manzana", "Durazno", "Nectarin", "Níspero", "Pera", "Uva", 
"Almendra", "Avellana", "Maní", "Castaña", "Nuez", "Pistacho"];
const productosVerduras = ["--Seleccione un producto--", "Brócoli", "Repollo", "Coliflor", "Rábano", "Alcachofa", "Lechuga", "Zapallo", "Pepino", "Haba", "Maíz", 
"Champiñón", "Acelga", "Apio", "Espinaca", "Perejil", "Ajo", "Cebolla", "Espárrago", "Puerro", "Acelga", 
"Espinaca", "Remolacha", "Berenjena", "Papa", "Pimiento", "Tomate", "Zanahoria"];

const productosTotales = [productos0, productosFrutas,productosVerduras];


function setFrutaOrVerdura(value) {
	let onSet = document.getElementById("producto1")
	while(onSet.firstChild) {
		onSet.removeChild(onSet.firstChild)
	}
	let conjProductosTotales = productosTotales[value];
	let lenProductosTotales = conjProductosTotales.length;
	for(i=0; i < lenProductosTotales; i+=1) {
		let newOption = document.createElement("option")
		newOption.value = conjProductosTotales[i];
		newOption.text = conjProductosTotales[i];
		onSet.appendChild(newOption)
	}
}

function Validar() {
	let tipoProducto = document.getElementById("tipo-producto");
	tipoProducto.required = true;
	let ValidTipoProducto = tipoProducto.value != "0";
	let producto1 = document.getElementById("producto1");
	producto1.required = true;
	let ValidProducto1 = producto1 != "--Seleccione una comuna--";
	
	let space = document.getElementById("top");
	let m1 = document.getElementById("E1");
	let m2 = document.getElementById("E2");
	let m9 = document.getElementById("E9");
	let botonConfirmar = document.getElementById("confirmar");
	let botonNoConfirmar = document.getElementById("no-confirmar");
	
	space.style.display = "block";

	if (!ValidTipoProducto) {
		m1.style.display = "block";
	} else {m1.style.display = "none";}

	if (!ValidProducto1) {
		m2.style.display = "block";
	} else {m2.style.display = "none";}

	if (ValidTipoProducto && ValidProducto1) {
			m9.style.display = "block";
			botonConfirmar.style.display = "block";
			botonNoConfirmar.style.display = "block";
			tipoProducto.disabled = true;
		} 
	else {
		m9.style.display = "none";
		botonConfirmar.style.display = "none";
		botonNoConfirmar.style.display = "none";
	}
	
}

function Felicitaciones() {
	
	let TipoProducto = document.getElementById("tipo-producto");
	
	TipoProducto.disabled = false;
	
	alert("Agregación exitosa de productos.");
}

function goBack() {
	
	let tipoProducto = document.getElementById("tipo-producto");
	let space = document.getElementById("top");
	let m9 = document.getElementById("E9");
	let botonConfirmar = document.getElementById("confirmar");
	let botonNoConfirmar = document.getElementById("no-confirmar");
	
	space.style.display = "none";
	m9.style.display = "none";
	botonConfirmar.style.display = "none";
	botonNoConfirmar.style.display = "none";
	tipoProducto.disabled = false;
	
}