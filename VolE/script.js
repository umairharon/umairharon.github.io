document.addEventListener("DOMContentLoaded", function() {
    const sotaButton = document.getElementById("sotaButton");
    const ablationButton = document.getElementById("ablationButton");
    const sotaContent = document.getElementById("sotaContent");
    const ablationContent = document.getElementById("ablationContent");

    sotaButton.addEventListener("click", function() {
        sotaContent.classList.remove("d-none");
        ablationContent.classList.add("d-none");
        sotaButton.classList.add("btn-primary");
        sotaButton.classList.remove("btn-secondary");
        ablationButton.classList.add("btn-secondary");
        ablationButton.classList.remove("btn-primary");
    });

    ablationButton.addEventListener("click", function() {
        sotaContent.classList.add("d-none");
        ablationContent.classList.remove("d-none");
        ablationButton.classList.add("btn-primary");
        ablationButton.classList.remove("btn-secondary");
        sotaButton.classList.add("btn-secondary");
        sotaButton.classList.remove("btn-primary");
    });
});
