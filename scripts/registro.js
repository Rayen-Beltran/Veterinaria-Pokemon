document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  let valido = true;

  valido = validarCampo(
    "nombre",
    contenido => contenido.trim().length > 0,
    "El nombre es obligatorio."
  ) && valido;

  valido = validarCampo(
    "correo",
    validarCorreo,
    "el correo es obligatorio."
  ) && valido;

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
    contenido => contenido === document.getElementById("contraseña2").value,
    "Las contraseñas no coinciden."
  ) && valido;

  valido = validarCampo(
    "region",
    contenido => contenido !== "",
    "Debe seleccionar una región."
  ) && valido;

  if (valido) {
    alert(`¡Bienvenido a Huellitas, ${document.getElementById("nombre")}!`);
    this.reset();
    document.getElementById("region").innerHTML = '<option value="">-- Seleccione su conjunto residencial --</option>';
  }
})
