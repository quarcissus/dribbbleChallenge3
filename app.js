const menuForms = document.querySelectorAll(".modalOpen");
const modal = document.querySelector(".modal");
const crossModal = document.querySelector(".closeModal");
const modalFormBox = document.querySelector(".modal-box");
const modalForm = document.querySelector(".modal-form");

modal.addEventListener("click", function (e) {
    if (e.target.className !== "modal-box") {
        // closeModal();
    }
})
crossModal.addEventListener("click", function () {
    closeModal();
})

for (let i = 0; i < menuForms.length; i++) {
    menuForms[i].addEventListener("click", function () {
        openModal();
        let div = document.createElement("div");
        if (menuForms[i].dataset.target === "register") {

            let divTitle = document.createElement("div");
            divTitle.appendChild(document.createTextNode("Register"));
            divTitle.classList.add("mf-title");

            let divSubTitle = document.createElement("div");
            divSubTitle.appendChild(document.createTextNode("Create your account now"));
            divSubTitle.classList.add("mf-subTitle");

            let userInput = document.createElement("input");
            userInput.classList.add("mf-input");
            userInput.placeholder = "User Name *"
            let emailInput = document.createElement("input");
            emailInput.classList.add("mf-input");
            emailInput.placeholder = "Email *"

            let passInput = document.createElement("input");
            passInput.classList.add("mf-input");
            passInput.placeholder = "Password *"

            let confirmInput = document.createElement("input");
            confirmInput.classList.add("mf-input");
            confirmInput.placeholder = "Repeat Password *"


            let confirmBtn = document.createElement("div");
            confirmBtn.appendChild(document.createTextNode("Register"));
            confirmBtn.classList.add("mf-btn");


            div.appendChild(divTitle);
            div.appendChild(divSubTitle);
            div.appendChild(userInput);
            div.appendChild(emailInput);
            div.appendChild(passInput);
            div.appendChild(confirmInput);
            div.appendChild(confirmBtn);

            modalForm.appendChild(div);
        } else {

        }
    })
}

function closeModal() {
    modal.style.opacity = 0;
    modal.style.pointerEvents = "none";
    while (modalForm.firstChild) {
        modalForm.removeChild(modalForm.firstChild)
    }

}

function openModal() {
    modal.style.opacity = 1;
    modal.style.pointerEvents = "auto";
}