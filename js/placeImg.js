window.addEventListener('load', () => {
    let imagesContainer = document.getElementById('iconBackground');
    let windowWidth = window.innerWidth;
    let imageCount;
    let imagePath = 'img/large/';


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
        const imagePositions = [];
        contientImage = [];
        let nombreAleatoire=Math.floor(Math.random() * 12) + 1;;

        for (let i = 1; i <= imageCount; i++) {
            while (contientImage.includes(nombreAleatoire) != false) {
                nombreAleatoire = Math.floor(Math.random() * 12) + 1;
            }
            contientImage.push(nombreAleatoire);
            const img = document.createElement('img');
            img.src = imagePath + 'image' + nombreAleatoire + '.svg'; 

            let randomX, randomY;
            do {
                randomX = Math.random() * (windowWidth - 200); 
                randomY = Math.random() * (window.innerHeight - 200); 
            } while (collisionDetected(randomX, randomY, imagePositions));

            imagePositions.push({ x: randomX, y: randomY });

            img.style.left = randomX + 'px';
            img.style.top = randomY + 'px';
            img.classList.add('imageR');

            imagesContainer.appendChild(img);
        }
    }

    function collisionDetected(x, y, imagePositions) {
        for (let i = 0; i < imagePositions.length; i++) {
            const otherX = imagePositions[i].x;
            const otherY = imagePositions[i].y;
            const distance = Math.sqrt((x - otherX) ** 2 + (y - otherY) ** 2);
            if (distance < 400) { 
                return true; 
            }
        }
        return false; 
    }

    updateImageCount();
    placeImages();


    window.addEventListener('resize', () => {
        windowWidth = window.innerWidth;
        windowHeight = window.innerHeight;
        updateImageCount();
    
        // Placer les images aléatoirement sur la page
        for (let i = 1; i <= imageCount; i++) {
            // Générer une nouvelle position aléatoire pour l'image
            let randomX, randomY;
            do {
                randomX = Math.random() * (windowWidth - 200); // Calculer une position aléatoire en X
                randomY = Math.random() * (windowHeight - 200); // Calculer une position aléatoire en Y
            } while (collisionDetected(randomX, randomY, imagePositions));
    
            // Vérifier si l'image dépasse les limites de la fenêtre
            if (randomX + 200 > windowWidth) {
                randomX = windowWidth - 200; // Ajuster la position X pour que l'image reste entièrement visible
            }
            if (randomY + 200 > windowHeight) {
                randomY = windowHeight - 200; // Ajuster la position Y pour que l'image reste entièrement visible
            }
    
            // Stocker la position de cette image pour éviter les collisions
            imagePositions.push({ x: randomX, y: randomY });
    
            // Définir la position de l'image
            const img = document.createElement('img');
            img.src = imagePath + 'image' + i + '.svg'; // Assurez-vous d'adapter cela à votre structure de fichiers
            img.style.left = randomX + 'px';
            img.style.top = randomY + 'px';
            img.classList.add('imageR');
    
            imagesContainer.appendChild(img);
        }
    });
    
    
    
    
});
