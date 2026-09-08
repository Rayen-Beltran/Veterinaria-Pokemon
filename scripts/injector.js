function inyectarHeader(){
  document.getElementById("header").innerHTML = '<a href="/index.html" <img src="https://yt3.googleusercontent.com/ytc/AIdro_lUdOZuGBEOWyjiFl4M273jIjl_LObZoJJlVqd5mYdp4vA=s900-c-k-c0x00ffffff-no-rj" alt="Logo Veterinaria" class="logo">><h1 class= "no-select"> Veterinaria Huellitas</h1><section> <a href="/index.html">Inicio</a> <a href="/paginas/nosotros.html">Nosotros</a> <a href="/paginas/productos.html">Productos</a> <a href="/paginas/blogs.html">Blog</a></section> <section> <a href="/paginas/registroEntrenador.html">Registrate</a> <a href="/paginas/inicioSesion.html">Iniciar Sesion</a> </section>';

}

function inyectarFooter(){
    document.getElementById("footer").innerHTML = '<div class="caluga"> <p>     Veterinaria Huellitas - Cuidando pokemones desde 1996 </p> <p>     © 2026 Veterinaria Huellitas. Todos los derechos reservados. </p> </div>';
}


inyectarHeader();
inyectarFooter();
