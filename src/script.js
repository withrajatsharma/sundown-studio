
const isTouchDevice = 'ontouchstart' in window;

if (!isTouchDevice) {
 
(()=>{
       
    
    const hideOver = document.querySelectorAll('[hideOver]');

    window.addEventListener("mousemove" ,(e)=>{
        gsap.to("#cursor",{
            x:e.x,
            y:e.y,
            duration:1,
            ease: "back.out"
        })
    } )
    
    
    document.addEventListener('mouseenter', () => {
        
        gsap.to("#cursor",{
            scale:1,
            
        })
    });
    
    document.addEventListener('mouseleave', () => {
        gsap.to("#cursor",{
            scale:0,
        })
    });
    
    hideOver.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            gsap.to("#cursor",{
                scale:0,
            })
        });
        
        elem.addEventListener('mouseleave', () => {
            gsap.to("#cursor",{
                scale:1,
            })
        });
    })
})();  



}

