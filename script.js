var tl = gsap.timeline();

tl.from('#circle',{
    scaleX: 1.5, 
    scaleY: 1.5,
    x:500,
    opacity: 0,
    duration:3,
     backgroundColor: "red", 
     ease: Back.easeOut.config(1.9)

})
tl.from('.st',{
    stagger:.2,
    x:-500,
    duration:3,
    opacity:0,
    ease: Back.easeOut.config(1.9)
    
    
})
tl.from('#lbtm',{
    stagger:.2,
    x:-500,
    duration:1,
    opacity:0,
    ease:'Expo.easeInOut'
})
tl.from('.kk',{
    stagger:.2,
    x:-500,
    duration:1,
    opacity:0,
    // ease:'Expo.easeInOut'
    // ease: "power2.out"
    ease: "circ.out"
})
tl.from('#bottom',{
    stagger:.2,
    x:500,
    duration:1,
    opacity:0,
    ease:'Expo.easeInOut'
})
tl.from('.dd',{
    stagger:.2,
    x:500,
    duration:1,
    opacity:0,
    // ease:'Expo.easeInOut'
    ease: "circ.out"

})