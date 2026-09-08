function validarCampo(id, condicion, mensajeError) {
  const contenido = document.getElementById(id);
  const error = document.getElementById(`error-${id}`);
  const valido = condicion(contenido.value);
  if (error) error.textContent = valido ? "" : mensajeError;
  contenido.style.borderColor = valido ? "#000" : "#C85048";

  return valido;
}
