import Glide from '@glidejs/glide/dist/glide.min.js'

new Glide('.glide', {
    type: 'carousel',
    startAt: 0,
    perView: 1,
    focusAt: 0,
    gap: 5,
    autoplay: 5000,
    hoverpause: true,
    keyboard: true,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: false,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 2000,
    peek: 0
}).mount()
