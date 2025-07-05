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
});document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modal-close");

  function openModal() {
    modal.style.display = "flex";
  }

  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  document.querySelectorAll("button.acheter, button.louer").forEach(button => {
    button.addEventListener("click", openModal);
  });
});
// Supprimer l'écran de chargement après l'animation
window.addEventListener("load", function () {
  const splash = document.getElementById("splash-screen");
  setTimeout(() => {
    splash.style.display = "none";
  }, 2500); // 2.5 secondes
});
window.addEventListener("load", function () {
  const splash = document.getElementById("splash-screen");
  setTimeout(() => {
    splash.style.display = "none";
  }, 3500); // durée totale avant disparition (3.5 sec)
});



