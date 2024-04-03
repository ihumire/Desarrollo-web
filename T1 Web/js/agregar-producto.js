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
	let onSet1 = document.getElementById("producto1");
	let onSet2 = document.getElementById("producto2");
	let onSet3 = document.getElementById("producto3");
	let onSet4 = document.getElementById("producto4");
	let onSet5 = document.getElementById("producto5");
	
	const listOnSet = [onSet1, onSet2, onSet3, onSet4, onSet5];
	const lenListOnSet = listOnSet.length;
	for(k=0; k<lenListOnSet; k+=1){
		while(listOnSet[k].firstChild) {
			listOnSet[k].removeChild(listOnSet[k].firstChild)
		}
		let conjProductosTotales = productosTotales[value];
		let lenProductosTotales = conjProductosTotales.length;
		for(i=0; i < lenProductosTotales; i+=1) {
			let newOption = document.createElement("option")
			newOption.value = conjProductosTotales[i];
			newOption.text = conjProductosTotales[i];
			listOnSet[k].appendChild(newOption)
		}
	}
}

function Validar() {
	let tipoProducto = document.getElementById("tipo-producto");
	tipoProducto.required = true;
	let ValidTipoProducto = tipoProducto.value != "0";
	let producto1 = document.getElementById("producto1");
	let ValidProducto1 = producto1.value != "--Seleccione un producto--";
	let producto2 = document.getElementById("producto2");
	let ValidProducto2 = producto2.value != "--Seleccione un producto--";
	let producto3 = document.getElementById("producto3");
	let ValidProducto3 = producto3.value != "--Seleccione un producto--";
	let producto4 = document.getElementById("producto4");
	let ValidProducto4 = producto4.value != "--Seleccione un producto--";
	let producto5 = document.getElementById("producto5");
	let ValidProducto5 = producto5.value != "--Seleccione un producto--";
	
	let ValidProductos = false;
	let listValidProductos = [ValidProducto1, ValidProducto2, ValidProducto3, ValidProducto4, ValidProducto5];
	let lenListValidProductos = listValidProductos.length;
		for(i=0; i<lenListValidProductos; i+=1){
		if (listValidProductos[i]){
			ValidProductos = true;
		}
	}
	
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

	if (!ValidProductos) {
		m2.style.display = "block";
	} else {m2.style.display = "none";}

	if (ValidTipoProducto && ValidProductos) {
			m9.style.display = "block";
			botonConfirmar.style.display = "block";
			botonNoConfirmar.style.display = "block";
			tipoProducto.disabled = true;
			producto1.disabled = true;
			producto2.disabled = true;
			producto3.disabled = true;
			producto4.disabled = true;
			producto5.disabled = true;
		} 
	else {
		m9.style.display = "none";
		botonConfirmar.style.display = "none";
		botonNoConfirmar.style.display = "none";
	}
	
}

function Felicitaciones() {
	
	let TipoProducto = document.getElementById("tipo-producto");
	let producto1 = document.getElementById("producto1");
	let producto2 = document.getElementById("producto2");
	let producto3 = document.getElementById("producto3");
	let producto4 = document.getElementById("producto4");
	let producto5 = document.getElementById("producto5");
	
	TipoProducto.disabled = false;
	producto1.disabled = false;
	producto2.disabled = false;
	producto3.disabled = false;
	producto4.disabled = false;
	producto5.disabled = false;
	
	alert("Agregación exitosa de productos.");
}

function goBack() {
	
	let tipoProducto = document.getElementById("tipo-producto");
	let producto1 = document.getElementById("producto1");
	let producto2 = document.getElementById("producto2");
	let producto3 = document.getElementById("producto3");
	let producto4 = document.getElementById("producto4");
	let producto5 = document.getElementById("producto5");
	
	let space = document.getElementById("top");
	let m9 = document.getElementById("E9");
	let botonConfirmar = document.getElementById("confirmar");
	let botonNoConfirmar = document.getElementById("no-confirmar");
	
	space.style.display = "none";
	m9.style.display = "none";
	botonConfirmar.style.display = "none";
	botonNoConfirmar.style.display = "none";
	tipoProducto.disabled = false;	
	producto1.disabled = false;
	producto2.disabled = false;
	producto3.disabled = false;
	producto4.disabled = false;
	producto5.disabled = false;
	
}