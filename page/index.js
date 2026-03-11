const buttonEdit = document.querySelector(".main__button_edit");
const popupButtonClose = document.querySelector(".popup__button_close");
const popupButtonSave = document.querySelector(".popup__button_save");

const profileName = document.querySelector(".main__info_name");
const profileAbout = document.querySelector(".main__info_profession");

const popupEdit = document.querySelector(".popup");
const popupFormEdit = document.querySelector(".popup__form-edit");

const nameInput = document.querySelector(".popup__input_name");
const aboutInput = document.querySelector(".popup__input_about");

function openPopup(popup) {
  nameInput.value = profileName.textContent;
  aboutInput.value = profileAbout.textContent;

  toggleSaveButton();

  popup.classList.add("popup__opened");
}

function closePopup(popup) {
  popup.classList.remove("popup__opened");
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = nameInput.value;
  profileAbout.textContent = aboutInput.value;

  closePopup(popupEdit);
}

function toggleSaveButton() {
  if (nameInput.value.trim() === "" || aboutInput.value.trim() === "") {
    popupButtonSave.classList.add("popup__button_disabled");
    popupButtonSave.disabled = true;
  } else {
    popupButtonSave.classList.remove("popup__button_disabled");
    popupButtonSave.disabled = false;
  }
}

buttonEdit.addEventListener("click", () => {
  openPopup(popupEdit);
});

popupButtonClose.addEventListener("click", () => {
  closePopup(popupEdit);
});

popupEdit.addEventListener("click", function (evt) {
  if (evt.target === popupEdit) {
    closePopup(popupEdit);
  }
});

popupFormEdit.addEventListener("submit", handleProfileFormSubmit);

nameInput.addEventListener("input", toggleSaveButton);
aboutInput.addEventListener("input", toggleSaveButton);
