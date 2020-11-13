import Glide from '@glidejs/glide/dist/glide.min.js'

new Glide('#glide__bridesmaids', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    focusAt: 'center',
    gap: 20,
    autoplay: 4000,
    hoverpause: false,
    keyboard: true,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: false,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 2000,
    peek: 0,
    breakpoints: {
        850: {
            perView: 3
        },
        600: {
            perView: 2
        }
    }
}).mount()

new Glide('#glide__groomsmen', {
    type: 'carousel',
    startAt: 0,
    perView: 4,
    focusAt: 'center',
    gap: 20,
    autoplay: 4000,
    hoverpause: false,
    keyboard: true,
    swipeThreshold: 80,
    dragThreshold: 120,
    perTouch: false,
    touchRatio: 0.5,
    touchAngle: 45,
    animationDuration: 2000,
    peek: 0,
    breakpoints: {
        850: {
            perView: 3
        },
        600: {
            perView: 2
        }
    }
}).mount()

