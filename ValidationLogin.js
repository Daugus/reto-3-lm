// Seleccionar el formulario y los inputs
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');


// Declarar las expresions regulares para cada campos
const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
}

const campos = {
	password: false,
	correo: false,
}


const validarFormulario = (e) => {
	switch (e.target.name) {
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
	}
}

// Validar los datos de cada campo dependiendo de los datos pasados anteriormente
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
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


//Controlar los eventos
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});




//Comprobar formulario al pulsar el boton
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
    const correo = document.getElementById('correo').value;
    const correols = localStorage.getItem('Correo');

    const cont = document.getElementById('password').value;
    const contls = localStorage.getItem('Contraseña');


	if(correo === correols && cont === contls){
        
		formulario.reset();
        localStorage.removeItem("Estado");
        localStorage.setItem("Estado", 1);
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        
		setTimeout(() => {
			// document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
            window.location.replace('index.html');
		}, 1000);
        
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        
        setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 3000);
	}
});

const prueba = () => {
    const correo = document.getElementById('correo').value;
    const correols = localStorage.getItem('Correo');
    
    if (correo === correols) {
        console.log('Los correos coinciden');
    } else {
        console.log('El correo no es el mismo')
    }
}