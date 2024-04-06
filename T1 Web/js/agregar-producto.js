const productos0 = ["--Seleccione un producto--"];
const productosFrutas = ["--Seleccione un producto--", "Arándano", "Frambuesa", "Frutilla", "Grosella", "Mora", "Limón", "Mandarina", "Naranja", "Pomelo", 
"Melón", "Sandía", "Palta", "Chirimoya", "Coco", "Dátil", "Kiwi", "Mango", "Papaya", "Piña", "Plátano", 
"Damasco", "Cereza", "Ciruela", "Higo", "Kaki", "Manzana", "Durazno", "Nectarin", "Níspero", "Pera", "Uva", 
"Almendra", "Avellana", "Maní", "Castaña", "Nuez", "Pistacho"];
const productosVerduras = ["--Seleccione un producto--", "Brócoli", "Repollo", "Coliflor", "Rábano", "Alcachofa", "Lechuga", "Zapallo", "Pepino", "Haba", "Maíz", 
"Champiñón", "Acelga", "Apio", "Espinaca", "Perejil", "Ajo", "Cebolla", "Espárrago", "Puerro", "Acelga", 
"Espinaca", "Remolacha", "Berenjena", "Papa", "Pimiento", "Tomate", "Zanahoria"];

const productosTotales = [productos0, productosFrutas,productosVerduras];

const comunas0 = ["--Seleccione una comuna--"];
const comunas1 = ["--Seleccione una comuna--","Alto Hospicio","Camiña","Colchane","Huara",
"Iquique","Pica","Pozo Almonte"];
const comunas2 = ["--Seleccione una comuna--","Antofagasta","Calama","María Elena","Mejillones",
"Ollagüe","San Pedro de Atacama","Sierra Gorda","Taltal","Tocopilla"];
const comunas3 = ["--Seleccione una comuna--","Alto del Carmen","Caldera","Chañaral",
"Copiapó","Diego de Almagro","Freirina","Huasco","Tierra Amarilla","Vallenar"];
const comunas4 = ["--Seleccione una comuna--","Andacollo","Canela","Combarbalá","Coquimbo",
"Illapel","La Higuera","La Serena","Los Vilos","Monte Patria","Ovalle","Paihuano","Punitaqui",
"Río Hurtado","Salamanca","Vicuña"];
const comunas5 = ["--Seleccione una comuna--","Algarrobo","Cabildo","Calle Larga","Cartagena",
"Casablanca","Catemu","Concón","El Quisco","El Tabo","Hijuelas","Juan Fernández","La Calera",
"La Cruz","La Ligua","Limache","Llay-Llay","Los Andes","Nogales","Olmué","Panquehue","Papudo",
"Petorca","Puchuncaví","Putaendo","Quillota","Quilpué","Quintero","Rapa Nui","Rinconada",
"San Antonio","San Esteban","San Felipe","Santa María","Santo Domingo","Valparaíso",
"Villa Alemana","Viña del Mar","Zapallar"];
const comunas6 = ["--Seleccione una comuna--","Chépica","Chimbarongo","Codegua","Coinco",
"Coltauco","Doñihue","Graneros","La Estrella","Las Cabras","Litueche","Lolol","Machalí",
"Malloa","Marchigüe","Mostazal","Nancagua","Navidad","Olivar","Palmilla","Paredones",
"Peralillo","Peumo","Pichidegua","Pichilemu","Placilla","Pumanque","Quinta de Tilcoco",
"Rancagua","Rengo","Requínoa","San Fernando","Santa Cruz","San Vicente de Tagua-Tagua"];
const comunas7 = ["--Seleccione una comuna--","Cauquenes","Chanco","Colbún","Constitución",
"Curepto","Curicó","Empedrado","Hualañé","Licantén","Linares","Longaví","Maule","Molina",
"Parral","Pelarco","Pelluhue","Pencahue","Rauco","Retiro","Río Claro","Romeral",
"Sagrada Familia","San Clemente","San Javier","San Rafael","Talca","Teno","Vichuquén",
"Villa Alegre","Yerbas Buenas"];
const comunas8 = ["--Seleccione una comuna--","Alto Biobío","Antuco","Arauco","Cabrero",
"Cañete","Chiguayante","Concepción","Contulmo","Coronel","Curanilahue","Florida","Haulpén",
"Hualqui","Laja","Lebu","Los Álamos","Los Ángeles","Lota","Mulchén","Nacimiento","Negrete",
"Penco","Quilaco","Quilleco","San Pedro de la Paz","San Rosendo","Santa Bárbara",
"Santa Juana","Talcahuano","Tirúa","Tomé","Tucapel","Yumbel"];
const comunas9 = ["--Seleccione una comuna--","Angol","Carahue","Cholchol","Collipulli",
"Cunco","Curacautín","Curarrehue","Ercilla","Freire","Galvarino","Gorbea","Lautaro",
"Loncoche","Lonquimay","Los Sauces","Lumaco","Melipeuco","Nueva Imperial","Padre las Casas",
"Perquenco","Pitrufquén","Pucón","Puerto Saavedra","Purén","Renaico","Temuco","Teodoro Schmidt",
"Toltén","Traiguén","Victoria","Vilcún","Villarrica"];
const comunas10 = ["--Seleccione una comuna--","Ancud","Calbuco","Castro","Chaitén","Chonchi",
"Cochamó","Curaco de Vélez","Dalcahue","Fresia","Frutillar","Futaleufú","Hualaihué",
"Llanquihue","Los Muermos","Maullín","Osorno","Palena","Puerto Montt","Puerto Octay",
"Puerto Varas","Puqueldón","Purranque","Puyehue","Queilen","Quemchi","Quellón","Quinchao",
"Río Negro","San Juan de la Costa","San Pablo"];
const comunas11 = ["--Seleccione una comuna--","Aysén","Chile Chico","Cisnes","Cochrane",
"Coyhaique","Guaitecas","Lago Verde","O'Higgins","Río Ibáñez","Tortel"];
const comunas12 = ["--Seleccione una comuna--","Antártica","Cabo de Hornos","Laguna Blanca",
"Natales","Porvenir","Primavera","Punta Arenas","Río Verde","San Gregorio","Timaukel",
"Torres del Paine"];
const comunas13 = ["--Seleccione una comuna--","Alhué","Buin","Calera de Tango","Cerrillos",
"Cerro Navia","Colina","Conchalí","Curacaví","El Bosque","El Monte","Estación Central",
"Huechuraba","Independencia","Isla de Maipo","La Cisterna","La Granja","La Florida","La Pintana",
"La Reina","Lampa","Las Condes","Lo Barnechea","Lo Espejo","Lo Prado","Macul","Maipú",
"María Pinto","Melipilla","Ñuñoa","Paine","Padre Hurtado","Pedro Aguirre Cerda","Peñaflor",
"Peñalolén","Pirque","Providencia","Pudahuel","Puente Alto","Quilicura","Quinta Normal",
"Recoleta","Renca","San Bernardo","San Miguel","San Joaquín","San José de Maipo","San Pedro",
"San Ramón","Santiago","Talagante","Til Til","Vitacura"];
const comunas14 = ["--Seleccione una comuna--","Corral","Futrono","Lago Ranco","Lanco",
"La Unión","Los Lagos","Máfil","Mariquina","Paillaco","Panguipulli","Río Bueno","Valdivia"];
const comunas15 = ["--Seleccione una comuna--","Arica","Camarones","General Lagos","Putre"];
const comunas16 = ["--Seleccione una comuna--","Bulnes","Chillán","Chillán Viejo",
"Cobquecura","Coelemu","Coihueco","El Carmen","Ninhue","Ñiquén","Pemuco","Pinto","Portezuelo",
"Quillón","Quirihue","Ránquil","San Carlos","San Fabián","San Ignacio","San Nicolás",
"Trehuaco","Yungay"];

const allComunas = [comunas0, comunas1, comunas2, comunas3, comunas4, comunas5, comunas6, comunas7, comunas8, 
comunas9, comunas10, comunas11, comunas12, comunas13, comunas14, comunas15, comunas16];

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
			listOnSet[k].removeChild(listOnSet[k].firstChild);
		}
		let conjProductosTotales = productosTotales[value];
		let lenProductosTotales = conjProductosTotales.length;
		for(i=0; i < lenProductosTotales; i+=1) {
			let newOption = document.createElement("option");
			newOption.value = conjProductosTotales[i];
			newOption.text = conjProductosTotales[i];
			listOnSet[k].appendChild(newOption);
		}
	}
}

function setComuna(value) {
	let onSet = document.getElementById("comuna");
	while(onSet.firstChild) {
		onSet.removeChild(onSet.firstChild);
	}
	let mostrarComunas = allComunas[value];
	let lenMostrarComunas = mostrarComunas.length;
	for(i=0; i < lenMostrarComunas; i+=1) {
		let newOption = document.createElement("option");
		newOption.value = mostrarComunas[i];
		newOption.text = mostrarComunas[i];
		onSet.appendChild(newOption);
	}
}

function Validar() {
	let tipoProducto = document.getElementById("tipo-producto");
	let producto1 = document.getElementById("producto1");
	let producto2 = document.getElementById("producto2");
	let producto3 = document.getElementById("producto3");
	let producto4 = document.getElementById("producto4");
	let producto5 = document.getElementById("producto5");
	let descripcion = document.getElementById("descripcion");
	let fotos = document.getElementById("fotos");
	let region = document.getElementById("region");
	let comuna = document.getElementById("comuna");
	let nombre = document.getElementById("nombre");
	let mail = document.getElementById("mail");
	let celular = document.getElementById("celular");


	tipoProducto.required = true;
	let ValidTipoProducto = tipoProducto.value != "0";
	let ValidProducto1 = producto1.value != "--Seleccione un producto--";
	let ValidProducto2 = producto2.value != "--Seleccione un producto--";
	let ValidProducto3 = producto3.value != "--Seleccione un producto--";
	let ValidProducto4 = producto4.value != "--Seleccione un producto--";
	let ValidProducto5 = producto5.value != "--Seleccione un producto--";

	let ValidProductos = false;
	let listValidProductos = [ValidProducto1, ValidProducto2, ValidProducto3, ValidProducto4, ValidProducto5];
	let lenListValidProductos = listValidProductos.length;
		for(i=0; i<lenListValidProductos; i+=1){
		if (listValidProductos[i]){
			ValidProductos = true;
		}
	}

	let ValidFotos = fotos.files.length > 0 && fotos.files.length < 4;
	region.required = true;
	let ValidRegion = region.value != "0";
	comuna.required = true;
	let ValidComuna = comuna.value != "--Seleccione una comuna--";
	nombre.required = true;
	let ValidNombre = nombre.value.length > 2 && nombre.value.length < 81;
	mail.required = true;
	let ValidMail = /^[^\s@]+@[^\s@]+\.com/.test(mail.value);
	let ValidCelular = /^\+569 (\d{4}) (\d{4})/.test(celular.value);
	
	let space = document.getElementById("top");
	let m1 = document.getElementById("E1");
	let m2 = document.getElementById("E2");
	let m3 = document.getElementById("E3");
	let m4 = document.getElementById("E4");
	let m5 = document.getElementById("E5");
	let m6 = document.getElementById("E6");
	let m7 = document.getElementById("E7");
	let m8 = document.getElementById("E8");
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
	
	if (!ValidFotos) {
		m3.style.display = "block";
	} else {m3.style.display = "none";}
	
	if (!ValidRegion) {
		m4.style.display = "block";
	} else {m4.style.display = "none";}

	if (!ValidComuna) {
		m5.style.display = "block";
	} else {m5.style.display = "none";}
	
	if (!ValidNombre) {
		m6.style.display = "block";
	} else {m6.style.display = "none";}

	if (!ValidMail) {
		m7.style.display = "block";
	} else {m7.style.display = "none";}

	if ((!ValidCelular) && (celular.value != "")) {
		m8.style.display = "block";
	} else {m8.style.display = "none";}

	if (ValidTipoProducto && ValidProductos && ValidFotos && ValidRegion && ValidComuna
		&& ValidNombre && (ValidMail || mail.value == "") && 
		(ValidCelular || celular.value == "") ) {
		m9.style.display = "block";
		botonConfirmar.style.display = "block";
		botonNoConfirmar.style.display = "block";
		tipoProducto.disabled = true;
		producto1.disabled = true;
		producto2.disabled = true;
		producto3.disabled = true;
		producto4.disabled = true;
		producto5.disabled = true;
		descripcion.disabled = true;
		fotos.disabled = true;
		region.disabled = true;
		comuna.disabled = true;
		nombre.disabled = true;
		mail.disabled = true;
		celular.disabled = true;
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
	let descripcion = document.getElementById("descripcion");
	let fotos = document.getElementById("fotos");
	let region = document.getElementById("region");
	let comuna = document.getElementById("comuna");
	let nombre = document.getElementById("nombre");
	let mail = document.getElementById("mail");
	let celular = document.getElementById("celular");
	
	TipoProducto.disabled = false;
	producto1.disabled = false;
	producto2.disabled = false;
	producto3.disabled = false;
	producto4.disabled = false;
	producto5.disabled = false;
	descripcion.disabled = false;
	fotos.disabled = false;
	region.disabled = false;
	comuna.disabled = false;
	nombre.disabled = false;
	mail.disabled = false;
	celular.disabled = false;
	
	alert("Agregación exitosa de productos.");
}

function goBack() {
	
	let tipoProducto = document.getElementById("tipo-producto");
	let producto1 = document.getElementById("producto1");
	let producto2 = document.getElementById("producto2");
	let producto3 = document.getElementById("producto3");
	let producto4 = document.getElementById("producto4");
	let producto5 = document.getElementById("producto5");
	let descripcion = document.getElementById("descripcion");
	let fotos = document.getElementById("fotos");
	let region = document.getElementById("region");
	let comuna = document.getElementById("comuna");
	let nombre = document.getElementById("nombre");
	let mail = document.getElementById("mail");
	let celular = document.getElementById("celular");

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
	descripcion.disabled = false;
	fotos.disabled = false;
	region.disabled = false;
	comuna.disabled = false;
	nombre.disabled = false;
	mail.disabled = false;
	celular.disabled = false;
}