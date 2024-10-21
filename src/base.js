document.addEventListener("DOMContentLoaded", function () {
    let panel = document.getElementById("panel");
    let menu = document.getElementById("menu");


    var slideout = new Slideout({
        panel: panel,
        menu: menu,
        padding: 256,
        tolerance: 70,
    });

    // Toggle button
    document
        .querySelector(".mobile__menu")
        .addEventListener("click", function () {
            slideout.toggle();
        });

    function close(eve) {
        eve.preventDefault();
        slideout.close();
    }

    slideout
        .on("beforeopen", function () {
            this.panel.classList.add("panel-open");
        })
        .on("open", function () {
            this.panel.addEventListener("click", close);
        })
        .on("beforeclose", function () {
            this.panel.classList.remove("panel-open");
            this.panel.removeEventListener("click", close);
        });

    const element = document.querySelectorAll(".titleSection");
    let index = 0
    let options = {
        rootMargin: '250px 0',
        threshold: 0.5 // El 50% del elemento debe estar visible para disparar el callback
    };

    const observer = new IntersectionObserver((entries, observer, options) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const animationClass = index % 2 === 0 ? "u--fadeInLeft" : "u--fadeInRight";
                // Espera 2 segundos y luego asigna la clase de animación
                setTimeout(() => {
                    entry.target.classList.add(animationClass);// Usa entry.target para referirte al elemento específico
                }, 1500); // Espera 2 segundos
                index++;

                observer.unobserve(entry.target);
            }
        });
    });

    // Observa el elemento
    if (element) {
        element.forEach((element) => {
            observer.observe(element);
        });
    }

    const timer = document.querySelector(".timer"); // Selecciona el único elemento con la clase .timer

    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Aplica la animación cuando el timer es visible
                setTimeout(() => {
                    entry.target.classList.add("u--fadeInRight"); // Añade la clase de animación
                }, 1500); // Espera 2 segundos
                // Desconecta el observer ya que solo necesitas la animación una vez
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5 // Ajusta el umbral si es necesario (0.5 = 50% visible)
    });

    // Aplica el observer al elemento .timer
    if (timer) {
        observer2.observe(timer);
    }

});