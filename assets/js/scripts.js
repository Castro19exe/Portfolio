function copyText(id) {
    const input = document.getElementById(id);
    navigator.clipboard.writeText(input.value).then(() => {
        const msg = document.getElementById("copy-message");
        msg.textContent = `Copiado: ${input.value}`;
        setTimeout(() => (msg.textContent = ""), 2000);
    });
}

const sections = document.querySelectorAll('.section-structure, .section-structure-smaller');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

const goTopBtn = document.getElementById("goTopBtn");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 200) {
        goTopBtn.classList.add("show");
    } else {
        goTopBtn.classList.remove("show");
    }
});

goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", function() {
    const linkSkills = document.getElementById("link-skills");
    if (linkSkills) {
        linkSkills.addEventListener("click", function(event) {
            event.preventDefault();
            const section = document.getElementById("skills");
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollTo = sectionTop - (windowHeight / 2) + (sectionHeight / 2);
            window.scrollTo({
                top: scrollTo,
                behavior: "smooth"
            });
        });
    }

    document.querySelectorAll('a').forEach(link => {
        link.addEventListener("click", function(event) {
            const targetId = this.getAttribute("href"); 
            if (targetId.startsWith("#")) {
                event.preventDefault();
                const section = document.querySelector(targetId);
                const navbarHeight = document.querySelector('.nav-menu').offsetHeight;

                let scrollTo;

                if (targetId === "#skills") {
                    // centro da secção
                    scrollTo = section.offsetTop - (window.innerHeight / 2) + (section.offsetHeight / 2);
                } else {
                    // topo da secção, mas acima da navbar
                    scrollTo = section.offsetTop - navbarHeight;
                }

                window.scrollTo({
                    top: scrollTo,
                    behavior: "smooth"
                });
            }
        });
    });

    
});