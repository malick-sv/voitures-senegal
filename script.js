document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Merci pour votre intérêt ! Nous vous contacterons bientôt.");
  });
});
// Script vide pour l'instant
console.log("Bienvenue sur Voitures Sénégal !");
// script.js

document.addEventListener("DOMContentLoaded", function () {
  const buyButtons = document.querySelectorAll("button.acheter");
  const rentButtons = document.querySelectorAll("button.louer");

  buyButtons.forEach(button => {
    button.addEventListener("click", function () {
      alert("Pour acheter ce véhicule, appelez le 76 502 41 60.");
    });
  });

  rentButtons.forEach(button => {
    button.addEventListener("click", function () {
      alert("Pour louer ce véhicule, appelez le 76 502 41 60.");
    });
  });
});
