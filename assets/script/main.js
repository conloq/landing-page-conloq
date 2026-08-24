const initMashLanding = () => {
    const tiltBlocks = document.querySelectorAll('.td-block-sobre-conloq');
    const carousel = document.querySelector('.Div-Carrousel-Img-Sobre-cerveja');
    const carouselViewport = document.querySelector('.carrousel-article-cerveja');
    const screenButtons = document.querySelectorAll('.bolinhas-container button');
    const imageContainer = document.querySelector('.Div-Img-Sobre-mash');

    tiltBlocks.forEach((block) => {
        block.addEventListener('mousemove', (event) => {
            const rect = block.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
            const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
            block.style.transform = `rotateX(${y * -20}deg) rotateY(${x * 20}deg) scale(1.05)`;
        });
        block.addEventListener('mouseleave', () => {
            block.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        });
    });

    if (carousel && carouselViewport) {
        const slides = Array.from(carousel.querySelectorAll(':scope > figure'));

        let currentIndex = 0;
        let autoplayId;

        const showSlide = (index) => {
            currentIndex = (index + slides.length) % slides.length;
            carouselViewport.scrollTo({ left: slides[currentIndex].offsetLeft, behavior: 'smooth' });
        };

        const startAutoplay = () => {
            window.clearInterval(autoplayId);
            autoplayId = window.setInterval(() => showSlide(currentIndex + 1), 4000);
        };

        carouselViewport.addEventListener('mouseenter', () => window.clearInterval(autoplayId));
        carouselViewport.addEventListener('mouseleave', startAutoplay);
        carouselViewport.addEventListener('focusin', () => window.clearInterval(autoplayId));
        carouselViewport.addEventListener('focusout', startAutoplay);
        startAutoplay();
    }

    const setActiveScreen = (targetId) => {
        if (!imageContainer || !targetId) return;
        const targetButton = Array.from(screenButtons).find((button) => button.dataset.target === targetId);
        if (!targetButton) return;
        screenButtons.forEach((button) => {
            const active = button === targetButton;
            const figure = document.getElementById(button.getAttribute('aria-controls'));
            button.classList.toggle('bolinha-ativa', active);
            button.classList.toggle('bolinha-padrao', !active);
            button.setAttribute('aria-selected', String(active));
            button.tabIndex = active ? 0 : -1;
            if (figure) figure.setAttribute('aria-hidden', String(!active));
        });
        imageContainer.classList.toggle('swap', targetId === 'img2');
    };

    screenButtons.forEach((button, index) => {
        button.addEventListener('click', () => setActiveScreen(button.dataset.target));
        button.addEventListener('keydown', (event) => {
            if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(event.key)) return;
            event.preventDefault();
            const offset = event.key === 'ArrowRight' || event.key === 'ArrowDown' ? 1 : -1;
            const nextButton = screenButtons[(index + offset + screenButtons.length) % screenButtons.length];
            nextButton.focus();
            setActiveScreen(nextButton.dataset.target);
        });
    });

    if (screenButtons.length) setActiveScreen(screenButtons[0].dataset.target);
};

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMashLanding, { once: true });
} else {
    initMashLanding();
}
