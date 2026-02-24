const openButton = document.querySelector("#open-modal");
const closeButton = document.querySelector(".close-button");
const modalEl = document.querySelector("#modal");

function openModal(){
    modalEl.classList.add("open");
    modalEl.setAttribute("aria-hidden", "false");
}

function closeModal(){
    modalEl.classList.remove("open");
    modalEl.setAttribute("aria-hidden", "true");
}

openButton.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
    if (e.target === modalEl) {
        closeModal();
    }
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        closeModal();
    }
});