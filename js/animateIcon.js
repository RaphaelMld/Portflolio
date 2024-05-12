let images; // Déclarez la variable images dans une portée plus large

if (document.readyState === 'complete') {
    runCode();
} else {
    document.addEventListener('DOMContentLoaded', runCode);
}

function runCode() {
    console.log("animate");

    images = document.querySelectorAll('.imageR');
    console.log(images);

    let speedFactors = []; 

    images.forEach((image, index) => {
        speedFactors[index] = 2; 
    });

    setInterval(levitate, 2000);
}

function levitate() {
    images.forEach((image, index) => {
        console.log(image);
        console.log("index");
        const randomX = (Math.random() * 10 - 5) * speedFactors[index]; 
        const randomY = (Math.random() * 10 - 5) * speedFactors[index]; 

        image.style.transform = `translate(-50%, -50%) translate(${randomX}px, ${randomY}px)`;

        speedFactors[index] += (Math.random() - 0.5) * 0.2; 

        speedFactors[index] = Math.max(1, Math.min(3, speedFactors[index])); 
    });
}
