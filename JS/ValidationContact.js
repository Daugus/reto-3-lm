// Seleccionar el formulario y los inputs
const formulario = document.getElementById('FormularioContacto');
const inputs = document.querySelectorAll('#FormularioContacto input');
const textarea = document.querySelector('#FormularioContacto textarea'); 
const btn = document.getElementById('btnContacto');


// Declarar las expresions regulares para cada campos
const expresiones = {
	nombre: /^[A-Z]{1}[a-zA-Z]{2,16}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
	telefono: /^[679]{1}[0-9]{8}/, // 9 numeros.
	mensaje: /^([A-ZÁÉÍÓÚ a-zñáéíóú 0-9]{1,250})+$/ // Texto   
}

const campos = {
	nombre: false,
	correo: false,
	telefono: false,
	mensaje: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
	  	case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
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

const validarMensaje = () => {
	const mensaje = textarea.value;
	const expresion = expresiones.mensaje;

	if(expresion.test(mensaje)){
		document.getElementById('grupo__servicios').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__servicios').classList.add('formulario__grupo-correcto');
		document.querySelector('#grupo__servicios .formulario__input-error').classList.remove('formulario__input-error-activo');

		campos['servicios'] = true;
		
    } else if (mensaje === ""){
    	document.getElementById('grupo__servicios').classList.remove('formulario__grupo-incorrecto');
		document.getElementById('grupo__servicios').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__servicios .formulario__input-error').classList.add('formulario__input-error-activo');

    	campos['servicios'] = false;
	} else {
		document.getElementById('grupo__servicios').classList.add('formulario__grupo-incorrecto');
		document.getElementById('grupo__servicios').classList.remove('formulario__grupo-correcto');
		document.querySelector('#grupo__servicios .formulario__input-error').classList.add('formulario__input-error-activo');

		campos['servicios'] = false;
	}

}

//Controlar los eventos
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
textarea.addEventListener('keyup', validarMensaje);
textarea.addEventListener('blur', validarMensaje);

//Comprobar formulario al pulsar el boton
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.nombre &&  campos.correo && campos.telefono  && campos.servicios){
		formulario.reset();

        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
	    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        
		setTimeout(() => {
			 document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
    	}, 	5000);

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

	document.getElementById('btnContacto').style.cursor='pointer';
	document.getElementById('btnContacto').style.boxShadow='0px 0px 0.623rem var(--azul)';
	document.getElementById('btnContacto').style.transform='scale(1.1)';

})

btn.addEventListener('mouseout', (e) => {
	e.preventDefault();

	document.getElementById('btnContacto').style.cursor='none';
	document.getElementById('btnContacto').style.boxShadow='none';
	document.getElementById('btnContacto').style.transform='none';

})

