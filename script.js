document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");
  const modalClose = document.getElementById("modal-close");
  const splash = document.getElementById("splash-screen");

  // Fonction pour afficher un message personnalisé dans la modale
  function showMessage(message) {
    modalMessage.textContent = message;
    modal.style.display = "flex";
  }

  // Fermer la modale quand on clique sur le bouton
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Ajouter les événements pour les boutons "Acheter" et "Louer"
  document.querySelectorAll("button.acheter, button.louer").forEach(button => {
    button.addEventListener("click", function () {
      const carName = this.closest('.car').querySelector('h3').innerText;
      const action = this.classList.contains("acheter") ? "acheter" : "louer";
      const phone = "76 502 41 60";

      showMessage(`📞 Vous souhaitez ${action} ${carName} ? Appelez le ${phone}.`);
    });
  });

  // Splash screen : masqué après 3 secondes
  if (splash) {
    setTimeout(() => {
      splash.style.display = 'none';
    }, 3000);
  }
});


