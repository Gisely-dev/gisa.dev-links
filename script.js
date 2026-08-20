/* =================================
   GISA.DEV — LINK PAGE
================================= */


const links = document.querySelectorAll(".link-card");


links.forEach((link) => {

    link.addEventListener("click", function () {

        this.classList.add("clicked");

        setTimeout(() => {
            this.classList.remove("clicked");
        }, 180);

    });

});


/* =================================
   EFEITO DE DIGITAÇÃO
================================= */

const subtitle = document.querySelector(".subtitle");

const originalText = subtitle.textContent.trim();

subtitle.textContent = "";

let index = 0;


function typeEffect() {

    if (index < originalText.length) {

        subtitle.textContent += originalText.charAt(index);

        index++;

        setTimeout(typeEffect, 55);

    }

}


setTimeout(typeEffect, 700);