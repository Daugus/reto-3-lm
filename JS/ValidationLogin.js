// Seleccionar el formulario y los inputs
const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
const btn = document.getElementById('btnInicioSesion')


// Declarar las expresions regulares para cada campos
const expresiones = {
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/,
}

const campos = {
	password: false,
	correo: false,
}

const inicio = {
	password: document.getElementById('password'),
	correo: document.getElementById('correo'),
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
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
btn.addEventListener('click', (e) => {
	e.preventDefault();

    const correo = inicio.correo.value;
    const cont = inicio.password.value;

   	let correols1;
	let contls1;

	const limite = localStorage.length;
	const estado = localStorage.getItem('Estado');
	
	if(campos.correo && campos.password){
		for(let i = 0; i < limite; i++){
			
			const item = localStorage.getItem(i);
			if (item !== estado){
				const datos = JSON.parse(item);

				const correols2 = datos.correo;
				const contls2 = datos.password;

				if (correols2 === correo && contls2 === cont){
					correols1 == datos.correo;
					contls1 == datos.password;
				}
			}
		}
	}


	if(correo === correols1 && cont === contls1 && campos.correo && campos.password){
        
		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');

		formulario.reset();

        localStorage.removeItem('Estado');
        localStorage.setItem('Estado', 1);
        
		setTimeout(() => {
            window.location.replace('index.html');
		}, 1000);
        
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        
        setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 3000);
	}
});


const prueba = () => {
	console.log(localStorage.length);
	// for(let i=0; i < limite; i++){
	// 	const item = localStorage.getItem(i);
	// 	const datos = JSON.parse(item);
	// 	console.log(datos);
	// }
}

//Hover del boton

btn.addEventListener('mouseover', (e) => {
	e.preventDefault();

	document.getElementById('btnInicioSesion').style.cursor='pointer';
	document.getElementById('btnInicioSesion').style.boxShadow='0px 0px 0.623rem var(--azul)';
	document.getElementById('btnInicioSesion').style.transform='scale(1.1)';

})

btn.addEventListener('mouseout', (e) => {
	e.preventDefault();

	document.getElementById('btnInicioSesion').style.cursor='none';
	document.getElementById('btnInicioSesion').style.boxShadow='none';
	document.getElementById('btnInicioSesion').style.transform='none';

})