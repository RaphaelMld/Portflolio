window.addEventListener('load', () => {
    let imagesContainer = document.getElementById('iconBackground');
    let windowWidth = window.innerWidth;
    let windowHeight = window.innerHeight;
    let imageCount;
    let imagePath = 'img/large/';
    let imagePositions = [];



    function updateImageCount() {
        if (windowWidth > 1200) {
            imageCount = 6;
        } else if (windowWidth > 800) {
            imageCount = 4;
        } else {
            imageCount = 2;
        }
    }

    function placeImages() {
        imagesContainer.innerHTML = '';
        imagePositions = [];
        const contientImage = [];

        for (let i = 1; i <= imageCount; i++) {
            let nombreAleatoire = Math.floor(Math.random() * 12) + 1;

            while (contientImage.includes(nombreAleatoire)) {
                nombreAleatoire = Math.floor(Math.random() * 12) + 1;
            }

            contientImage.push(nombreAleatoire);
            const img = document.createElement('img');
            img.src = imagePath + 'image' + nombreAleatoire + '.svg';

            let randomX, randomY;
            do {
                randomX = Math.random() * (windowWidth - 200);
                randomY = Math.random() * (windowHeight - 200);
            } while (collisionDetected(randomX, randomY));

            imagePositions.push({ x: randomX, y: randomY });

            img.style.left = randomX + 'px';
            img.style.top = randomY + 'px';
            img.classList.add('imageR');

            imagesContainer.appendChild(img);
        }
    }

    function collisionDetected(x, y) {
        for (const position of imagePositions) {
            const otherX = position.x;
            const otherY = position.y;
            const distance = Math.sqrt((x - otherX) ** 2 + (y - otherY) ** 2);
            if (distance < 400) {
                return true;
            }
        }
        return false;
    }

    updateImageCount();
    placeImages();

    });
