const baseURL = "http://localhost:4000/api/pokemons/";

const PokemonService = {
  getPokemon() {
    return fetch(baseURL).then((res) => res.json());
  },

  postPokemon(payload) {
    return fetch(baseURL, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },

  removePokemon(id) {
    return fetch(baseURL + id, {
      method: "DELETE",
    });
  },

  putPokemon(id, payload) {
    return fetch(baseURL + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  },
};

export default PokemonService;
