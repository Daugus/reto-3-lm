// Seleccionar el formulario y los inputs
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input')
const btn = document.getElementById('btnRegistro')

// Declarar las expresions regulares para cada campos
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[A-Z]{1}[a-zA-Z]{2,16}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
	telefono: /^[679]{1}[0-9]{8}/ // 9 numeros.
}

const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

const registro = {
	nombre : document.getElementById('nombre'),
	usuario : document.getElementById('usuario'),
	password : document.getElementById('password'),
	correo : document.getElementById('correo'),
	telefono : document.getElementById('telefono')
}


const validarFormulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarCampo(expresiones.usuario, e.target, 'usuario');
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

// Validar los datos de cada campo dependiendo de los datos pasados anteriormente
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
    } else if (input.value === ""){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = false;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

// Comprobar que las dos contrase??as coincidan
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
    } else if (inputPassword1.value === ""){
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}



//Controlar los eventos
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


//Guardar datos de la sesion
const GuardarRegistro = () =>{
	// var nombre = document.getElementById('nombre').value;
	// var usuario = document.getElementById('usuario').value;
	// var password = document.getElementById('password').value;
	// var correo = document.getElementById('correo').value;
	// var telefono = document.getElementById('telefono').value;


	objRegistro = {
		"Nombre": registro.nombre.value,
		"Usuario": registro.usuario.value,
		"Contrase??a": registro.password.value,
		"Correo":registro.correo.value,
		"Telefono": registro.telefono.value
	};
	const registroString = JSON.stringify(objRegistro);
	localStorage.setItem("Estado", 0);
	localStorage.setItem(localStorage.length, registroString);
	alert("Registro guardado correctamente. En total hay " + (localStorage.length -1) + " registros.")

}

const NuevaVentana = () => {
	if ((localStorage.length == 0) || (localStorage.length == 1)){
		alert("No existen registros");
	}
	else{
		var ventanaNueva = window.open("", "Lista de registros");
				const parrafo = ventanaNueva.document.createElement("p"); //Crear un p??rrafo nuevo
				parrafo.innerText = '{ "Registros de los usuarios": [' ;
				ventanaNueva.document.body.appendChild(parrafo);
				for (i = 1; i <= localStorage.length; i++) {
					let registroString = localStorage.getItem(i); //Obtener el registro desde el navagador
					const objRegistro = JSON.parse(registroString); //Convertir en String
					const parrafo = ventanaNueva.document.createElement("p"); //Crear un p??rrafo nuevo
					if (i < localStorage.length) parrafo.innerText = '{"Nombre":"'  + objRegistro.Nombre + '", "Usuario":"'  + objRegistro.Usuario + '", "Contrase??a":"'  + objRegistro.Contrase??a + '", "Correo":"'  + objRegistro.Correo + '", "Tel??fono":"'  + objRegistro.Telefono + '"},';
					else parrafo.innerText = '{"Nombre":"'  + objRegistro.Nombre + '", "Usuario":"'  + objRegistro.Usuario + '", "Contrase??a":"'  + objRegistro.Contrase??a + '", "Correo":"'  + objRegistro.Correo + '", "Tel??fono":"'  + objRegistro.Telefono + '"},';
					ventanaNueva.document.body.appendChild(parrafo);
				}
				const parrafo2 = ventanaNueva.document.createElement("p"); //paragrafo berria sortu
				parrafo2.innerText = ']}' ;
				ventanaNueva.document.body.appendChild(parrafo2);
	}
}



//Comprobar formulario al pulsar el boton
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		GuardarRegistro();
		formulario.reset();
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			// document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
			window.location.replace('inicio_sesion.html');
		}, 1000);
		NuevaVentana();

        
		
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        
        setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 3000);
	}
});

//Hover del boton
btn.addEventListener('mouseover', (e) => {
	e.preventDefault();

	document.getElementById('btnRegistro').style.cursor='pointer';
	document.getElementById('btnRegistro').style.boxShadow='0px 0px 0.623rem var(--azul)';
	document.getElementById('btnRegistro').style.transform='scale(1.1)';

})

btn.addEventListener('mouseout', (e) => {
	e.preventDefault();

	document.getElementById('btnRegistro').style.cursor='none';
	document.getElementById('btnRegistro').style.boxShadow='none';
	document.getElementById('btnRegistro').style.transform='none';

})
