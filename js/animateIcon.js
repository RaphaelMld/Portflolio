window.addEventListener('load', () => {
    const images = document.querySelectorAll('.imageR');
    let speedFactors = []; 

    images.forEach((image, index) => {
        speedFactors[index] = 2; 
    });

    function levitate() {
        images.forEach((image, index) => {
            const randomX = (Math.random() * 10 - 5) * speedFactors[index]; 
            const randomY = (Math.random() * 10 - 5) * speedFactors[index]; 

            image.style.transform = `translate(-50%, -50%) translate(${randomX}px, ${randomY}px)`;

            speedFactors[index] += (Math.random() - 0.5) * 0.2; 

            speedFactors[index] = Math.max(1, Math.min(3, speedFactors[index])); 
        });
    }

    setInterval(levitate, 2000);
});