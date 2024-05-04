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
    if (window.innerWidth > 1150) {
        window.scrollTo({
            top: 1400,
            left: 0,
            behavior: "smooth"
        });
    } else {
        if (window.innerWidth > 960) {
            window.scrollTo({
                top: 1500,
                left: 0,
                behavior: "smooth"
            });
        } else {
            if (window.innerWidth > 880) {
                window.scrollTo({
                    top: 1800,
                    left: 0,
                    behavior: "smooth"
                });
            }
            if (window.innerWidth > 830) {
                window.scrollTo({
                    top: 1750,
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                if (window.innerWidth > 700) {
                    window.scrollTo({
                        top: 2100,
                        left: 0,
                        behavior: "smooth"
                    });
                } else {
                    if (window.innerWidth > 575) {
                        window.scrollTo({
                            top: 2150,
                            left: 0,
                            behavior: "smooth"
                        });
                    } else {
                        if (window.innerWidth > 400) {
                            window.scrollTo({
                                top: 2300,
                                left: 0,
                                behavior: "smooth"
                            });
                        } else {
                            window.scrollTo({
                                top: 2400,
                                left: 0,
                                behavior: "smooth"
                            });
                        }
                    }
                }
            }
        }
    }
});


const btn3 = document.querySelector('.btnProjets');
btn3.addEventListener('click', () => {
    if (window.innerWidth > 1150) {
        window.scrollTo({
            top: 2000,
            left: 0,
            behavior: "smooth"
        });
    } else {
        if (window.innerWidth > 960) {
            window.scrollTo({
                top: 2150,
                left: 0,
                behavior: "smooth"
            });
        } else {
            if (window.innerWidth > 880) {
                window.scrollTo({
                    top: 2200,
                    left: 0,
                    behavior: "smooth"
                });
            }
            if (window.innerWidth > 830) {
                window.scrollTo({
                    top: 2300,
                    left: 0,
                    behavior: "smooth"
                });
            } else {
                if (window.innerWidth > 700) {
                    window.scrollTo({
                        top: 2650,
                        left: 0,
                        behavior: "smooth"
                    });
                } else {
                    if (window.innerWidth > 575) {
                        window.scrollTo({
                            top: 2700,
                            left: 0,
                            behavior: "smooth"
                        });
                    } else {
                        if (window.innerWidth > 480) {
                            window.scrollTo({
                                top: 2900,
                                left: 0,
                                behavior: "smooth"
                            });

                        } else {
                            window.scrollTo({
                                top: 3000,
                                left: 0,
                                behavior: "smooth"
                            });
                        }
                    }
                }
            }
        }
    }
});