function setFruraOrVerdura(value) {
	let onSet = document.getElementById("cm")
	while(onSet.firstChild) {
		onSet.removeChild(onSet.firstChild)
	}
	let conjComunas = ComunasDeChile[value];
	let lenComunas = conjComunas.length;
	for(i=0; i < lenComunas; i+=1) {
		let newOption = document.createElement("option")
		newOption.value = conjComunas[i];
		newOption.text = conjComunas[i];
		onSet.appendChild(newOption)
	}
}

function Validar() {
	let tipoProducto = document.getElementById("tipo-producto");
	tipoProducto.required = true;
	let ValidTipoProducto = tipoProducto.value != "0";
	
	let space = document.getElementById("top");
	let m1 = document.getElementById("E1");
	let m9 = document.getElementById("E9");
	let botonConfirmar = document.getElementById("confirmar");
	let botonNoConfirmar = document.getElementById("no-confirmar");
	
	space.style.display = "block";

	if (!ValidTipoProducto) {
		m1.style.display = "block";
	} else {m1.style.display = "none";}

	if (ValidTipoProducto) {
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