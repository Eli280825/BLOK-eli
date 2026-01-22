// Puedes agregar lógica JavaScript aquí para el formulario de actualización
let currentSlide = 0; 
const slides = document.querySelectorAll('.carousel-inner'); 
function showSlide(n) { 
slides.forEach(slide => { 
slide.style.transform = `translateX(-${n * 100}%)`; 
}); 
} 
function nextSlide() { 
currentSlide = (currentSlide + 1) % slides.length; 
showSlide(currentSlide); 
} 
function prevSlide() { 
currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
showSlide(currentSlide); 
} 
// Inicializar el carrusel 
showSlide(currentSlide);