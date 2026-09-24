// THE BROZ GYM
// Simple and stable JavaScript


// MOBILE MENU

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("open");
    });

}


// CLOSE MOBILE MENU AFTER CLICKING LINK

const links = document.querySelectorAll("#nav a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


// BACK TO TOP BUTTON

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function() {

    if (!topButton) return;

    if (window.scrollY > 500) {
        topButton.classList.add("show");
    } else {
        topButton.classList.remove("show");
    }

});


if (topButton) {

    topButton.addEventListener("click", function() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// CURRENT YEAR

const footerYear = document.querySelector("footer small");

if (footerYear) {

    footerYear.textContent =
        "© " +
        new Date().getFullYear() +
        " The Broz Gym. All Rights Reserved.";

}