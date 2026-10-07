/* =========================
   SHARED CAROUSEL HELPERS
========================= */

function cardsPerPage() {
    if (window.innerWidth <= 500) return 1;
    if (window.innerWidth <= 1000) return 2;
    return 5;
}

function moveCarousel(trackId, itemSelector, prevSelector, nextSelector, state, direction) {
    const track = document.getElementById(trackId);
    const cards = document.querySelectorAll(itemSelector);
    if (!track || cards.length === 0) return;

    const perPage = cardsPerPage();
    const totalPages = Math.ceil(cards.length / perPage);
    state.page += direction;
    state.page = Math.max(0, Math.min(state.page, totalPages - 1));

    const cardWidth = cards[0].offsetWidth;
    const gap = 10;
    const moveAmount = state.page * (perPage * cardWidth + (perPage - 1) * gap);
    track.style.transform = `translateX(-${moveAmount}px)`;

    const prev = document.querySelector(prevSelector);
    const next = document.querySelector(nextSelector);
    if (prev) prev.disabled = state.page === 0;
    if (next) next.disabled = state.page === totalPages - 1;
}

function resetCarousel(trackId, itemSelector, prevSelector, nextSelector, state) {
    const track = document.getElementById(trackId);
    const cards = document.querySelectorAll(itemSelector);
    if (!track || cards.length === 0) return;

    state.page = 0;
    track.style.transform = 'translateX(0)';

    const totalPages = Math.ceil(cards.length / cardsPerPage());
    const prev = document.querySelector(prevSelector);
    const next = document.querySelector(nextSelector);
    if (prev) prev.disabled = true;
    if (next) next.disabled = totalPages <= 1;
}

const certState = { page: 0 };
const comicState = { page: 0 };
const newsState = { page: 0 };
const dailyState = { page: 0 };

function moveCerts(direction) {
    moveCarousel('certTrack', '.webinarcert', '.cert-prev', '.cert-next', certState, direction);
}

function moveComic(direction) {
    moveCarousel('comicTrack', '.pubwork-comic-item', '.comic-prev', '.comic-next', comicState, direction);
}

function moveNews(direction) {
    moveCarousel('newsTrack', '.pubwork-news-item', '.news-prev', '.news-next', newsState, direction);
}

function moveDaily(direction) {
    moveCarousel('dailyTrack', '.pubwork-daily-item', '.daily-prev', '.daily-next', dailyState, direction);
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
       INITIALIZE WRITER & PHOTOGRAPHER CAROUSEL
       ===================================================== */

    const newsCards =
        document.querySelectorAll(".pubwork-news-item");

    if (newsCards.length > 0) {

        const cardsPerPage =
            getNewsCardsPerPage();

        const totalPages =
            Math.ceil(newsCards.length / cardsPerPage);

        updateNewsButtons(totalPages);

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




document.addEventListener('DOMContentLoaded', function () {
    resetCarousel('certTrack', '.webinarcert', '.cert-prev', '.cert-next', certState);
    resetCarousel('comicTrack', '.pubwork-comic-item', '.comic-prev', '.comic-next', comicState);
    resetCarousel('newsTrack', '.pubwork-news-item', '.news-prev', '.news-next', newsState);
    resetCarousel('dailyTrack', '.pubwork-daily-item', '.daily-prev', '.daily-next', dailyState);
});

window.addEventListener('resize', function () {
    resetCarousel('certTrack', '.webinarcert', '.cert-prev', '.cert-next', certState);
    resetCarousel('comicTrack', '.pubwork-comic-item', '.comic-prev', '.comic-next', comicState);
    resetCarousel('newsTrack', '.pubwork-news-item', '.news-prev', '.news-next', newsState);
    resetCarousel('dailyTrack', '.pubwork-daily-item', '.daily-prev', '.daily-next', dailyState);
});
