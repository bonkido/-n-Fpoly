gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();

tl.to(".wrapper",5,{x:-window.innerWidth})
.from(".section2 .products",15,{opacity:0,scale:4, skewX:50})

// hiệu ứng về admin 
.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 h2",5,{opacity:0,scale:5, skewX:50})
// end hiệu ứng admin

// giới thiệu về bản thân section3
.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .hr0",2,{opacity:0,scale:5, skewX:50})
.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .hr",1,{opacity:0,scale:1, skewX:10})

.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .hr6",2,{opacity:0,scale:5, skewX:50})
.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .hr5",1,{opacity:0,scale:1, skewX:10})

.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .hr2",1,{opacity:0,})
.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .hr1",1,{opacity:0,scale:1, skewX:10})
.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .hr3",1,{opacity:0,scale:1,})
.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .hr4",1,{opacity:0,scale:1, skewX:10})

// end giới thiệu về bản thân 

.to(".wrapper",5,{x:-window.innerWidth*2})
.from(".section3 .logo",5,{opacity:0,scale:3, skewX:50})

// section4

.to(".wrapper",5,{x:-window.innerWidth*3})
.from(".section4 .content2",15,{opacity:0,scale:3, skewY:50})

.to(".wrapper",5,{x:-window.innerWidth*3})
.from(".section4 .content3",15,{opacity:0,scale:3, skewY:50})

.to(".wrapper",5,{x:-window.innerWidth*3})
.from(".section4 .content4",15,{opacity:0,scale:5})

.to(".wrapper",5,{x:-window.innerWidth*3})
.from(".section4 .content5",15,{opacity:0,scale:3})
// end section4

// section 5
.to(".wrapper",5,{x:-window.innerWidth*4})
.from(".section5 .box1-stc5",5,{opacity:0,scale:4})
.to(".wrapper",5,{x:-window.innerWidth*4})
.from(".section5 .box2-stc5",5,{opacity:0,scale:4})
.to(".wrapper",5,{x:-window.innerWidth*4})
.from(".section5 .box3-stc5",5,{opacity:0,scale:4})
.to(".wrapper",5,{x:-window.innerWidth*4})
.from(".section5 .box4-stc5",5,{opacity:0,scale:4})



ScrollTrigger.create({
   animation:tl,
   trigger: ".wrapper",
   start:"center center",
   end:"+=5000",
   scrub:true,
   pin:true,
})
