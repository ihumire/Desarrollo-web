const productos0 = ["Seleccione un producto"];
const productosFrutas = ["Seleccione un producto", "Arándano", "Frambuesa", "Frutilla", "Grosella", "Mora", "Limón", "Mandarina", "Naranja", "Pomelo", 
"Melón", "Sandía", "Palta", "Chirimoya", "Coco", "Dátil", "Kiwi", "Mango", "Papaya", "Piña", "Plátano", 
"Damasco", "Cereza", "Ciruela", "Higo", "Kaki", "Manzana", "Durazno", "Nectarin", "Níspero", "Pera", "Uva", 
"Almendra", "Avellana", "Maní", "Castaña", "Nuez", "Pistacho"];
const productosVerduras = ["Seleccione un producto", "Brócoli", "Repollo", "Coliflor", "Rábano", "Alcachofa", "Lechuga", "Zapallo", "Pepino", "Haba", "Maíz", 
"Champiñón", "Acelga", "Apio", "Espinaca", "Perejil", "Ajo", "Cebolla", "Espárrago", "Puerro", "Remolacha", "Berenjena", "Papa", "Pimiento", "Tomate", "Zanahoria"];

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

// Función para cargar el archivo JSON de forma asíncrona
fetch('static/js/region_comunas.json') // Reemplaza con la ruta correcta a tu archivo JSON
.then(response => response.json())
.then(data => {
    // Una vez cargado el JSON, llenamos el select de regiones
    const regionSelect = document.getElementById("region");
    
    data.regiones.forEach(region => {
        const option = document.createElement("option");
        option.value = region.id;
        option.textContent = region.nombre;
        regionSelect.appendChild(option);
    });
    
    // Actualizar el select de comunas cuando se selecciona una región
    const comunaSelect = document.getElementById("comuna");
    regionSelect.addEventListener("change", () => {
        comunaSelect.innerHTML = "" ; // Borrar opciones anteriores
        const selectedRegionId = parseInt(regionSelect.value);
        const selectedRegion = data.regiones.find(region => region.id === selectedRegionId);
        
        if (selectedRegion) {
            selectedRegion.comunas.forEach(comuna => {
                const option = document.createElement("option");
                option.value = comuna.id;
                option.textContent = comuna.nombre;
                comunaSelect.appendChild(option);
            });
        }
    });
})
.catch(error => {
    console.error('Hubo un error al cargar el archivo JSON:', error);
});

// URL del archivo JSON externo
const jsonURL = '/static/js/artesanias.json';

// Función para cargar los materiales en el select
function cargarMateriales() {
  const materialSelect = document.getElementById("artesany");

  // Utiliza fetch para obtener el JSON externo
  fetch(jsonURL)
    .then(response => response.json())
    .then(data => {
      data.forEach(material => {
        const option = document.createElement("option");
        option.value = material.nombre;
        option.textContent = material.nombre;
        materialSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error al cargar el JSON:', error);
    });
}

// Llama a la función para cargar los materiales al cargar la página
cargarMateriales();

function showSelectedTipoProducto() {
	const selectElement = document.getElementById("producto");
	const selectedTipoProducto = selectElement.value;
  
	if (selectedTipoProducto) {
		const selectedList = document.getElementById("selectedProducto");
		const listItem = document.createElement("li");
		listItem.textContent = selectedTipoProducto;
  
		// Agregar el producto seleccionado al campo oculto
		updateSelectedTipoProductosInput(selectedTipoProducto);
  
		// Agregar el producto seleccionado a la lista visual
		selectedList.appendChild(listItem);
  
		// Allow removing the producto cuando se hace clic
		listItem.addEventListener("click", function() {
			listItem.remove();
			updateSelectedTipoProductosInput(selectedTipoProducto);
		});
  
		selectElement.value = "";  // Reset the select to default value
	}
}

function updateSelectedTipoProductosInput(selectedProductos) {
	const selectedProductosInput = document.getElementById("selectedProductosInput");
	let currentSelections = selectedProductosInput.value;
  
	if (currentSelections) {
		currentSelections += ',' + selectedProductos;
	} else {
		currentSelections = selectedProductos;
	}
  
	selectedProductosInput.value = currentSelections;
  }
  
  
  
  
	const validateRegion = (region) => {
	  if (!region) return false;
	  return true;
	};
  
	const validateComuna = (region,comuna) => {
	  if (!comuna) return false;
	  return true
	};
  
	const validateSelectedProductos = (selectedProductos) =>{
	  return selectedProductos.children.length > 0 && 
		  selectedProductos.children.length <= 5;
	};
  
	const validateName = (name) => { 
	  return name.length <= 80 && name.length >= 3;
	};
  
	const validateEmail = (email) => {
	  if (!email) return false;
	  // length validation
	  let lengthValid = email.length > 15;
	
	  // format validation
	  let re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	  let formatValid = re.test(email);
	
	  // return logic AND of validations.
	  return lengthValid && formatValid;
	};
	
	const validatePhoneNumber = (phoneNumber) => {
	  if (!phoneNumber) return true;
	  // length validation
	  let lengthValid = phoneNumber.length >= 8;
	
	  // format validation
	  let re = /^[0-9]+$/;
	  let formatValid = re.test(phoneNumber);
	
	  // return logic AND of validations.
	  return lengthValid && formatValid;
	};
	
	const validateFiles = (files) => {
	  if (!files) return false;
	
	  // number of files validation
	  let lengthValid = 1 <= files.length && files.length <= 3;
	
	  // file type validation
	  let typeValid = true;
	
	  for (const file of files) {
		// file.type should be "image/<foo>"
		let fileFamily = file.type.split("/")[0];
		typeValid &&= fileFamily == "image";
	  }
	
	  // return logic AND of validations.
	  return lengthValid && typeValid;
	};
	

	const validateForm = () => {
	// get elements from DOM by using form's name.
	let formulario = document.forms["formulario"];
	let region = formulario["region"].value;
	let comuna = formulario["comuna"].value;
	let selectedArtesanies = document.getElementById("selectedProducto");
	let name = formulario["name"].value;
	let email = formulario["email"].value;
	let phoneNumber = formulario["phone"].value;
	let files = formulario["files"].files;

	// validation auxiliary variables and function.
	let invalidInputs = [];
	let isValid = true;
	const setInvalidInput = (inputName) => {
	invalidInputs.push(inputName);
	isValid &= false;
	};

	// validation logic
	if (!validateRegion(region)) {
		setInvalidInput("Region");
	}
	if (!validateComuna(region,comuna)){
		setInvalidInput("Comuna");
	}
	if (!validateSelectedArtesanies(selectedArtesanies)){
		setInvalidInput("Tipos de Artesania");
	}
	if (!validateFiles(files)) {
	setInvalidInput("Foto(s)");
	}
	if (!validateName(name)) {
		setInvalidInput("Nombre")
	}
	if (!validateEmail(email)) {
	setInvalidInput("Email");
	}
	if (!validatePhoneNumber(phoneNumber)) {
	setInvalidInput("Phone number");
	}

	// finally display validation
	let validationBox = document.getElementById("val-box");
	let validationMessageElem = document.getElementById("val-msg");
	let validationListElem = document.getElementById("val-list");

	if (!isValid) {
	validationListElem.textContent = "";
	// add invalid elements to val-list element.
	for (let input of invalidInputs) {
		let listElement = document.createElement("li");
		listElement.innerText = input;
		validationListElem.append(listElement);
	}
	// set val-msg
	validationMessageElem.innerText = "Los siguiente campos son invalidos:";

	// make validation prompt visible
	validationBox.hidden = false;
	} else{
		return true
	}
};

function showConfirmation() {
	const confirmationDiv = document.getElementById('confirmation');
	confirmationDiv.style.display = 'block';
}
function cancelRegistration() {
	const confirmationDiv = document.getElementById('confirmation');
	confirmationDiv.style.display = 'none';
}
	
	
let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", (event) =>{
	event.preventDefault();
	if (validateForm()) {
		showConfirmation();
	}
});

function redirectToIndex() {
	window.location.href = '/';  // Redirects to index.html
}

const showAlert=()=> {
	let formulario = document.getElementById("formulario");
	alert('Sus datos han sido recibidos correctamente.');
	formulario.submit();
}	

