document.querySelectorAll('.muke-carousel').forEach(container => {
    const slides = container.querySelectorAll('.muke-carousel-slide');
    const indicators = container.querySelectorAll('.muke-carousel-indicator');
    let currentIndex = 0;
    let autoPlayInterval = setInterval(nextSlide, 3000); // 每3秒自动切换
    
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('muke-carousel-active', i === index);
            indicators[i].classList.toggle('muke-carousel-in-active', i === index);
        });
        container.querySelector('.muke-carousel-slides').style.transform = `translateX(-${index * 100}%)`;
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }
    
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
            resetInterval();
        });
    });
    
    function resetInterval() {
        clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(nextSlide, 3000);
    }
})
