const menuForms = document.querySelectorAll(".modalOpen");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal");


closeModal.addEventListener("click", function () {
    modal.style.opacity = 0;
    modal.style.pointerEvents = "none";
})

for (let i = 0; i < menuForms.length; i++) {
    menuForms[i].addEventListener("click", function () {
        modal.style.opacity = 1;
        modal.style.pointerEvents = "auto";

        if (menuForms[i].dataset.target === "register") {
            console.log("registro")
        } else {
            console.log("login")
        }
    })
}