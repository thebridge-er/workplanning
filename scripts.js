document.addEventListener("DOMContentLoaded", function () {

    const nextBtn = document.getElementById("next-btn");
    const prevBtn = document.getElementById("prev-btn");
    const steps = document.querySelectorAll(".step");

    nextBtn.addEventListener("click", function () {
        steps[0].classList.remove("active");
        steps[1].classList.add("active");
    });

    prevBtn.addEventListener("click", function () {
        steps[1].classList.remove("active");
        steps[0].classList.add("active");
    });

});

