// Modal Handling
const modal = document.getElementById("booking-modal");
const bookNowButton = document.querySelector(".book-now");
const cancelButton = document.querySelector(".cancel");

bookNowButton.addEventListener("click", () => {
  modal.style.display = "flex";
});

cancelButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Rating logic
const stars = document.querySelectorAll('.stars span');
const ratingFeedback = document.getElementById('ratingFeedback');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        stars.forEach((s, i) => {
            s.classList.toggle('active', i <= index);
        });
        ratingFeedback.textContent = `You rated this course ${index + 1} star(s).`;
    });
});