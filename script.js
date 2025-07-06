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

// Splash screen removal après 3 secondes
window.addEventListener("load", function () {
  const splash = document.getElementById("splash-screen");
  if (splash) {
    setTimeout(() => {
      splash.style.display = "none";
    }, 3000);
  }
});
// Dans script.js
window.addEventListener('load', () => {
  const splash = document.getElementById('splash-screen');
  setTimeout(() => {
    splash.style.display = 'none';
  }, 2000); // 2 secondes
});
// script.js
document.querySelectorAll('.acheter, .louer').forEach(btn => {
  btn.addEventListener('click', function () {
    const carName = this.parentElement.querySelector('h3').innerText;
    document.getElementById('modal-message').innerText = `Vous avez sélectionné ${carName}. Nous vous contacterons bientôt.`;
    document.getElementById('modal').style.display = 'block';
  });
});

document.getElementById('modal-close').addEventListener('click', function () {
  document.getElementById('modal').style.display = 'none';
});
window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    splash.style.display = 'none';
  }, 4000); // Laisse l’animation jouer pendant 4 secondes
});


