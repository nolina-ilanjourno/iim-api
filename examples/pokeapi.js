const getPikachu = () => {
  // On utilise la fonction fetch pour envoyer une requête à l'API PokéAPI
  return fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    .then((response) => {
      // La méthode .then() reçoit une réponse (response) de la requête
      // On vérifie si la réponse est positive (status 200-299)
      if (response.ok) {
        // Si c'est le cas, on retourne la réponse au format JSON
        return response.json();
      } else {
        // Sinon, on rejette la promesse avec une erreur
        throw new Error("Failed to fetch data");
      }
    })
    .then((data) => {
      data.types.forEach((typeInfo, index) => {
        console.log(`Type ${index + 1}:`, typeInfo.type.name);
      });
      return data;
    })
    .catch((error) => {
      // La méthode .catch() capture toute erreur qui survient durant la requête ou le traitement des données
      console.error("Error:", error);
    });
};

const getPikachu2 = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    data.types.forEach((typeInfo, index) => {
      console.log(`Type ${index + 1}:`, typeInfo.type.name);
    });
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};
