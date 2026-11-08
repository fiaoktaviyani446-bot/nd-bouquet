
// ND.BOUQUET WEBSITE

console.log("Welcome to ND.BOUQUET!");

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling untuk menu navigasi
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

                    targetSection.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }

        });

    });

});
