const form = document.get ElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
cont validarFormulario = (event) =>{
    switch(event.target.name){
        case: "inputNombre"
        break;

        case: "inputApellido"
        break;

        case: "inputMail"
        break;

        case: "inputTeléfono"
        break;
    }
}
inputs.forEach((input)=>{
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", function(event){
   event.preventDefault();
});