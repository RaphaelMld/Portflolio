<!DOCTYPE html>
<html lang="fr">

<head>
    <title>Raphaël Malidin</title>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <link rel="icon" type="image/x-icon" href="img/logoFav.png">
    <!--[if IE]>
        <style>
            .nav-box h1{
                -webkit-text-stroke: 0.2px;
            }
        </style>
    <![endif]-->

</head>
<body>
    <div class="nav-box">
        <a href="index.php"><img src="img/logoRm.png" alt="logo" class="logo"></a>
        <h1>Raphaël Malidin</h1>  
        <div class="nav-lien">
            <div class="top">
                <p>Accueil</p>
            </div>           
            <div class="btnEtudes">
                <p>Mes Etudes</p>
            </div>
            <div class="btnProjets">
                <p>Mes Projets</p>
            </div>
        </div>
        <a id="openBtn">
            <span class="burger-icon">
                <span></span>
                <span></span>
                <span></span>
            </span>
        </a>

    </div>
    <div id= "menuHamburger" class="menuHamburger">
            <a id="closeBtn" class="close">&times;</a>
            <ul>
                <li><div class="topH"><p>Accueil</p></li>
                <li><div class="btnEtudesH"><p>Mes Etudes</p></div></li>
                <li><div class="btnProjetsH"><p>Mes Projets</p></div></li>
            </ul>
        </div>

    <div class="arrowUp">
        <img src="img/arrow_up.png"/>
    </div>


    <div class="boxPerso">
        <div class="reveal">

            <div id="boxColor">
                <div class="box-perso">

                    <img src="img/avatar.png" alt="photo" class="photo">
                    <div>
                        <h2>Qui suis-je ?</h2>
                        <p>
                            Je m'appelle Raphaël, j'ai 
                            <?php 
                            $dateNaissance = "12-11-2004";
                            $aujourdhui = date("d-m-Y");
                            $diff = date_diff(date_create($dateNaissance), date_create($aujourdhui));
                            echo $diff->format('%y'); ?> 
                            ans et je suis actuellement en seconde année de licence Informatique à l'Université de Tours. Je suis passionné par l'informatique depuis plusieurs années et je souhaite en faire mon métier. Je suis quelqu'un de très curieux et j'aime apprendre de nouvelles choses.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="espace"></div>
    <!-- <div id="boxColor"> -->
    <div class="box-competence">
        <div class="reveal">
            <h2>Mes compétences</h2>
            <div class="box-langage">
            <div id="gauche">
                <div id="boxLangage"><span>PHP </span><div class="barreComp php"><div class="barreRemp1"></div></div></div>
                <div id="boxLangage"><span>HTML/CSS</span><div class="barreComp html"></div></div>
                <div id="boxLangage"><span>Python</span><div class="barreComp py"></div></div>
                <div id="boxLangage"><span>Java</span><div class="barreComp java"></div></div>
            </div>
            <div id="droite">
                <div id="boxLangage"><span>OCaml</span><div class="barreComp ocaml"></div></div>
                <div id="boxLangage"><span>JavaScript</span><div class="barreComp js"></div></div>
                <div id="boxLangage"><span>SQL</span><div class="barreComp sql"></div></div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
    <div id="box-etudes">
        <div class="reveal">
            <h2>Mes études</h2>
            <div class="frise">
                <div id="lycee"><div id="Ping"></div><p class="TextLycee"><span>Septembre 2019 - </span>Entrée au lycée Jacques de Vaucanson - Tours</p></div>
                <div id="bac"> <div id="Ping"></div><p class="TextBac"><span>Juin 2022 - </span>Obtention du Baccalauréat Général <br>Spécialités : Mathématique et NSI <br> Mention Bien</p></div>
                <div id="fac"><div id="Ping"></div><p class="TextFac"><span>Septembre 2022 - </span>Entrée en première année de la Licence Informatique à l'Université de Tours</p></div>
                <div id="soon"><div id="Ping"></div><p class="TextSoon">Prochainement...</p></div>

            </div>
        </div>
    </div>
    <div class="box-projets">
        <div class="reveal">
            <h2>Mes projets</h2>
            <div class="projet">
                <h3>Site de Bibliotèque en ligne</h3>
                <p>Projet réalisé en groupe de cinq personnes dans le cadre de la formation. Pour tous les adeptes de lecture qui souhaitent gérer leur collection de livres, notre produit est un système de gestion de livres qui permet d'avoir à un seul endroit l'intégralité de sa collection, à la différence de nos concurrents, 
                    <span class="popBook">Bookollection</span> 
                permet de rechercher n'importe quel livre pour voir sa fiche produit, et directement aller les acheter sur d'autres sites via un lien cliquable.</p>
                <p>Le site est disponible à l'adresse suivante : <a href="https://www.bookollection.fr/">bookollection.fr</a></p>
            </div>
            <div class="projet">
                <h3>Escape Game en ligne</h3>
                <p>Projet réalisé en groupe de deux personnes pendant mon année de première. <span>Escape'Geek</span> est un site interractif, qui permet à l'utilisateur de vivre une experience immersif dans le domaine de l'informatique.</p>
            </div>
            <div class="projet">
                <h3>Portfolio personnel</h3>
                <p>Projet réalisé durant mes vacances d'été 2023, ce projet est simplement un site personnel afin de recenser quelques information à mon sujet </p>
            </div>
        </div>
    </div>

    <div class="popup-video">
        <span>&times;</span>
        <video src="img\bookollectionV.mp4" muted autoplay controls></video>
        <p>Lien vers la video : <a href="https://youtu.be/1y-9B6p1WEI" target="_blank">Bookollection</a></p>
    </div>

    <div class="reveal">
    <div class="contact">
        <h3>Me contacter </h3>
        <h3>-</h3>
            <a href="mailto:raphael.malidin@etu.univ-tours.fr" class="box-mail">
                <img src="img/mail.png" alt="mail" class="mail">
                <p>raphael.malidin@etu.univ-tours.fr</p>
            </a>
            <a href="https://www.linkedin.com/in/raphael-malidin-373669241/" class="box-linkedin" target="_blank">
                <img src="img/linkedin.png" alt="linkedin" class="linkedin">
                <p>Raphaël Malidin</p>
            </a>
        </div>
        
    </div>
    <script src='js/scroll.js'></script>

    <script src='js/popup.js'></script>    

    <script>
        const ratio = .25
        const options = {
        root: null,
        rootMargin: '0px',
        threshold : ratio
        }

        const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
            }
            
        })
        }

        document.documentElement.classList.add('reveal-loaded')

        window.addEventListener("DOMContentLoaded", function () {
        const observer = new IntersectionObserver(handleIntersect, options)
        const targets = document.querySelectorAll('.reveal')
        targets.forEach(function (target) {
            observer.observe(target)
        })
        })

    </script>

    <script>
        var menuHamburger = document.getElementById("menuHamburger");
        var openBtn = document.getElementById("openBtn");
        var closeBtn = document.getElementById("closeBtn");

        openBtn.onclick = openNav;
        closeBtn.onclick = closeNav;

        /* Set the width of the side navigation to 250px */
        function openNav() {
        menuHamburger.classList.add("active");
        }

        /* Set the width of the side navigation to 0 */
        function closeNav() {
        menuHamburger.classList.remove("active");
        }

        var topH = document.querySelector(".topH");
        var btnEtudesH = document.querySelector(".btnEtudesH");

        topH.addEventListener('click', () => {
            window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })            
            menuHamburger.classList.remove("active");
        })

        btnEtudesH.addEventListener('click', () => {
            window.scrollTo({
            top: 2050,
            left: 0,
            behavior: "smooth"
        })
            menuHamburger.classList.remove("active");
        })

        btnProjetsH.addEventListener('click', () => {
            window.scrollTo({
            top: 2730,
            left: 0,
            behavior: "smooth"
        })
            menuHamburger.classList.remove("active");
        })
    </script>



</body>
</html>
