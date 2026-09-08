function inyectarHeader(){
  document.getElementById("header").innerHTML = `
    <a href="https://rayen-beltran.github.io/Veterinaria-Pokemon/index.htm">
      <img src="https://rayen-beltran.github.io/Veterinaria-Pokemon/imagenes/logoPoke" alt="Logo Veterinaria" class="logo">
    </a>
    <h1 class="no-select">Veterinaria Huellitas</h1>
    <section>
      <a href="https://rayen-beltran.github.io/Veterinaria-Pokemon/index.html">Inicio</a>
      <a href="https://rayen-beltran.github.io/Veterinaria-Pokemon/paginas/nosotros.html">Nosotros</a>
      <a href="https://rayen-beltran.github.io/Veterinaria-Pokemon/paginas/productos.html">Productos</a>
      <a href="https://rayen-beltran.github.io/Veterinaria-Pokemon/paginas/blogs.html">Blog</a>
    </section>
    <section>
      <a href="https://rayen-beltran.github.io/Veterinaria-Pokemon/paginas/registroEntrenador.html">Registrate</a>
      <a href="https://rayen-beltran.github.io/Veterinaria-Pokemon/paginas/inicioSesion.html">Iniciar Sesion</a>
    </section> `;
}

function inyectarFooter(){
  document.getElementById("footer").innerHTML = `
    <div class="caluga">
      <p>Veterinaria Huellitas - Cuidando pokemones desde 1996</p>
      <p>© 2026 Veterinaria Huellitas. Todos los derechos reservados.</p>
    </div> `;
}


inyectarHeader();
inyectarFooter();
