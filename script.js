
// ND.BOUQUET WEBSITE

console.log("Welcome to ND.BOUQUET!");

document.addEventListener("DOMContentLoaded", function () {

    const navigationLinks = document.querySelectorAll(
        '.nav-menu a, a[href="#products"]'
    );

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (targetId && targetId.startsWith("#")) {

                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    event.preventDefault();

                    const startPosition = window.scrollY;
                    const targetPosition =
                        targetSection.getBoundingClientRect().top +
                        window.scrollY;

                    const distance = targetPosition - startPosition;
                    const duration = 1500;
                    let startTime = null;

                    function animateScroll(currentTime) {

                        if (startTime === null) {
                            startTime = currentTime;
                        }

                        const elapsed = currentTime - startTime;
                        const progress = Math.min(
                            elapsed / duration, 1
                        );

                        const ease = 0.5 -
                            Math.cos(progress * Math.PI) / 2;

                        window.scrollTo(
                            0,
                            startPosition + distance * ease
                        );

                        if (progress < 1) {
                            requestAnimationFrame(animateScroll);
                        }
                    }

                    requestAnimationFrame(animateScroll);
                }
            }
        });
    });
});
