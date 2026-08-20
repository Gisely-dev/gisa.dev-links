// Animação simples ao clicar nos links

const links = document.querySelectorAll(".link-card");

links.forEach(link => {

    link.addEventListener("click", () => {

        link.style.transform = "scale(0.98)";

        setTimeout(() => {
            link.style.transform = "";
        }, 150);

    });

});