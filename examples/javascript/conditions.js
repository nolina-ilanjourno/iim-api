// Exemples de conditions en JavaScript pour débutants

// ---- If, Else If, Else ----
// Exemple simple avec if
let age = 18;
if (age >= 18) {
  console.log("Vous êtes majeur.");
}

// Utilisation de else
let temperature = 30;
if (temperature > 30) {
  console.log("Il fait chaud !");
} else {
  console.log("Il ne fait pas si chaud.");
}

// Utilisation de else if
let note = 75;
if (note >= 90) {
  console.log("Excellent !");
} else if (note >= 70) {
  console.log("Bien !");
} else if (note >= 50) {
  console.log("Passable.");
} else {
  console.log("Échec.");
}

// ---- Switch ----
// Exemple de switch
let couleur = "rouge";
switch (couleur) {
  case "rouge":
    console.log("La couleur est rouge.");
    break;
  case "bleu":
    console.log("La couleur est bleu.");
    break;
  default:
    console.log("Couleur non reconnue.");
}

// ---- Condition Ternaire ----
// Exemple simple de condition ternaire
let estEnLigne = true;
let statut = estEnLigne ? "Utilisateur en ligne" : "Utilisateur hors ligne";
console.log(statut);

// ---- Conditions Combinées ----
// Utilisation de && (et) et || (ou)
let x = 5;
if (x > 0 && x < 10) {
  console.log("x est un nombre positif inférieur à 10.");
}

let y = 12;
if (y < 10 || y > 20) {
  console.log("y est soit inférieur à 10, soit supérieur à 20.");
}

// ---- Utilisation de Not (!) ----
// Exemple de la négation
let estPlein = false;
if (!estPlein) {
  console.log("Le réservoir n'est pas plein.");
}

// Vous pouvez ajouter d'autres exemples ou manipulations selon les besoins pédagogiques.
