document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada! Em breve entraremos em contato.');
    this.reset();
});

// Slider de imagens na seção hero
const sliderImages = [
    'assets/imoveis.jpg',
    'assets/imoveis2.jpg',
    'assets/luxo.jpg',
    'assets/land.png'
];
let currentSlide = 0;
const sliderImg = document.getElementById('slider-img');
const dots = document.querySelectorAll('.slider-dots .dot');

function showSlide(index) {
    sliderImg.src = sliderImages[index];
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentSlide = index;
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlide(Number(dot.dataset.index));
    });
});

function nextSlide() {
    let next = (currentSlide + 1) % sliderImages.length;
    showSlide(next);
}

let sliderInterval = setInterval(nextSlide, 3000); // Troca a cada 3 segundos

// Inicia o slider ao carregar a página
showSlide(0);