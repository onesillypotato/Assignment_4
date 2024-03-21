gsap.registerPlugin(ScrollTrigger)


// Glide Carousel
const config = {
  type:'carousel',
  perView:3,
  gap: '250px'
};
new Glide('.glide', config).mount()
// Glide Carousel




// animated Gradient
var granimInstance = new Granim({
    element: '#logo-canvas',
    direction: 'left-right',
    states : {
        "default-state": {
            gradients: [
                ['#000000', '#495530'],
                ['#989898', '#616447'],
                ['#272e1a', '#868a62'],
                ['#4c4c4c', '#d0d698'],
                ['#ffffff', '#495530'],
                ['#495530', '#1c2218']
            ],
            transitionSpeed: 2000
        }
    }
});
// animated Gradient









// GSOP Scroll Reveal Text






// Lenis Smooth Scroll
const lenis = new Lenis()
lenis.on('scroll', (e)=>{
    // console.log(e)
})

function raf(time){
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
// Lenis Smooth Scroll























gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {
    const text = new SplitType(char, { types: 'chars'})

    gsap.from(text.chars, {
        scrollTrigger: {
            trigger: char,
            start: 'top 80%',
            end: 'top 20%',
            scrub: true,
            markers: false,
            toggleActions: 'play play reverse reverse'
        },
        opacity:0.2,
        stagger:0.1
    })
})
