function validarCampo(id, condicion, mensajeError) {
  const contenido = document.getElementById(id);
  const error = document.getElementById(`error-${id}`);
  const ok = condicion(contenido.value);
  if (error) error.textContent = ok ? "" : mensajeError;
  contenido.style.borderColor = ok ? "#000" : "#C85048";

  return ok;
}

function validarCorreo(correo) {
  const correoInput = document.getElementById(correo);
  if (correoInput.validity.valid) {
    return true;
  } else {
    return false;
  }
}
