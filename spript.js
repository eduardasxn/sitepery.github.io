let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Muda de imagem a cada 4 segundos
}

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    const imageWidth = images[0].clientWidth;

    currentIndex += direction;

    // Se o índice atual estiver fora dos limites, volte para o início ou para o fim
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    const offset = -currentIndex * imageWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}