function filtrar(categoria) {
  // 1. Obtiene todas las imágenes
  const imagenes = document.querySelectorAll('.galeria .imagen');
  
  // 2. Itera sobre cada imagen
  imagenes.forEach(imagen => {
    // Si la categoría es 'todo', muestra todas las imágenes
    if (categoria === 'todo') {
      imagen.classList.remove('oculto');
    } else {
      // Si la imagen NO tiene la clase de la categoría
      if (!imagen.classList.contains(categoria)) {
        // La oculta
        imagen.classList.add('oculto');
      } else {
        // Si SÍ la tiene, la muestra
        imagen.classList.remove('oculto');
      }
    }
  });

  // 3. Actualiza el botón activo para que se vea seleccionado
  const botones = document.querySelectorAll('.btn');
  botones.forEach(btn => btn.classList.remove('active'));
  document.querySelector(`.btn[onclick="filtrar('${categoria}')"]`).classList.add('active');
}