// const btn = document.getElementById('cerrar_sesion')


const SesionControl = () => {
    if (localStorage.length > 0){
        const estado = localStorage.getItem('Estado');
        if(estado === '1' ){
            document.getElementById('inicio-sesion').classList.add('desactivo');
            document.getElementById('registro-sesion').classList.add('desactivo');
            document.getElementById('cerrar-sesion').classList.remove('desactivo');
            document.getElementById('usuario-sesion').innerHTML= ('Usuario registrado: ' + localStorage.getItem('Nombre'));
            document.getElementById('usuario-sesion').classList.remove('desactivo');
            // cerrar_sesion.addEventListener('click', CerrarSesion);
        } else{
            document.getElementById('inicio-sesion').classList.remove('desactivo');
            document.getElementById('registro-sesion').classList.remove('desactivo');
            document.getElementById('cerrar-sesion').classList.add('desactivo');
            document.getElementById('usuario-sesion').classList.add('desactivo');
        }
    } else{
        document.getElementById('inicio-sesion').classList.remove('desactivo');
        document.getElementById('registro-sesion').classList.remove('desactivo');
        document.getElementById('cerrar-sesion').classList.add('desactivo');
        document.getElementById('usuario-sesion').classList.add('desactivo');

    }
}


// btn.addEventListener('click', (e)=> {
//     e.defaultPrevented();
//     localStorage.removeItem('Estado');
//     localStorage.setItem("Estado", 0);
//     document.getElementById('inicio-sesion').classList.remove('desactivo');
//     document.getElementById('registro-sesion').classList.remove('desactivo');
//     document.getElementById('cerrar-sesion').classList.add('desactivo');
// })

