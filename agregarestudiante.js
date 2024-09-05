let estudiante = [];

const form = document.querySelector("#miForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = new FormData(form);

    const nombreInp = formData.get("nombre");
    const apellidoInp = formData.get("apellido");
    const edadInp = formData.get("edad");

    const nuevoEstudiante = crearEstudiante (nombreInp, apellidoInp, edadInp);


    agregarEstudiante(nuevoEstudiante);


});

function agregarEstudiante(estudiante){
    try{
        estudiante.push(estudiante);
        console.log("si  se agrego:", estudiante);
    }
    catch (e) {
        console.error("no se ha agregado");

    }
}
function crearEstudiante(nombreI, apellidoI, edadI){
    return {
        nombre: nombreI,
        apellido: apellidoI,
        edad: edadI,
    };
}


