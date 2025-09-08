document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Elimina la clase 'active' de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agrega la clase 'active' al botón que se hizo clic
            button.classList.add('active');

            const category = button.getAttribute('data-category');

            // Oculta todas las galerías
            galleryItems.forEach(item => item.classList.add('hidden'));

            // Muestra solo la galería de la categoría seleccionada
            const selectedGallery = document.querySelector(".gallery-item");
            if (selectedGallery) {
                selectedGallery.classList.remove('hidden');
            }
        });
    });
});