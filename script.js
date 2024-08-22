// Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

document.getElementById('nextBtn').addEventListener('click', function() {
    goToNextSlide();
});

document.getElementById('prevBtn').addEventListener('click', function() {
    goToPrevSlide();
});

function updateSlidePosition() {
    for (let slide of slides) {
        slide.classList.remove('active');
        slide.classList.add('inactive');
    }
    slides[currentSlide].classList.add('active');
}

function goToNextSlide() {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    updateSlidePosition();
}

function goToPrevSlide() {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide--;
    }
    updateSlidePosition();
}

// Form Submission Logic
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const reviewText = document.getElementById('reviewText').value;

    if (reviewText.trim()) {
        const newReview = document.createElement('div');
        newReview.classList.add('carousel-item');
        newReview.textContent = `"${reviewText}" - Anonymous`;

        document.querySelector('.carousel').insertBefore(newReview, document.querySelector('.carousel-btn'));
        alert('Thank you for your review!');

        // Reset form
        document.getElementById('reviewText').value = '';

        // Add the new review to the carousel
        slides.push(newReview);
        totalSlides++;
        updateSlidePosition();
    } else {
        alert('Please enter a review before submitting.');
    }
});
