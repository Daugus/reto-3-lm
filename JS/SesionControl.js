const SesionControl = () => {
    if (localStorage.length > 0){
        const estado = localStorage.getItem('Estado');
        if(estado === '1' ){
            document.getElementById('inicio-sesion').classList.add('desactivo');
            document.getElementById('registro-sesion').classList.add('desactivo');
            document.getElementById('btnCerrarSesion').classList.remove('desactivo');
            document.getElementById('btnEliminarCuentas').classList.remove('desactivo');


            const btnCerrarSesion = document.getElementById('btnCerrarSesion')
            const btnEliminarCuentas = document.getElementById('btnEliminarCuentas')

            btnCerrarSesion.addEventListener('click', CerrarSesion);
            btnEliminarCuentas.addEventListener('click', EliminarCuentas);

        } else{
            document.getElementById('inicio-sesion').classList.remove('desactivo');
            document.getElementById('registro-sesion').classList.remove('desactivo');
            document.getElementById('btnCerrarSesion').classList.add('desactivo');
            document.getElementById('btnEliminarCuentas').classList.add('desactivo');
        }
    } else{
        document.getElementById('inicio-sesion').classList.remove('desactivo');
        document.getElementById('registro-sesion').classList.remove('desactivo');
        document.getElementById('btnCerrarSesion').classList.add('desactivo');
        document.getElementById('btnEliminarCuentas').classList.add('desactivo');

    }
};


const CerrarSesion = () => {
    localStorage.removeItem('Estado');
    localStorage.setItem("Estado", 0);
    document.getElementById('inicio-sesion').classList.remove('desactivo');
    document.getElementById('registro-sesion').classList.remove('desactivo');
    document.getElementById('btnCerrarSesion').classList.add('desactivo');
    document.getElementById('btnEliminarCuentas').classList.add('desactivo');

}

const EliminarCuentas = () => {
    alert(localStorage.length + " Cuentas eliminadas")
    localStorage.clear();
    localStorage.setItem("Estado", 0);
    window.location.replace('index.html');

}

