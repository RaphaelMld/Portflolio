window.addEventListener('DOMContentLoaded', async () => {
    

    const imagesContainer = document.getElementById('iconBackground');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let imageCount;
    let imagePath = 'img/large/';
    let ecartImage = 400;

    function updateImageCount() {
        if (windowWidth > 1200) {
            imageCount = 6;
        } else if (windowWidth > 800) {
            imageCount = 4;
        } else {
            imageCount = 3;
            ecartImage = 300;
        }
    }

    async function fetchImages() {
        const imagePromises = [];
        for (let i = 1; i <= 12; i++) {
            imagePromises.push(fetch(`${imagePath}image${i}.svg`).then(response => response.blob()));
        }
        return await Promise.all(imagePromises);
    }

    function placeImages(images) {
        imagesContainer.innerHTML = '';
        const imagePositions = [];
        const contientImage = [];

        for (let i = 0; i < imageCount; i++) {
            let nombreAleatoire = Math.floor(Math.random() * 12);
            while (contientImage.includes(nombreAleatoire)) {
                nombreAleatoire = Math.floor(Math.random() * 12);
            }
            contientImage.push(nombreAleatoire);

            const img = document.createElement('img');
            img.src = URL.createObjectURL(images[nombreAleatoire]);

            let randomX, randomY;
            do {
                randomX = Math.random() * (windowWidth - 200);
                randomY = Math.random() * (windowHeight - 200);
            } while (collisionDetected(randomX, randomY, imagePositions));

            imagePositions.push({ x: randomX, y: randomY });

            img.style.left = randomX + 'px';
            img.style.top = randomY + 'px';
            img.classList.add('imageR');

            imagesContainer.appendChild(img);
        }
    }

    function collisionDetected(x, y, imagePositions) {
        for (const position of imagePositions) {
            const otherX = position.x;
            const otherY = position.y;
            const distance = Math.sqrt((x - otherX) ** 2 + (y - otherY) ** 2);
            if (distance < ecartImage) {
                return true;
            }
        }
        return false;
    }

    updateImageCount();
    const images = await fetchImages();
    placeImages(images);
    
});
