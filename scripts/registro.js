document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  let valido = true;

  valido = validarCampo(
    "nombre",
    contenido => contenido.trim().length > 0,
    "El nombre es obligatorio."
  ) && valido;

  // No se valida el correo, porque se hace automaticamente con type="email"

  valido = validarCampo(
    "correo2",
    contenido => contenido === document.getElementById("correo").value,
    "Los correos no coinciden."
  ) && valido;

  valido = validarCampo(
    "contraseña",
    contenido => contenido.length >= 4 && contenido.length <= 10,
    "La contraseña debe tener entre 4 y 10 caracteres."
  ) && valido;

  valido = validarCampo(
    "contraseña2",
    contenido => contenido === document.getElementById("contraseña").value,
    "Las contraseñas no coinciden."
  ) && valido;

  valido = validarCampo(
    "region",
    contenido => contenido !== "",
    "Debe seleccionar una región."
  ) && valido;

  if (valido) {
    alert(`¡Bienvenido a Huellitas, ${parsearNombre("nombre")}!`);
    this.reset();
    document.getElementById("region").innerHTML = `<option value="" disabled selected>-- Seleccione su conjunto residencial --</option>
    <option value="opcion1">Pueblo Paleta</option>
    <option value="opcion2">Ciudad Verde</option>
    <option value="opcion3">Ciudad Plateada</option>
    <option value="opcion4">Ciudad Celeste</option>
    <option value="opcion5">Ciudad Carmin</option>
    <option value="opcion6">Pueblo Lavanda</option>
    <option value="opcion7">Ciudad Azulona</option>
    <option value="opcion8">Ciudad Azafran</option>
    <option value="opcion9">Ciudad Fucsia</option>
    <option value="opcion10">Isla Canela</option>`;
  }
})

function parsearNombre(id) {
  try {
    let input = document.getElementById(id);
    let nombre = input.value;
    return nombre;
  } catch (e) {
    console.error("Ocurrio un error al obtener el nombre:", e);
  }
}
