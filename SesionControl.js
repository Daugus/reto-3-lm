const SesionControl = () => {
    if (localStorage.length > 0){
        const estado = localStorage.getItem('Estado');
        if(estado === '1' ){
            document.getElementById('inicio-sesion').classList.add('desactivo');
            document.getElementById('registro-sesion').classList.add('desactivo');
            document.getElementById('cerrar-sesion').classList.remove('desactivo');
            const cerrar_sesion = document.getElementById('cerrar_sesion');
            cerrar_sesion.addEventListener('click', CerrarSesion);
        } else{
            document.getElementById('inicio-sesion').classList.remove('desactivo');
            document.getElementById('registro-sesion').classList.remove('desactivo');
            document.getElementById('cerrar-sesion').classList.add('desactivo');
        }
    } else{
        document.getElementById('inicio-sesion').classList.remove('desactivo');
        document.getElementById('registro-sesion').classList.remove('desactivo');
        document.getElementById('cerrar-sesion').classList.add('desactivo');
    }
}



const CerrarSesion = () =>{
    localStorage.removeItem('Estado');
    localStorage.setItem("Estado", 0);
    document.getElementById('inicio-sesion').classList.remove('desactivo');
    document.getElementById('registro-sesion').classList.remove('desactivo');
    document.getElementById('cerrar-sesion').classList.add('desactivo');
}
    

