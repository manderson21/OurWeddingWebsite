const slideshow = document.getElementById('carousel')
const slides = document.querySelectorAll('.carousel__slide')

let index = 1
let time = 5000
let slideInterval

function cycleSlides() {
    slides[index].scrollIntoView()
    index++
    if (index === slides.length) index = 0
}

function pauseSlide() {
    clearInterval(slideInterval)
}

function playSlides() {
    slideInterval = setInterval(cycleSlides, time)
}

window.onload = function () {
    slideInterval = setInterval(cycleSlides, time)
}

slideshow.onmouseover = pauseSlide
slideshow.onmouseleave = playSlides
