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
});