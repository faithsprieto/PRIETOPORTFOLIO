/* =========================
   MOBILE HAMBURGER MENU
========================= */

function toggleMenu() {
    const nav = document.querySelector(".navbar nav");

    nav.classList.toggle("active");
}

/* =========================================================
   WEBINAR CERTIFICATE CAROUSEL
   ========================================================= */

let currentCertPage = 0;

function getCardsPerPage() {

    if (window.innerWidth <= 600) {
        return 1;
    } else if (window.innerWidth <= 1000) {
        return 2;
    } else {
        return 5;
    }

}

function moveCerts(direction) {

    const track = document.getElementById("certTrack");
    const cards = document.querySelectorAll(".webinarcert");

    if (!track || cards.length === 0) {
        return;
    }

    const cardsPerPage = getCardsPerPage();
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    currentCertPage += direction;

    if (currentCertPage < 0) {
        currentCertPage = 0;
    }

    if (currentCertPage >= totalPages) {
        currentCertPage = totalPages - 1;
    }

    const cardWidth = cards[0].offsetWidth;
    const gap = 10;

    const moveAmount =
        currentCertPage *
        (cardsPerPage * cardWidth + (cardsPerPage - 1) * gap);

    track.style.transform = `translateX(-${moveAmount}px)`;

    updateCertButtons(totalPages);
}

function updateCertButtons(totalPages) {

    const prevButton = document.querySelector(".cert-prev");
    const nextButton = document.querySelector(".cert-next");

    if (!prevButton || !nextButton) {
        return;
    }

    prevButton.disabled = currentCertPage === 0;
    nextButton.disabled = currentCertPage === totalPages - 1;
}


/* =========================================================
   COMIC CAROUSEL
   ========================================================= */

let currentComicPage = 0;

function getComicCardsPerPage() {

    if (window.innerWidth <= 500) {
        return 1;
    } else if (window.innerWidth <= 1000) {
        return 2;
    } else {
        return 5;
    }

}

function moveComic(direction) {

    const track = document.getElementById("comicTrack");
    const cards = document.querySelectorAll(".pubwork-comic-item");

    if (!track || cards.length === 0) {
        return;
    }

    const cardsPerPage = getComicCardsPerPage();
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    currentComicPage += direction;

    if (currentComicPage < 0) {
        currentComicPage = 0;
    }

    if (currentComicPage >= totalPages) {
        currentComicPage = totalPages - 1;
    }

    const cardWidth = cards[0].offsetWidth;
    const gap = 10;

    const moveAmount =
        currentComicPage *
        (cardsPerPage * cardWidth + (cardsPerPage - 1) * gap);

    track.style.transform = `translateX(-${moveAmount}px)`;

    updateComicButtons(totalPages);
}

function updateComicButtons(totalPages) {

    const prevButton = document.querySelector(".comic-prev");
    const nextButton = document.querySelector(".comic-next");

    if (!prevButton || !nextButton) {
        return;
    }

    prevButton.disabled = currentComicPage === 0;
    nextButton.disabled = currentComicPage === totalPages - 1;
}


/* =========================================================
   NAVBAR
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navbar = document.querySelector(".navbar");
    const header = document.querySelector("header");

    if (navbar && header) {

        window.addEventListener("scroll", function () {

            const headerBottom =
                header.offsetTop + header.offsetHeight;

            if (window.scrollY >= headerBottom) {
                navbar.classList.add("show");
            } else {
                navbar.classList.remove("show");
            }

        });

    }


    /* =====================================================
       BACK TO TOP
       ===================================================== */

    const backToTop = document.getElementById("backToTop");

    if (backToTop) {

        backToTop.addEventListener("click", function () {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        });

    }


    /* =====================================================
       NAVBAR BUTTONS
       ===================================================== */

    const skillsBtn = document.getElementById("skillsBtn");

    if (skillsBtn) {

        skillsBtn.addEventListener("click", function () {

            const section = document.getElementById("skills");

            if (section) {

                window.scrollTo({
                    top: section.offsetTop - 100,
                    behavior: "smooth"
                });

            }

        });

    }


    const projectsBtn = document.getElementById("projectsBtn");

    if (projectsBtn) {

        projectsBtn.addEventListener("click", function () {

            const section = document.getElementById("projects");

            if (section) {

                window.scrollTo({
                    top: section.offsetTop - 100,
                    behavior: "smooth"
                });

            }

        });

    }


    const certificationsBtn =
        document.getElementById("certificationsBtn");

    if (certificationsBtn) {

        certificationsBtn.addEventListener("click", function () {

            const section =
                document.getElementById("certifications");

            if (section) {

                window.scrollTo({
                    top: section.offsetTop - 100,
                    behavior: "smooth"
                });

            }

        });

    }


    const otherWorksBtn =
        document.getElementById("otherWorksBtn");

    if (otherWorksBtn) {

        otherWorksBtn.addEventListener("click", function () {

            const section =
                document.getElementById("other-works");

            if (section) {

                window.scrollTo({
                    top: section.offsetTop - 100,
                    behavior: "smooth"
                });

            }

        });

    }


    /* =====================================================
       INITIALIZE WEBINAR CERTIFICATE CAROUSEL
       ===================================================== */

    const certCards =
        document.querySelectorAll(".webinarcert");

    if (certCards.length > 0) {

        const cardsPerPage = getCardsPerPage();
        const totalPages =
            Math.ceil(certCards.length / cardsPerPage);

        updateCertButtons(totalPages);

    }


    /* =====================================================
       INITIALIZE COMIC CAROUSEL
       ===================================================== */

    const comicCards =
        document.querySelectorAll(".pubwork-comic-item");

    if (comicCards.length > 0) {

        const cardsPerPage =
            getComicCardsPerPage();

        const totalPages =
            Math.ceil(comicCards.length / cardsPerPage);

        updateComicButtons(totalPages);

    }

});


/* =========================================================
   RESET CAROUSELS WHEN WINDOW IS RESIZED
   ========================================================= */

window.addEventListener("resize", function () {

    /* WEBINAR CERTIFICATES */

    const certTrack = document.getElementById("certTrack");
    const certCards = document.querySelectorAll(".webinarcert");

    if (certTrack && certCards.length > 0) {

        currentCertPage = 0;
        certTrack.style.transform = "translateX(0)";

        const cardsPerPage = getCardsPerPage();
        const totalPages =
            Math.ceil(certCards.length / cardsPerPage);

        updateCertButtons(totalPages);

    }


    /* COMICS */

    const comicTrack = document.getElementById("comicTrack");
    const comicCards =
        document.querySelectorAll(".pubwork-comic-item");

    if (comicTrack && comicCards.length > 0) {

        currentComicPage = 0;
        comicTrack.style.transform = "translateX(0)";

        const cardsPerPage =
            getComicCardsPerPage();

        const totalPages =
            Math.ceil(comicCards.length / cardsPerPage);

        updateComicButtons(totalPages);

    }

});