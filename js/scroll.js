const btn = document.querySelector('.top');

btn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})
const btn1 = document.querySelector('.arrowUp');
btn1.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
})

const btn2 = document.querySelector('.btnEtudes');
btn2.addEventListener('click', () => {
    if (window.innerWidth > 830) {
        window.scrollTo({
            top: 1450,
            left: 0,
            behavior: "smooth"
        
        })
    } else {
        if (window.innerWidth > 400) {
            window.scrollTo({
                top: 1900,
                left: 0,
                behavior: "smooth"
            })
        }
    else {
        window.scrollTo({
            top: 2050,
            left: 0,
            behavior: "smooth"
        })
    }
}
    
    }  
)

const btn3 = document.querySelector('.btnProjets');
btn3.addEventListener('click', () => {
        if (window.innerWidth > 830) {
            window.scrollTo({
                top: 2000,
                left: 0,
                behavior: "smooth"
            })
        } else {
            if (window.innerWidth > 700) {
                window.scrollTo({
                    top: 2400,
                    left: 0,
                    behavior: "smooth"
                })
            }
            else {
                if (window.innerWidth > 575) {
                    window.scrollTo({
                        top: 2470,
                        left: 0,
                        behavior: "smooth"
                    
                    })
                
                
            }else if (window.innerWidth > 400){
                window.scrollTo({
                    top: 2550,
                    left: 0,
                    behavior: "smooth"
                })
            }else{
                window.scrollTo({
                    top: 2730,
                    left: 0,
                    behavior: "smooth"
                })
            }
        }
        }
        
        }
)