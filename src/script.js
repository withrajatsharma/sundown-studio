
const isTouchDevice = 'ontouchstart' in window;

if (!isTouchDevice) {
 
(()=>{

    document.querySelector('#cursor').style.display="block";

    const cursor = new MouseFollower({
        el : "#cursor",
    });


        
    
    const hideOver = document.querySelectorAll('[hideOver]');
    
    
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

