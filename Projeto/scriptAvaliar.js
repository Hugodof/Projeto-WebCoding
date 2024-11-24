document.addEventListener("DOMContentLoaded", () => {
    const stars = document.querySelectorAll(".stars span");
    const output = document.getElementById("rating-output");
    let selectedRating = 0;

    stars.forEach((star) => {
        star.addEventListener("mouseover", (e) => {
            resetStars();
            highlightStars(e.target.dataset.value);
        });

        star.addEventListener("click", (e) => {
            selectedRating = e.target.dataset.value;
            resetStars();
            highlightStars(selectedRating, true);
            output.textContent = `Você avaliou com ${selectedRating} estrela(s)!`;
        });
    });

    document.querySelector(".stars").addEventListener("mouseleave", () => {
        resetStars();
        if (selectedRating > 0) {
            highlightStars(selectedRating, true);
        }
    });

    function highlightStars(count, isActive = false) {
        for (let i = 0; i < count; i++) {
            const star = stars[i];
            star.style.color = "gold";
            if (isActive) star.classList.add("active");
        }
    }

    function resetStars() {
        stars.forEach((star) => {
            star.style.color = "gray";
            star.classList.remove("active");
        });
    }
});
