const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  


var tl =gsap.timeline()

.from(".card",{
    opacity:0,
    y:100,
    delay:.5

})

.from(".card img",{
    opacity:0,
    y:100,
     delay:1
})
.from(".card h3",{
    opacity:0,
    y:100,
    duration:1,
    delay:1
})
.from(".img",{
    opacity:0,
    y:200,
    duration:1,
    delay:1
})
.from(".boxa",{
    opacity:0,
    duration:1,
    delay:1
})
.from(".boxa h1",{
    opacity:0,
    y:200
})
.from(".boxa h2",{
    opacity:0,
    y:200
})

gsap.from(".box2",{
   opacity:0,
    y:200,
    scrollTrigger:{
        scroller:"body",
        trigger:".box2",
        markers:false,
        start:"top 90%"
    }
})
gsap.from(".box2 .middle",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box2 ",
         markers:false,
         start:"top 60%"
     }
 })
 gsap.from(".box2 .images",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box2 .middle",
         markers:false,
         start:"top 90%"
     }
 })

 gsap.from(".box2 .middle2",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box2 .middle2",
         markers:false,
         start:"top 155%"
     }
 })
 gsap.from(".box2 .middle2 h1",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box2 .middle2 h1",
         markers:false,
         start:"top 160%"
     }
 })
 gsap.from(".box2 .middle2 h2",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box2 .middle2 h2",
         markers:false,
         start:"top 170%"
     }
 })
 gsap.from(".box3  h1",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box3 h1",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box3  p",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box3 p",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box3  .upi",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box3 .upi",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box3  .headline",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box3 .headline",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box3  .swiper",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box3 .swiper",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box4",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box4",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box4 .b4img",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box4 .b4img",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box4 .b4center",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box4 .b4center",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box5",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box5",
         markers:false,
         start:"top 100%"
     }
 })

 gsap.from(".box5 img",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box5 img",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box6 ",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box6",
         markers:false,
         start:"top 100%"
     }
 })

 gsap.from(".box6 .banks",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box6 .banks",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box6 .bhim",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box6 .bhim",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box6 .b6bottom",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box6 .b6bottom",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box7",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box7",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box7 .animation",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box7 .animation",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box7 .b7last",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box7 .b7last",
         markers:false,
         start:"top 100%"
     }
 })
 gsap.from(".box8",{
    opacity:0,
     y:200,
     scrollTrigger:{
         scroller:"body",
         trigger:".box8",
         markers:false,
         start:"top 100%"
     }
 })
