// Variables, Arrays, Objects, Map, forEach et for en JavaScript

// Déclaration de variables
let variableLet = "Je suis une variable 'let'";
const variableConst = "Je suis une constante";

variableLet = "Je peux être modifiée";

// Déclaration d'un tableau (Array)
let monArray = ["pomme", "banane", "cerise"];

// Ajout d'éléments à un Array
monArray.push("orange");

// Accès à un élément de l'Array
console.log("Premier fruit:", monArray[0]); // Affiche "pomme"

// Déclaration d'un objet
let monObjet = {
  nom: "Dupont",
  prenom: "Jean",
  age: 30,
};

// Accès aux propriétés de l'objet
console.log("Nom:", monObjet.nom); // Affiche "Dupont"

// Modification d'une propriété
monObjet.age = 31;

// Boucle forEach sur un Array
monArray.forEach((element) => {
  console.log("Élément de monArray:", element);
});

// Boucle forEach sur une Map
maMap.forEach((valeur, clé) => {
  console.log(`Clé: ${clé}, Valeur: ${valeur}`);
});

// Boucle for classique
for (let i = 0; i < monArray.length; i++) {
  console.log(`Élément à l'indice ${i} est: ${monArray[i]}`);
}

// Vous pouvez ajouter d'autres exemples ou manipulations selon vos besoins.
