const menuForms = document.querySelectorAll(".modalOpen");
const modal = document.querySelector(".modal");
const crossModal = document.querySelector(".closeModal");
const modalFormBox = document.querySelector(".modal-box");
const modalForm = document.querySelector(".modal-form");
const closeRespModal = document.querySelector(".close-resp-menu");
const menuResp = document.querySelector(".menu");
const menuTrigger = document.querySelector(".menu-trigger-resp");


menuTrigger.addEventListener("click", function (e) {
  menuResp.style.translate = "-50vw";
  console.log(getComputedStyle(menuResp).getPropertyValue('width'))
});

closeRespModal.addEventListener("click", function (e) {
  menuResp.style.translate = "0";
  console.log(getComputedStyle(menuResp).getPropertyValue('width'))
});
modal.addEventListener("click", function (e) {
  if (e.target.className !== "modal-box") {
    // closeModal();
  }
});
crossModal.addEventListener("click", function () {
  closeModal();
});

console.log(getComputedStyle(document.querySelector(".menu")));
for (let i = 0; i < menuForms.length; i++) {
  menuForms[i].addEventListener("click", function () {
    openModal();
    let div = document.createElement("div");
    if (menuForms[i].dataset.target === "register") {
      modalFormBox.style.height = "80vh"
      let divTitle = document.createElement("div");
      divTitle.appendChild(document.createTextNode("Register"));
      divTitle.classList.add("mf-title");

      let divSubTitle = document.createElement("div");
      divSubTitle.appendChild(
        document.createTextNode("Create your account now")
      );
      divSubTitle.classList.add("mf-subTitle");

      let userInput = document.createElement("input");
      userInput.classList.add("mf-input");
      userInput.placeholder = "User Name *";
      let emailInput = document.createElement("input");
      emailInput.classList.add("mf-input");
      emailInput.placeholder = "Email *";

      let passInput = document.createElement("input");
      passInput.classList.add("mf-input");
      passInput.placeholder = "Password *";

      let confirmInput = document.createElement("input");
      confirmInput.classList.add("mf-input");
      confirmInput.placeholder = "Repeat Password *";

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
      modalFormBox.style.height = "60vh"
      let divTitle = document.createElement("div");
      divTitle.appendChild(document.createTextNode("Login"));
      divTitle.classList.add("mf-title");

      let userInput = document.createElement("input");
      userInput.classList.add("mf-input");
      userInput.placeholder = "User Name *";

      let passInput = document.createElement("input");
      passInput.classList.add("mf-input");
      passInput.placeholder = "Password *";

      let confirmBtn = document.createElement("div");
      confirmBtn.appendChild(document.createTextNode("Login"));
      confirmBtn.classList.add("mf-btn");

      let divCheckBox = document.createElement("div");
      let checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkBox.id = "rememberMe";

      let label = document.createElement("label");
      label.appendChild(document.createTextNode("Remember me"));
      label.classList.add("label-login");
      divCheckBox.appendChild(checkBox);
      divCheckBox.appendChild(label);

      let forgotPass = document.createElement("div");
      forgotPass.style.position = "relative";
      // forgotPass.appendChild(document.createTextNode("forgot password"));
      let forgotPasstext = document.createElement("div");

      forgotPasstext.style.position = "relative"
      forgotPasstext.style.zIndex = "1"
      forgotPasstext.appendChild(document.createTextNode("forgot password"));
      forgotPasstext.classList.add("forgotPassText");
      let divbgcolor = document.createElement("div");
      divbgcolor.classList.add("forgotpassWidthEffect");
      divbgcolor.style.position = "absolute";
      divbgcolor.style.backgroundColor = "rgb(255, 230, 0)";
      divbgcolor.style.height = "100%";
      divbgcolor.style.zIndex = "0";

      let arrowFP = document.createElement("div");
      arrowFP.classList.add("arrowFP");
      forgotPass.appendChild(forgotPasstext);

      forgotPass.appendChild(arrowFP);
      forgotPass.appendChild(divbgcolor);
      forgotPass.classList.add("forgot-pass");

      let divUserManage = document.createElement("div");
      divUserManage.classList.add("row");

      divUserManage.appendChild(divCheckBox);
      divUserManage.appendChild(forgotPass);

      div.appendChild(divTitle);
      div.appendChild(userInput);
      div.appendChild(passInput);
      div.appendChild(divUserManage);
      div.appendChild(confirmBtn);

      modalForm.appendChild(div);
    }
  });
}

function closeModal() {
  modal.style.opacity = 0;
  modal.style.pointerEvents = "none";
  while (modalForm.firstChild) {
    modalForm.removeChild(modalForm.firstChild);
  }
}

function openModal() {
  modal.style.opacity = 1;
  modal.style.pointerEvents = "auto";
}