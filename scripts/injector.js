const scriptSrc = document.currentScript.src;
const basePath = scriptSrc.substring(0, scriptSrc.indexOf('scripts/'));

function inyectarHeader(){
  document.getElementById("header").innerHTML = `
    <a href="${basePath}index.html">
      <img src="https://yt3.googleusercontent.com/ytc/AIdro_lUdOZuGBEOWyjiFl4M273jIjl_LObZoJJlVqd5mYdp4vA=s900-c-k-c0x00ffffff-no-rj" alt="Logo Veterinaria" class="logo">
    </a>
    <h1 class="no-select">Veterinaria Huellitas</h1>
    <section>
      <a href="${basePath}index.html">Inicio</a>
      <a href="${basePath}paginas/nosotros.html">Nosotros</a>
      <a href="${basePath}paginas/productos.html">Productos</a>
      <a href="${basePath}paginas/blogs.html">Blog</a>
    </section>
    <section>
      <a href="${basePath}paginas/registroEntrenador.html">Registrate</a>
      <a href="${basePath}paginas/inicioSesion.html">Iniciar Sesion</a>
    </section>
  `;
}

function inyectarFooter(){
    document.getElementById("footer").innerHTML = '<div class="caluga"> <p>     Veterinaria Huellitas - Cuidando pokemones desde 1996 </p> <p>     © 2026 Veterinaria Huellitas. Todos los derechos reservados. </p> </div>';
}


inyectarHeader();
inyectarFooter();
