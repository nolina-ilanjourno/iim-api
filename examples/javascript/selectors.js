// Sélecteurs JavaScript pour le DOM

// Sélectionner par ID
const elementById = document.getElementById("monId");
console.log("Élément par ID:", elementById);

// Sélectionner par classe
const elementsByClass = document.getElementsByClassName("maClasse");
console.log("Éléments par classe:", elementsByClass);

// Sélectionner par balise
const elementsByTagName = document.getElementsByTagName("div");
console.log("Éléments par nom de balise:", elementsByTagName);

// Sélectionner le premier élément qui correspond au sélecteur CSS
const firstElementByCss = document.querySelector(".maClasse");
console.log("Premier élément par sélecteur CSS:", firstElementByCss);

// Sélectionner tous les éléments qui correspondent au sélecteur CSS
const allElementsByCss = document.querySelectorAll("div.maClasse");
console.log("Tous les éléments par sélecteur CSS:", allElementsByCss);

// Sélectionner des éléments par attributs
const elementsByAttribute = document.querySelectorAll("[type='button']");
console.log("Éléments par attribut:", elementsByAttribute);

// Itération sur les éléments d'une NodeList
allElementsByCss.forEach((element) => {
  console.log("Élément de NodeList:", element);
});

// Accéder aux parents, enfants, et frères et sœurs
const parentElement = elementById.parentElement;
console.log("Parent de l'élément:", parentElement);

const childrenElements = elementById.children;
console.log("Enfants de l'élément:", childrenElements);

const nextSibling = elementById.nextElementSibling;
console.log("Frère suivant:", nextSibling);

const previousSibling = elementById.previousElementSibling;
console.log("Frère précédent:", previousSibling);

// Vous pouvez ajouter d'autres exemples ou manipulations selon vos besoins.
