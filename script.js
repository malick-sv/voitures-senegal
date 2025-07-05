document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const modalClose = document.getElementById("modal-close");

  function showMessage(text) {
    modalMessage.textContent = text;
    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  document.querySelectorAll("button.acheter").forEach(button => {
    button.addEventListener("click", () => {
      showMessage("📞 Pour acheter ce véhicule, appelez le 76 502 41 60.");
    });
  });

  document.querySelectorAll("button.louer").forEach(button => {
    button.addEventListener("click", () => {
      showMessage("📞 Pour louer ce véhicule, appelez le 76 502 41 60.");
    });
  });
});

