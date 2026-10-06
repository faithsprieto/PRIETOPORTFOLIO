/* for next and prev buttons carousel */


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

    const cardsPerPage = getCardsPerPage();

    const cardWidth = cards[0].offsetWidth;
    const gap = 10;

    const totalPages = Math.ceil(cards.length / cardsPerPage);

    currentCertPage += direction;

    if (currentCertPage < 0) {
        currentCertPage = 0;
    }

    if (currentCertPage >= totalPages) {
        currentCertPage = totalPages - 1;
    }

    const moveAmount =
        currentCertPage * (cardsPerPage * cardWidth + (cardsPerPage - 1) * gap);

    track.style.transform = `translateX(-${moveAmount}px)`;

    updateCertButtons(totalPages);
}

function updateCertButtons(totalPages) {
    const prevButton = document.querySelector(".cert-prev");
    const nextButton = document.querySelector(".cert-next");

    prevButton.disabled = currentCertPage === 0;
    nextButton.disabled = currentCertPage === totalPages - 1;
}

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".webinarcert");

    const cardsPerPage = getCardsPerPage();
    const totalPages = Math.ceil(cards.length / cardsPerPage);

    updateCertButtons(totalPages);
});


/*for navbar*/

    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        const headerBottom = header.offsetTop + header.offsetHeight;

        if (window.scrollY >= headerBottom) {
            navbar.classList.add('show');
        } else {
            navbar.classList.remove('show');
        }
    });

    /*for back to top*/
    const backToTop = document.getElementById('backToTop');

    backToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


/* navbar buttons */

document.getElementById("skillsBtn").addEventListener("click", function () {
    const section = document.getElementById("skills");

    window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
    });
});

document.getElementById("projectsBtn").addEventListener("click", function () {
    const section = document.getElementById("projects");

    window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
    });
});

document.getElementById("certificationsBtn").addEventListener("click", function () {
    const section = document.getElementById("certifications");

    window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
    });
});

document.getElementById("otherWorksBtn").addEventListener("click", function () {
    const section = document.getElementById("other-works");

    window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth"
    });
});




