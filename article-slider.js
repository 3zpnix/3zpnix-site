const swiperContainer = document.querySelector('.swiper-container');
const swiperSlides = document.querySelectorAll('.swiper-slide');
let currentSlideIndex = 0;

// Function to show the next slide
function showNextSlide() {
    swiperSlides[currentSlideIndex].classList.remove('active');
    currentSlideIndex = (currentSlideIndex + 1) % swiperSlides.length;
    swiperSlides[currentSlideIndex].classList.add('active');
}

// Event listener for right-to-left swipe
swiperContainer.addEventListener('touchstart', (e) => {
    const touchStartX = e.touches[0].clientX;

    swiperContainer.addEventListener('touchmove', (e) => {
        const touchMoveX = e.touches[0].clientX;
        const deltaX = touchStartX - touchMoveX;

        // Check for right-to-left swipe
        if (deltaX > 50) {
            showNextSlide();
        }
    });
});

// Initial setup
swiperSlides[currentSlideIndex].classList.add('active');
