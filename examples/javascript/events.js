// Gestion des événements en JavaScript

// Fonction pour gérer le clic sur un bouton
function onButtonClick() {
  console.log("Bouton cliqué");
}

// Ajout d'un écouteur d'événements au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  console.log("Le DOM est entièrement chargé et analysé");

  // Attacher un gestionnaire de clic à un bouton
  const button = document.getElementById("monBouton");
  if (button) {
    button.addEventListener("click", onButtonClick);
  }

  // Gestion des événements de saisie dans un champ de texte
  const inputField = document.getElementById("monChamp");
  if (inputField) {
    inputField.addEventListener("input", (event) => {
      console.log("Valeur saisie:", event.target.value);
    });
  }

  // Gestion des événements de survol de la souris
  const hoverElement = document.getElementById("monElementSurvol");
  if (hoverElement) {
    hoverElement.addEventListener("mouseover", () => {
      console.log("Élément survolé");
    });
    hoverElement.addEventListener("mouseout", () => {
      console.log("Souris sortie de l'élément");
    });
  }

  // Gestion des événements de formulaire
  const form = document.getElementById("monFormulaire");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Empêche l'envoi classique du formulaire
      console.log("Formulaire soumis");
    });
  }

  // Ajout d'autres gestionnaires d'événements selon les besoins
});

// Vous pouvez ajouter d'autres types d'événements et leurs gestionnaires selon vos besoins.
