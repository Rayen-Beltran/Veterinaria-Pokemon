document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  let valido = true;

  // Aqui deberia ir la validacion del correo cuando me acuerde

  valido = validarCampo(
    "contraseña",
    valor => valor.length >= 4 && valor.length <= 10,
    "La contraseña debe tener entre 4 y 10 caracteres."
  ) && valido;

  if (valido) {
    alert("¡Bienvenido entrenador Thomas!");
    this.reset();
  }
});
